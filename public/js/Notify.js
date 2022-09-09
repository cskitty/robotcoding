let NotifyS = (msg) => Notiflix.Notify.Success(msg, { clickToClose: true }); 
let NotifyI = (msg) => Notiflix.Notify.Info(msg, { clickToClose: true }); 
let NotifyW = (msg) => Notiflix.Notify.Warning(msg, { clickToClose: true }); 
let NotifyE = (msg) => Notiflix.Notify.Failure(msg, { clickToClose: true }); 
let NotifyConfirm = (msg) => {
    return new Promise((resolve, reject) => {
        Notiflix.Confirm.Show(yy_msg["Confirm"], msg, yy_msg["Confirm_YES"], yy_msg["Confirm_NO"], function(){
            resolve(true);
        },
        function(){
            resolve(false);
        });
    });
}

tippy('[data-tippy-content]');
