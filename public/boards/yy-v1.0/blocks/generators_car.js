Blockly.Python['yy_car_forward'] = function(block) {
  Blockly.Python.definitions_['import_yycar'] = 'from yycar import YYCar';
  Blockly.Python.definitions_['def_yy_car'] = 'car = YYCar()';

  var value_speed = block.getFieldValue('speed');
  var value_time = block.getFieldValue('time');
  
  var code = `car.Forward(speed=${value_speed},time_dur=${value_time})\n`;
  return code;
};


Blockly.Python['yy_car_backward'] = function(block) {
  Blockly.Python.definitions_['import_yycar'] = 'from yycar import YYCar';
  Blockly.Python.definitions_['def_yy_car'] = 'car = YYCar()';

  var value_speed = block.getFieldValue('speed');
  var value_time = block.getFieldValue('time');

  var code = `car.Backward(speed=${value_speed},time_dur=${value_time})\n`;
  return code;
};

Blockly.Python['yy_car_turn_left'] = function(block) {
  Blockly.Python.definitions_['import_yycar'] = 'from yycar import YYCar';
  Blockly.Python.definitions_['def_yy_car'] = 'car = YYCar()';

  var value_speed = block.getFieldValue('speed');
  var value_time = block.getFieldValue('time');
  
  var code = `car.TurnLeft(speed=${value_speed},time_dur=${value_time})\n`;
  return code;
};

Blockly.Python['yy_car_turn_right'] = function(block) {
  Blockly.Python.definitions_['import_yycar'] = 'from yycar import YYCar';
  Blockly.Python.definitions_['def_yy_car'] = 'car = YYCar()';

  var value_speed = block.getFieldValue('speed');
  var value_time = block.getFieldValue('time');

  var code = `car.TurnRight(speed=${value_speed},time_dur=${value_time})\n`;
  return code;
};

Blockly.Python['yy_car_move'] = function(block) {
  Blockly.Python.definitions_['import_yycar'] = 'from yycar import YYCar';
  Blockly.Python.definitions_['def_yy_car'] = 'car = YYCar()';

  var dropdown_move = block.getFieldValue('move');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = ''
  if(dropdown_move==1){    code = `car.Forward(speed=${value_speed})\n`;  }
  else if(dropdown_move==2) { code=`car.Backward(speed=${value_speed})\n`;}
  else if(dropdown_move==3) { code=`car.TurnRight(speed=${value_speed})\n`;}
  else if(dropdown_move==4) { code=`car.TurnLeft(speed=${value_speed})\n`;}
 
  return code;
};

Blockly.Python['yy_car_stop'] = function(block) {
  Blockly.Python.definitions_['import_yycar'] = 'from yycar import YYCar';
  Blockly.Python.definitions_['def_yy_car'] = 'car = YYCar()';

  var code = `car.Stop()\n`;
  return code;
};

Blockly.Python['yy_car_set_speed'] = function(block) {
  Blockly.Python.definitions_['import_yycar'] = 'from yycar import YYCar';
  Blockly.Python.definitions_['def_yy_car'] = 'car = YYCar()';

  var value_speed = block.getFieldValue('speed');

  var code = `car.SetSpeed(${value_speed})\n`;
  return code;
};

Blockly.Python['yy_car_get_speed'] = function(block) {
  Blockly.Python.definitions_['import_yycar'] = 'from yycar import YYCar';
  Blockly.Python.definitions_['def_yy_car'] = 'car = YYCar()';

  var code = `car.GetSpeed()`;
  return [code, Blockly.Python.ORDER_NONE];
};
