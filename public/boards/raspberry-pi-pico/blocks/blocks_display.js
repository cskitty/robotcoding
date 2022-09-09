Blockly.defineBlocksWithJsonArray([
{
  "type": "yy_display_custom",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_CUSTOM}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dotmatrix",
      "name": "value"
    },
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_display_set",
  "message0": "%{BKY_YY_MENU_DISPLAY_TM1637_SET}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "ch",
      "options": [
        [
          "J5",
          "J5"
        ],
        [
          "J6",
          "J6"
        ],
        [
          "J7",
          "J7"
        ],
        [
          "J9",
          "J9"
        ],
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#cc3399",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_display_show",
  "message0": "%{BKY_YY_MENU_DISPLAY_TM1637_SHOW}",
  "args0": [
    {
      "type": "input_value",
      "name": "value"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#cc3399",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_display_scroll",
  "message0": "%{BKY_YY_MENU_DISPLAY_TM1637_SCROLL}",
  "args0": [
    {
      "type": "input_value",
      "name": "value"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#cc3399",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_display_show4x8",
  "message0": "%{BKY_YY_MENU_DISPLAY_TM1637_SHOW4X8}",
  "args0": [
    {
      "type": "input_value",
      "name": "value"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#cc3399",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_display_temperature",
  "message0": "%{BKY_YY_MENU_DISPLAY_TM1637_TEMPERATURE}",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#cc3399",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_display_clear",
  "message0": "%{BKY_YY_MENU_DISPLAY_TM1637_CLEAR}",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#cc3399",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "yy_display_two_number",
  "message0": "%{BKY_YY_MENU_DISPLAY_TM1637_TWO_NUMBER}",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    },
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#cc3399",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_display_voltage",
  "message0": "%{BKY_YY_MENU_DISPLAY_TM1637_VOLTAGE}",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#cc3399",
  "tooltip": "",
  "helpUrl": ""
},
]);
