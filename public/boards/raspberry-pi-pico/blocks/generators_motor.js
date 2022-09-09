Blockly.Python['yy_motor_go'] = function (block) {
    Blockly.Python.definitions_['import_yy_motor'] = 'from yymotor import YYMotor';
    Blockly.Python.definitions_['def_yy_motor'] = 'yy_motor = YYMotor()';

    var dropdown_ch = block.getFieldValue('ch');
    var dropdown_dir = block.getFieldValue('dir');
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    if (dropdown_dir=="1"){
        code = `yy_motor.Forward(speed=${value_speed},m=${dropdown_ch})\n`;
    }
    else
    {
        code = `yy_motor.Backward(speed=${value_speed},m=${dropdown_ch})\n`;
    }
    return code;
};

Blockly.Python['yy_motor_stop'] = function (block) {
    Blockly.Python.definitions_['import_yy_motor'] = 'from yymotor import YYMotor';
    Blockly.Python.definitions_['def_yy_motor'] = 'yy_motor = YYMotor()';

    var dropdown_ch = block.getFieldValue('ch');
    var code =  `yy_motor.Stop(${dropdown_ch})\n`;
    return code;
};