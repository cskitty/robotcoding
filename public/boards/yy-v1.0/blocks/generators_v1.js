Blockly.Python['yy_set_joystick'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_uart'] = 'from machine import UART';
    Blockly.Python.definitions_['import_yyjoystick'] = 'import yyjoystick';
    
    Blockly.Python.definitions_[`def_yy_joystick`] = `joystick = UART(0,9600, tx=Pin(0), rx=Pin(1))\njoystick.read()`;
   
    return '';
};


Blockly.Python['yy_display_set'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_yy_tm1637'] = 'import tm1637';
   
    var code = `tm9830x = tm1637.TM1637(clk=Pin(14),dio=Pin(13))\n`;
    var code = code+ 'tm9830x.show("    ")\n';
    return code;
};

Blockly.Python['yy_display_angle'] = function (block) {
    return "ShowAngle()\n";
};

Blockly.Python['yy_display_speed'] = function (block) {
    return "ShowSpeed()\n";
};