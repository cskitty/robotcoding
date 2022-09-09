Blockly.Python['yy_set_joystick'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_uart'] = 'from machine import UART';
    Blockly.Python.definitions_['import_yyjoystick'] = 'import yyjoystick';
    var dropdown_ch = block.getFieldValue('ch');
    pin = YYJtoUart(dropdown_ch) 

    Blockly.Python.definitions_[`def_yy_joystick`] = `joystick = UART(${pin[2]},9600, tx=Pin(${pin[0]}), rx=Pin(${pin[1]}))\njoystick.read()`;
   
    return '';
};


Blockly.Python['yy_get_joystick'] = function (block) {
    Blockly.Python.definitions_[`def_yy_joystick_cmd`] = 'joystick_cmd=0';
    Blockly.Python.definitions_[`def_yy_joystick_cmd1`] = 'joystick_cmd1=0';
    Blockly.Python.definitions_[`def_yy_joystick_cmd2`] = 'joystick_cmd2=0';
    var functionName = Blockly.Python.provideFunction_(
        'JoystickGetCMD',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        '   cmd_now=(-1,-1,-1)',
        '   if joystick.any():',
        '       try:',
        '           read_cmd= joystick.read(1).decode()',
        '           cmds=yyjoystick.DecodeCMD(joystick,read_cmd)',
        '           cmd_now=cmds',
        '       except:',
        '           pass',
        '   return(cmd_now[0],cmd_now[1],cmd_now[2])',
        ]);
    
    return '(joystick_cmd,joystick_cmd1,joystick_cmd2)=JoystickGetCMD()\n';
};


Blockly.Python['yy_joystick_get_key'] = function(block) {
    var statements_callback = Blockly.Python.statementToCode(block, 'callback');

    // -----------------------------
    var globals = [];
    var varName;
    var workspace = block.workspace;
    var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
    for (var i = 0, variable; variable = variables[i]; i++) {
      varName = variable.name;
      if (block.getVars().indexOf(varName) == -1) {
        globals.push(Blockly.Python.variableDB_.getName(varName,
            Blockly.VARIABLE_CATEGORY_NAME));
      }
    }
    // Add developer variables.
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
      globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
          Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }
  
    globals = globals.length ?
        Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
    // -----------------------------

    var dropdown_key = block.getFieldValue('keycode');
    var functionName = Blockly.Python.provideFunction_(
        `YYJoystickPress${dropdown_key}`,
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        //globals,
        statements_callback]);

    var code = `if joystick_cmd == ${dropdown_key}:${functionName}()\n`;
    return code;
};

Blockly.Python['yy_clear_joystick'] = function(block) {
    var code = `joystick.read()\n`;
    return code;
};


Blockly.Python['yy_get_ir'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_machine_import_time_ticks_ms'] = 'from utime import ticks_ms';
    Blockly.Python.definitions_['import_yy_ir'] = 'from ir import NEC_16';

    var statements_callback = Blockly.Python.statementToCode(block, 'callback');

    // -----------------------------
    var globals = [];
    var varName;
    var workspace = block.workspace;
    var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
    for (var i = 0, variable; variable = variables[i]; i++) {
      varName = variable.name;
      if (block.getVars().indexOf(varName) == -1) {
        globals.push(Blockly.Python.variableDB_.getName(varName,
            Blockly.VARIABLE_CATEGORY_NAME));
      }
    }
    // Add developer variables.
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
      globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
          Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }
  
    globals = globals.length ?
        Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
    // -----------------------------

    var functionName = Blockly.Python.provideFunction_(
        'GetIRCMD',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(cmd,add,ctrl):',
        '  if ir._lastcmdtime != None and ticks_ms()-ir._lastcmdtime > 200 : ',
        '    return ',
           statements_callback]);

    var code = `ir = NEC_16(Pin(23,Pin.IN),GetIRCMD)\n`;
    return code;
};

Blockly.Python['yy_ir_get_key'] = function(block) {
    var statements_callback = Blockly.Python.statementToCode(block, 'callback');
    var code_value = block.getFieldValue('code');
    
    // -----------------------------
    var globals = [];
    var varName;
    var workspace = block.workspace;
    var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
    for (var i = 0, variable; variable = variables[i]; i++) {
      varName = variable.name;
      if (block.getVars().indexOf(varName) == -1) {
        globals.push(Blockly.Python.variableDB_.getName(varName,
            Blockly.VARIABLE_CATEGORY_NAME));
      }
    }
    // Add developer variables.
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
      globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
          Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }
  
    globals = globals.length ?
        Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
    // -----------------------------

    var functionName = Blockly.Python.provideFunction_(
        `YYIRPress${code_value}`,
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        //globals,
        statements_callback]);

    var code = `if cmd == ${code_value}:${functionName}()\n`;
    return code;
};

Blockly.Python['yy_ir_get_key_val'] = function(block) {
    var code = `cmd`;
    return [code, Blockly.Python.ORDER_NONE];
  };

Blockly.Python['yy_get_joystick_key2'] = function(block) {
  
    var code  = `joystick_cmd`;
    return [code,Blockly.Python.ORDER_NONE];
};

Blockly.Python['yy_get_joystick_rocker'] = function(block) {
    var dropdown_ch = block.getFieldValue('ch');
    var code="";
    if (dropdown_ch=="1"){
        code  = `joystick_cmd1`;
    }
    else{
        code  = `joystick_cmd2`;
    }
    return [code,Blockly.Python.ORDER_NONE];
};