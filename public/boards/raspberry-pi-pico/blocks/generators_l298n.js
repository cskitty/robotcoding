Blockly.Python['yy_l298n_go1'] = function (block) {
    Blockly.Python.definitions_['import_yy_l298n'] = 'from yyl298n import YYL298N';
    Blockly.Python.definitions_['def_yy_l298n'] = 'yy_l298n = YYL298N()';
    
    var pin_in1 = block.getFieldValue('in1');
    var pin_in2 = block.getFieldValue('in2');
    var dropdown_dir = block.getFieldValue('dir');
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    
    Blockly.Python.definitions_['def_yy_l298n_setupa'] = `yy_l298n.SetupA(${pin_in1},${pin_in2})`;

    
    if (dropdown_dir=="1"){
        code = `yy_l298n.Forward(speed=${value_speed},m=1)\n`;
    }
    else
    {
        code = `yy_l298n.Backward(speed=${value_speed},m=1)\n`;
    }
    return code;
};

Blockly.Python['yy_l298n_go2'] = function (block) {
    Blockly.Python.definitions_['import_yy_l298n'] = 'from yyl298n import YYL298N';
    Blockly.Python.definitions_['def_yy_l298n'] = 'yy_l298n = YYL298N()';
    
    var pin_in3 = block.getFieldValue('in3');
    var pin_in4 = block.getFieldValue('in4');
    var dropdown_dir = block.getFieldValue('dir');
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    
    Blockly.Python.definitions_['def_yy_l298n_setupb'] = `yy_l298n.SetupB(${pin_in3},${pin_in4})`;

    
    if (dropdown_dir=="1"){
        code = `yy_l298n.Forward(speed=${value_speed},m=2)\n`;
    }
    else
    {
        code = `yy_l298n.Backward(speed=${value_speed},m=2)\n`;
    }
    return code;
};

Blockly.Python['yy_l298n_stop'] = function (block) {
    Blockly.Python.definitions_['import_yy_l298n'] = 'from yyl298n import YYL298N';
    Blockly.Python.definitions_['def_yy_l298n'] = 'yy_l298n = YYL298N()';

    var dropdown_ch = block.getFieldValue('ch');
    var code =  `yy_l298n.Stop(${dropdown_ch})\n`;
    return code;
};