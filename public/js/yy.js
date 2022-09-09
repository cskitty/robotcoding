function YYJtoGPIO(j){
    if (j=="J5"){
        return [10,11]
    }
    else if(j=="J6"){
        return [4,5]
    }
    else if(j=="J7"){
        return [16,17]
    }
    else if(j=="J9"){
        return [2,3]
    }

    return [0,0]
};

function YYJtoUart(j){
    if(j=="J6"){
        return [4,5,1]
    }
    else if(j=="J7"){
        return [16,17,0]
    }
   
    return [0,0,0]
};

function YYJtoI2C(j){
    if(j=="J5"){
        return [10,11,1]
    }
    else if(j=="J6"){
        return [4,5,0]
    }
    else if(j=="J7"){
        return [16,17,0]
    }
    else if(j=="J9"){
        return [2,3,1]
    }
   
    return [0,0,0]
};


function fake_click(obj) {
    var ev = document.createEvent("MouseEvents");
    ev.initMouseEvent(
        "click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null
    );
    obj.dispatchEvent(ev);
}

var isInYYBrowser = 0;
try {
    CefSharp.BindObjectAsync("YYBSClass");
}
catch
{
    
}

function SetInYYBrowser(p){
    isInYYBrowser = p;
    HidOpenterminal();
    //alert(isInYYBrowser);
}

function SaveProject(name,data){
    YYBSClass.saveProj(name,data).then((r) => {
        //alert(r);
    })
}

function UploadCode(name,data){
    YYBSClass.uploadCode(name,data).then((r) => {
        return(r);
    })
}

function download(name, data) {
    if(isInYYBrowser == 1){
        YYBSClass.saveCode(name,data).then((r) => {
            //alert(r);
        })
        return;
    }
    
    var urlObject = window.URL || window.webkitURL || window;

    var downloadData = new Blob([data]);
    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link.href = urlObject.createObjectURL(downloadData);
    save_link.download = name;
    fake_click(save_link);
}


function HidOpenterminal()
{
    document.getElementById("open-terminal").style.display="None";
    document.getElementById("open-dashboard").style.display="None";
    document.getElementById("open-extension-dialog").style.display="None";
}

