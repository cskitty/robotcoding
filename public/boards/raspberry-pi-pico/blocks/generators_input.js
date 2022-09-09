Blockly.Python['yy_csb_set'] = function (block) {
    Blockly.Python.definitions_['from_yylibs_import_YYHCSR04'] = 'from yylibs import YYHCSR04';
    
    var dropdown_ch = block.getFieldValue('ch');
    pin = YYJtoGPIO(dropdown_ch)
  
    var code = `yy_csb = YYHCSR04(echo_pin=${pin[0]},trigger_pin=${pin[1]})\n`;
    return code;
};

Blockly.Python['yy_csb_get_cm'] = function(block) {
    
    var code = `yy_csb.DistanceCM()`;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['yy_csb_get_mm'] = function(block) {
    
    var code = `yy_csb.DistanceMM()`;
    return [code, Blockly.Python.ORDER_NONE];
};
  