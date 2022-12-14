let loadScript = (f) => {
  document.write(`<script src="${f}"></script>`)
}

loadScript(`${rootPath}/boards/wt8285/index.js?v=${jsver}`) //Add ESP 8285 car
loadScript(`${rootPath}/boards/raspberry-pi-pico/index.js?v=${jsver}`) // Add Raspberry Pi Pico
loadScript(`${rootPath}/boards/esp32/index.js?v=${jsver}`) // Add ESP32 Dev Board
loadScript(`${rootPath}/boards/yy-v1.0/index.js?v=${jsver}`) // Add Raspberry Pi Pico
