Blockly.Python['yy_external_servo'] = function (block) {
    Blockly.Python.definitions_['import_yy_yymg90'] = 'from yylibs import YYMG90';

    var dropdown_ch = block.getFieldValue('ch');
    var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
    var code = `yy_mg_${dropdown_ch}.Goto(${value_angle})\n`;
    return code;
};


Blockly.Python['yy_set_servo'] = function (block) {
    Blockly.Python.definitions_['import_yy_yymg90'] = 'from yylibs import YYMG90';
    var dropdown_ch = block.getFieldValue('ch');

    var value_anglemin = block.getFieldValue('anglemin');
    var value_anglemax = block.getFieldValue('anglemax');
    
    Blockly.Python.definitions_[`import_yy_yymg90_${dropdown_ch}`] = `yy_mg_${dropdown_ch} = YYMG90(${dropdown_ch} ,min_angle=${value_anglemin},max_angle=${value_anglemax})`;
   

    //var value_anglemin = Blockly.Python.valueToCode(block, 'anglemin', Blockly.Python.ORDER_ATOMIC);
    //var code = `servo.angle(servo.${dropdown_ch}, ${value_anglemin})\n`;
    return '';
};

Blockly.Python['yy_servo_angle'] = function (block) {
    var dropdown_ch = block.getFieldValue('ch');
    var code = `yy_mg_${dropdown_ch}.Angle()`;
    return [code, Blockly.Python.ORDER_NONE];
};