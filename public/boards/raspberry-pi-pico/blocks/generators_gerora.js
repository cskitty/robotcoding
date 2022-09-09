Blockly.Python['yy_ws2812_setup'] = function(block) {
  Blockly.Python.definitions_['from_yy_ws2812'] = 'import ws2812b';

  var code = `strip = ws2812b.ws2812b(25,0,22)\n`;
  code += "strip.brightness(50)\n";
  code +='strip.fill(0,0,0)\nstrip.show()\n';
  return code;
};

Blockly.Python['yy_ws2812_set_color1'] = function(block) {
  var value_n = block.getFieldValue('n');
  var colour_color = block.getFieldValue('color');

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
  var red = parseInt(result[1], 16);
  var green = parseInt(result[2], 16);
  var blue = parseInt(result[3], 16);
  
  var code = `strip.set_pixel(${value_n}, ${red},${green}, ${blue})\n`;
  code += `strip.show()\n`;
  return code;
};

Blockly.Python['yy_ws2812_set_color2'] = function(block) {
  var value_n = block.getFieldValue('n');
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);

  var code = `strip.set_pixel(${value_n},${value_red},${value_green},${value_blue})\n`;
  code += `strip.show()\n`;
  return code;
};

Blockly.Python['yy_ws2812_fill_color1'] = function(block) {
  var colour_color = block.getFieldValue('color');

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
  var red = parseInt(result[1], 16);
  var green = parseInt(result[2], 16);
  var blue = parseInt(result[3], 16);

  var code = `strip.fill(${red},${green}, ${blue})\n`;
  code += `strip.show()\n`;
  return code;
};

Blockly.Python['yy_ws2812_fill_color2'] = function(block) {
  var value_red = block.getFieldValue('red');
  var value_green = block.getFieldValue('green');
  var value_blue = block.getFieldValue('blue');

  var code = `strip.fill(${value_red},${value_green},${value_blue})\n`;
  code += `strip.show()\n`;
  return code;
};

Blockly.Python['yy_ws2812_show'] = function(block) {
  var code = 'strip.show()\n';
  return code;
};

Blockly.Python['yy_ws2812_clear'] = function(block) {
  var code = `strip.fill(0,0,0)\n`;
  code += `strip.show()\n`;
  return code;
};

Blockly.Python['yy_ws2812_rainbow'] = function(block) {
  var value_wait = Blockly.Python.valueToCode(block, 'wait', Blockly.Python.ORDER_ATOMIC) || '30';

  Blockly.Python.definitions_['from_time_import_sleep_ms'] = 'from time import sleep_ms';

  var functionName = Blockly.Python.provideFunction_(
    'neopixelRainbow',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(np, wait):',
    '  for j in range(256):',
    '    for i in range(np.n):',
    '      WheelPos = (i * 1 + j) & 255',
    '      if WheelPos < 85:',
    '        np[i] = (int((WheelPos * 3) * np.bright / 100), int((255 - WheelPos * 3) * np.bright / 100), 0)',
    '      elif WheelPos < 170:',
    '        WheelPos -= 85',
    '        np[i] = (int((255 - WheelPos * 3) * np.bright / 100), 0, int((WheelPos * 3) * np.bright / 100))',
    '      else:',
    '        WheelPos -= 170',
    '        np[i] = (0, int((WheelPos * 3) * np.bright / 100), int((255 - WheelPos * 3) * np.bright / 100))',
    '    np.write()',
    '    sleep_ms(wait)']);

  var code = `${functionName}(np, ${value_wait})\n`;
  return code;
};

Blockly.Python['yy_ws2812_set_brightness'] = function(block) {
  var value_brightness = block.getFieldValue('brightness');
  var code = `strip.brightness(${value_brightness})\n`;
  return code;
};

Blockly.Python['yy_ws2812_set_color1_2'] = function(block) {
  var value_n = block.getFieldValue('n');
  var colour_color = block.getFieldValue('color');
  var value_n2 = block.getFieldValue('n2');
  var colour_color2 = block.getFieldValue('color2');

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
  var red = parseInt(result[1], 16);
  var green = parseInt(result[2], 16);
  var blue = parseInt(result[3], 16);

  var result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color2);
  var red2 = parseInt(result2[1], 16);
  var green2 = parseInt(result2[2], 16);
  var blue2 = parseInt(result2[3], 16);

  var code = `strip.set_pixel_line_gradient(${value_n},${value_n2}, ${red},${green}, ${blue},${red2},${green2}, ${blue2})\n`;
  code += `strip.show()\n`;
  return code;
};

Blockly.Python['yy_ws2812_set_color_line'] = function(block) {
  var value_n = block.getFieldValue('n');
  var colour_color = block.getFieldValue('color');
  var value_n2 = block.getFieldValue('n2');
  
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
  var red = parseInt(result[1], 16);
  var green = parseInt(result[2], 16);
  var blue = parseInt(result[3], 16);

  var code = `strip.set_pixel_line(${value_n},${value_n2}, ${red},${green}, ${blue})\n`;
  code += `strip.show()\n`;
  return code;
};

Blockly.Python['yy_ws2812_rotate_left'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = `strip.rotate_left(${value_value})\n`;
  code += `strip.show()\n`;
  return code;
};

Blockly.Python['yy_ws2812_rotate_right'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = `strip.rotate_right(${value_value})\n`;
  code += `strip.show()\n`;
  return code;
};