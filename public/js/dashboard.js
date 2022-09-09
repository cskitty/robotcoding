if (!isElectron) {
  dashboardWin = null;
  dashboardIsReady = false;
}

$("#to-home").click(() => {
  window.open("https://starcoder.us/", "_self");
});

if (isElectron) {
  ipcRenderer.on("get-serial-status", (evt, msg) => {
    let isConnectedToREPL = false;
    if (deviceMode === MODE_REAL_DEVICE) {
      sharedObj.dashboardWin.webContents.send(
        "serial-status",
        serialPort ? "connected" : "disconnect"
      );
    } else if (deviceMode === MODE_SIMULATOR) {
      simulatorReadyCallback();
    }
  });
} else {
  function getSerialStatus() {
    if (deviceMode === MODE_REAL_DEVICE) {
      return serialPort ? "connected" : "disconnect";
    } else if (deviceMode === MODE_SIMULATOR) {
      simulatorReadyCallback();
      return true;
    }

    return false;
  }

  function trigDashboardIsReady() {
    dashboardIsReady = true;
    dashboardWin.onbeforeunload = () => {
      dashboardIsReady = false;
      dashboardWin = null;
    };
  }
}
