Blockly.Python['yy_set_basketball'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_yy_yymg90'] = 'from yylibs import YYMG90';
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

    var mgstype = block.getFieldValue('mgstype');
    var mgs = block.getFieldValue('mgs');
    var mga = block.getFieldValue('mga');
    var pin = block.getFieldValue('pin');
    var fix = block.getFieldValue('fix');
    var agmin = block.getFieldValue('agmin')-fix;
    var agmax = block.getFieldValue('agmax')-fix;
    var shoot_angle = -40
    
    Blockly.Python.definitions_[`def_yy_shoot_fix`] = `mg_turn_fix = ${fix} `;
    if (mgstype == "0"){ //数字舵机
        shoot_angle=40
        Blockly.Python.definitions_[`def_yy_yymg_shoot`] = `mg_shoot = YYMG90(${mgs},min_angle=15,max_angle=50) `;
    }
    else {      //模拟舵机
        Blockly.Python.definitions_[`def_yy_yymg_shoot`] = `mg_shoot = YYMG90(${mgs},min_angle=-50,max_angle=0) `;
    }

    Blockly.Python.definitions_[`def_yy_yymg_turn`] = `mg_turn = YYMG90(${mga},min_angle=${agmin},max_angle=${agmax}) `;
    
    var functionName = Blockly.Python.provideFunction_(
        'ShowAngle',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        '   global mg_turn_fix',
        '   n=mg_turn.Angle()',
        '   n=n+mg_turn_fix',
        '   s=str(n)',
        '   if len(s)==1:',
        '      s="A-0"+s',
        '   elif len(s)==2:',
        '      s="A-"+s',
        '   else:',
        '      s="A"+s',
        '   tm9830x.show(s)',
        ]);

    var functionName = Blockly.Python.provideFunction_(
        'ShowSpeed',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        '   n=car.GetSpeed()',
        '   s=str(n)',
        '   if n>99:',
        '      s="S-99"',
        '   elif n<10 :',
        '      s="S-0"+str(n)',
        '   else:',
        '      s="S-"+str(n)',
        '   tm9830x.show(s)',
        ]);

    var functionName = Blockly.Python.provideFunction_(
        'Shoot',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        '   mg_shoot.Goto('+shoot_angle+',stop=0)',
        '   sleep(0.3)',
        '   while Pin('+pin+',Pin.IN).value()==1:',
        '      sleep(0.01)',
        '   mg_shoot.Stop()',
        ]);
    
   
    return ``;
};

Blockly.Python['yy_shoot_basketball'] = function(block) {
    var code = `Shoot()\n`;
    return code;
};


Blockly.Python['yy_turn_basketball'] = function (block) {
    var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
    
    var code = `mg_turn.Goto(${value_angle}-mg_turn_fix)\n`;
    return code;
};


Blockly.Python['yy_turn_step_basketball'] = function (block) {
    var dropdown_ch = block.getFieldValue('ch');
    var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
    var op='+'
    if (dropdown_ch==0){
        op='-';
    }
    var code = `mg_turn.Goto(mg_turn.Angle()${op}${value_angle},weit_time=0.03)\n`;
    return code;
}


Blockly.Python['yy_ball_turn_angle'] = function (block) {
    var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
    
    var code = `mg_turn.Angle()`;
    return [code,Blockly.Python.ORDER_NONE];
};