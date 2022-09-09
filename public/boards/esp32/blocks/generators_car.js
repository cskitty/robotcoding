Blockly.Python['yy_car_forward'] = function(block) {
  var value_speed = block.getFieldValue('speed');
  var value_time = block.getFieldValue('time');
  
  var code = `car.Forward(speed=${value_speed},time_dur=${value_time})\n`;
  return code;
};


Blockly.Python['yy_car_backward'] = function(block) {

  var value_speed = block.getFieldValue('speed');
  var value_time = block.getFieldValue('time');

  var code = `car.Backward(speed=${value_speed},time_dur=${value_time})\n`;
  return code;
};

Blockly.Python['yy_car_turn_left'] = function(block) {

  var value_speed = block.getFieldValue('speed');
  var value_time = block.getFieldValue('time');
  
  var code = `car.TurnLeftWhirl(speed=${value_speed},time_dur=${value_time})\n`;
  return code;
};

Blockly.Python['yy_car_turn_right'] = function(block) {

  var value_speed = block.getFieldValue('speed');
  var value_time = block.getFieldValue('time');

  var code = `car.TurnRightWhirl(speed=${value_speed},time_dur=${value_time})\n`;
  return code;
};

Blockly.Python['yy_car_move'] = function(block) {

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

  var code = `car.Stop()\n`;
  return code;
};

Blockly.Python['yy_car_set_speed'] = function(block) {

  var value_speed = block.getFieldValue('speed');

  var code = `car.SetSpeed(${value_speed})\n`;
  return code;
};

Blockly.Python['yy_car_get_speed'] = function(block) {

  var code = `car.GetSpeed()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['yy_car_set_Pin'] = function(block) {
  Blockly.Python.definitions_['import_yyminicar'] = 'from yyminicar import YYMiniCar';
  var value_in1 = block.getFieldValue('in1');
  var value_in2 = block.getFieldValue('in2');
  var value_in3 = block.getFieldValue('in3');
  var value_in4 = block.getFieldValue('in4');
  Blockly.Python.definitions_['def_yy_car'] = `car = YYMiniCar(MOTOR_LEFT_IN1=${value_in1},MOTOR_LEFT_IN2=${value_in2},MOTOR_RIGHT_IN3=${value_in3},MOTOR_RIGHT_IN4=${value_in4})`;

  var code = ``;
  return code;
};
