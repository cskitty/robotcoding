Blockly.Python['dht_read'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_dht'] = 'import dht';

  var functionName = Blockly.Python.provideFunction_(
    'DHT_Read',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(type, pin):',
    '  try:',
    '    if type == 11:',
    '      d = dht.DHT11(Pin(pin))',
    '    elif type == 22:',
    '      d = dht.DHT22(Pin(pin))',
    '    else:',
    '      return [ -999, -999 ]',
    '    d.measure()',
    '    return [ d.temperature(), d.humidity() ]',
    '  except:',
    '    print("DHT read error")',
    '    return [ -999, -999 ]']);

    var dropdown_type = block.getFieldValue('type');
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var dropdown_valueindex = block.getFieldValue('valueIndex');
    var code = `${functionName}(${dropdown_type}, ${value_pin})[${dropdown_valueindex}]`;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ds18x20_read'] = function(block) {
    Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_onewire'] = 'import onewire';
    Blockly.Python.definitions_['import_ds18x20'] = 'import ds18x20';
  
    var functionName = Blockly.Python.provideFunction_(
      'DS18x20_Read',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin):',
      '  ds = ds18x20.DS18X20(onewire.OneWire(Pin(pin)))',
      '  roms = ds.scan()',
      '  try:',
      '    ds.convert_temp()',
      '  except:',
      '    return 0',
      '  sleep(0.75)',
      '  for rom in roms:',
      '    return ds.read_temp(rom)',
      '  return 0']);
  
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var code = `${functionName}(${value_pin})`;
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['yy_number'] = function(block) {
  var value_num = block.getFieldValue('number');
  var code = `${value_num}`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['yy_code'] = function(block) {
  var val = Blockly.Python.valueToCode(block, 'code', Blockly.Python.ORDER_NONE);
  
  val = val.substr(1);
  val = val.substr(0,val.length-1);
  return `${val}\n`;
};

Blockly.Python['yy_get_voltage'] = function(block) {
  Blockly.Python.definitions_['from_yylibs_import_yyboard'] = 'from yylibs import YYBord';

  var code  = `YYBord().GetVoltage()`;
  return [code,Blockly.Python.ORDER_NONE];
};

Blockly.Python['yy_number_2_text'] = function(block) {
  var value_number = Blockly.Python.valueToCode(block, 'number', Blockly.Python.ORDER_ATOMIC);
  var code  = `str(${value_number})`;
  return [code,Blockly.Python.ORDER_NONE];
};

Blockly.Python['yy_send_into_source'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var value_source = Blockly.Python.valueToCode(block, 'source', Blockly.Python.ORDER_ATOMIC);

  var code = `print(str(${value_source}) + "=" + str(${value_value}))\n`;
  return code;
};