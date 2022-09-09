Blockly.Python['yy_tcs_set'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_i2c'] = 'from machine import I2C';
    Blockly.Python.definitions_['import_tcs3472'] = 'import tcs3472';
    var dropdown_ch = block.getFieldValue('ch');
    pin = YYJtoI2C(dropdown_ch) 

    Blockly.Python.definitions_[`def_yy_tcs3472`] = `yy_tcs3472 = tcs3472.tcs3472(I2C(${pin[2]}, scl=Pin(${pin[1]}), sda=Pin(${pin[0]}), freq=100000))`;
   
    return '';
};

Blockly.Python['yy_tcs_get_r'] = function(block) {
    
    var code = `yy_tcs3472.rgb()[0]`;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['yy_tcs_get_g'] = function(block) {
    
    var code = `yy_tcs3472.rgb()[1]`;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['yy_tcs_get_b'] = function(block) {
    
    var code = `yy_tcs3472.rgb()[2]`;
    return [code, Blockly.Python.ORDER_NONE];
};