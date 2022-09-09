
Blockly.Python['yy_switch_on_press'] = function(block) {
    Blockly.Python.definitions_['import_yy_switch'] = 'import yyswitch';

    var dropdown_pin = block.getFieldValue('pin');
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
        dropdown_pin + 'PressedDo',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(_=None):',
        globals,
        statements_callback]);

    var code = `yyswitch.${dropdown_pin}Pressed(${functionName})\n`;
    return code;
};

Blockly.Python['yy_switch_on_release'] = function(block) {
    Blockly.Python.definitions_['import_yy_switch'] = 'import yyswitch';

    var dropdown_pin = block.getFieldValue('pin');
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
        dropdown_pin + 'ReleaseDo',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(_=None):',
        globals,
        statements_callback]);

    var code = `yyswitch.${dropdown_pin}Release(${functionName})\n`;
    return code;
};

