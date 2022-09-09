Blockly.defineBlocksWithJsonArray([
{
  "type": "dht_read",
  "message0": "%1 pin %2 read %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "DHT11",
          "11"
        ],
        [
          "DHT22",
          "22"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "valueIndex",
      "options": [
        [
          "temperature",
          "0"
        ],
        [
          "humidity",
          "1"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ds18x20_read",
  "message0": "DS18x20 pin %1 read temperature",
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_number",
    "message0": "%1",
    "args0": [{
      "type": "field_input",
      "name": "number",
      "text": "1234",
      "check": "Number"
    }],
    "output": "Number",
    "colour": "#34495E",
    "helpUrl": "",
    "tooltip": "",
    "extensions": [
      
      "parent_tooltip_when_inline"
    ]
},
{
  "type": "yy_code",
  "message0": "%{BKY_YY_MENU_ADVANCED_DEBUG_CODE}",
  "args0": [
    {
      "type": "input_value",
      "name": "code"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_get_voltage",
  "message0": "%{BKY_YY_MENU_ADVANCED_POWER_GET_VOLTAGE}",
  "args0": [ ],
  "output": "Number",
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_number_2_text",
    "message0": "%{BKY_YY_MENU_GENERIC_NUMBER_2_TEXT}",
    "args0": [{
      "type": "input_value",
      "name": "number",
      "text": "",
    }],
    "output": "Number",
    "colour": "#34495E",
    "helpUrl": "",
    "tooltip": ""
},
{
  "type": "yy_send_into_source",
  "message0": "%{BKY_YY_MENU_ADVANCED_SEND_INTO_SOURCE}",
  "args0": [
    {
      "type": "input_value",
      "name": "value"
    },
    {
      "type": "input_value",
      "name": "source"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8E44AD",
  "tooltip": "",
  "helpUrl": ""
},
]);

