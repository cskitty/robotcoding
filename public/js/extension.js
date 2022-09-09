let extensionIndexURL = "/";
let extensionIndex = null;

let updateExtensionIndex = async () => {
    extensionIndex=1;
    return true;
}

let installExtension = async (extensionId) => {
    onFail = 0;
    let code="";
    $.ajaxSettings.async = false;
    $.get(`/extension/py/${extensionId}`)
    .done(function (responseText) {
        code=responseText;
    })
    .fail(function () { 
        NotifyE(`${yy_msg["EXT_GET_FILE_FAIL"]} ${extensionId}`);
        onFail=1;
        return;
    });

    if(onFail==1){
        return;
    }
    
    onSuccess=0;
    if (!serialPort) {
        if (!await serialConnect()) {
            $("#upload-program").removeClass("loading");
            onInstalling=0;
            return;
        }
        await sleep(300);
    }
    let filesUpload = [];
    filesUpload.push({
        file: `${extensionId}`,
        content: code
    });

    try {
        let method;

        const enterToREPL = async () => {
            method = new UploadViaREPL();
            try {
                await method.start();
            } catch (e) {
                //firewareUpgradeFlow();
                NotifyE(`${yy_msg["EXT_UP_FILE_FAIL"]}`+e);
                //throw e;
                return;
            }
        };

        let board = boards.find(board => board.id === boardId);
        if (board.uploadMode && board.uploadMode === "REPL") {
            await enterToREPL();
        } else {
            method = new UploadOnBoot();

            try {
                await method.start();
            } catch (e) {
                NotifyW("Switch to upload via RawREPL [RECOMMENDED Upgrade fireware]");
                await enterToREPL();
            }
        }

        for (let a of filesUpload) {
            statusLog(`Uploading ${a.file}`);
            await method.upload(a.file, a.content);
        }

        await method.end();  
        onSuccess=1;
        NotifyS(`${yy_msg["EXT_UP_FILE_OK"]}`);
    } catch(e) {
        throw e;
    }
    return;
}


$("#open-extension-dialog").click(async () => {
    $("#extension-dialog .extension-list").html('');

    ShowDialog($("#extension-dialog"));
    
    Notiflix.Block.Standard("#extension-dialog > section", 'Loading...');

    if (!extensionIndex) {
        if (!(await updateExtensionIndex())) {
            Notiflix.Block.Remove("#extension-dialog > section");
            return;
        }
    }

    $(".extension-category-list > li:first-child").click();
    
    Notiflix.Block.Remove("#extension-dialog > section");
});

let uploadModuleList = [];

Blockly.Python.addUploadModule = (module) => {
    uploadModuleList.push(module);
}

$("#open-extension-creator").click(() => {
    $(".add-extension-box").fadeIn();
});

onInstalling = 0;
let showExtensionList = (extensionList) => {
    $("#extension-dialog .extension-list").html('');
    onInstalling = 0;
    filename="/extension/ext_"+boardId+"_"+jslang+".json";
    $.getJSON(`${filename}?v=${jsver}`,function(r){
        for(i=0;i<r.length;i++)
        {
            $("#extension-dialog .extension-list").append(`
                <li>
                    <div class="extension-box" data-extension-id="${r[i].id}" file="${r[i].file}">
                        <div class="header">
                            <div class="cover">
                                <img src="${r[i].icon}" alt="">
                            </div>
                            <div class="detail">
                                <div class="name">${r[i].name}<span class="installed-icon"><i class="fas fa-check-circle"></i></span></div>
                                <div class="author"></div>
                                <div class="other">
                                    <span class="version" style="background-color: ${r[i].color}">${r[i].ver}</span>
                                </div>
                            </div>
                        </div>
                        <div class="description">${r[i].desc}</div>
                        <div class="button">
                            <button class="extension-install"><i class="fas fa-download"></i> ${yy_msg["EXT_INSTALL"]}</button>
                        </div>
                    </div>
                </li>
            `);
        }
        $(".extension-install").click(async function() {
            if(onInstalling==1)
            {
                return;
            }
            onInstalling=1;
            let extensionId = $(this).parents(".extension-box").attr("file");
            let qextensionId =$(this).parents(".extension-box").attr("data-extension-id");
            let queryBox = `.extension-box[data-extension-id='${qextensionId}']`;
            Notiflix.Block.Standard(queryBox, 'Installing...');
            if (await installExtension(extensionId)) {
                $(queryBox).addClass("installed");
            }
    
            Notiflix.Block.Remove(queryBox);
            if(onSuccess==1 )
            {
                onInstalling=0;
                $(queryBox).addClass("installed");
            }
        });
    
    });
    
}

$(".extension-category-list > li").click(function() {
    let categoryName = $(this).text();

    let extensionList = { };
    if (categoryName != "Installed") {
        for (const [id, info] of Object.entries(extensionIndex)) {
            if (categoryName !== "All" && categoryName !== info.category) {
                continue;
            }
            extensionList[id] = JSON.parse(JSON.stringify(info));
            extensionList[id].icon = `${info.github}/raw/master/${info.icon}`;
        }
    } else {
        for (const extensionId of fs.ls("/extension")) {
            let extension = fs.read(`/extension/${extensionId}/extension.js`);
            extension = eval(extension);
            extensionList[extensionId] = extension;
            extensionList[extensionId].icon = fs.read(`/extension/${extensionId}/${extension.icon}`);
        }
    }

    showExtensionList(extensionList);

    $(".extension-category-list > li").removeClass("active");
    $(this).addClass("active");
});

$("#extension-keyword").keyup(function() { 
    let keyword = $(this).val().toLowerCase();

    $(".extension-category-list > li").removeClass("active");

    let extensionList = { };
    for (const [id, info] of Object.entries(extensionIndex)) {
        if (info.name.toLowerCase().indexOf(keyword) < 0) {
            continue;
        }
        extensionList[id] = JSON.parse(JSON.stringify(info));
        extensionList[id].icon = `${info.github}/raw/master/${info.icon}`;
    }

    showExtensionList(extensionList);
});

$("#form-add-extension").submit(async function(e) {
    e.preventDefault();

    let gitHubURL = $("#extension-github-url").val().match(/https:\/\/github\.com\/[^\/]+\/[^\/]+/);
    if (gitHubURL == null) {
        NotifyE("GitHub url not match");
        return;
    }
    gitHubURL = gitHubURL[0];

    Notiflix.Block.Standard(".add-extension-box", 'Loading...');

    let addExtensionToIndex = await fetch("https://us-central1-ublock-c0a08.cloudfunctions.net/extension", { 
        method: "post",
        body: gitHubURL,
        redirect: "follow"
    });
    let rosAddExtension = await addExtensionToIndex.json();
    if (addExtensionToIndex.status !== 200) {
        console.log("Add extension error", rosAddExtension);
        NotifyE("Add extension error, See console to more detail");
    } else {
        NotifyS(`Add/Update ${rosAddExtension.extension.name} extension successful`);
        $("#extension-github-url").val("");
    }

    Notiflix.Block.Remove(".add-extension-box");
});

$("#form-add-extension button[type='reset']").click(() => {
    $(".add-extension-box").fadeOut();
});

// $("#open-extension-dialog").click();
