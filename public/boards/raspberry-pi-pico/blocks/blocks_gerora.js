Blockly.defineBlocksWithJsonArray(
[{
  "type": "yy_ws2812_setup",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_SETUP}",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_ws2812_set_color1",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_SET_COLOR1}",
  "args0": [
    {
      "type": "field_number",
      "name": "n",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 24,
    },
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_ws2812_set_color2",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_SET_COLOR2}",
  "args0": [
    {
      "type": "field_number",
      "name": "n",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 24, 
    },
    {
      "type": "input_value",
      "name": "red",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 255,
    },
    {
      "type": "input_value",
      "name": "green",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 255,
    },
    {
      "type": "input_value",
      "name": "blue",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 255,
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_ws2812_fill_color1",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_FILL_COLOR1}",
  "args0": [
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_ws2812_fill_color2",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_FILL_COLOR2}",
  "args0": [
    {
      "type": "field_number",
      "name": "red",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 255,
    },
    {
      "type": "field_number",
      "name": "green",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 255,
    },
    {
      "type": "field_number",
      "name": "blue",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 255,
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_ws2812_show",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_SHOW}",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_ws2812_clear",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_CLEAR}",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_ws2812_rainbow",
  "message0": "Gerora rainbow with wait %1 ms",
  "args0": [
    {
      "type": "field_number",
      "name": "wait",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_ws2812_set_brightness",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_SET_BRIGHTNESS}",
  "args0": [
    {
      "type": "field_number",
      "name": "brightness",
      "check": "Number",
      "value": 50,
      "min": 0,
      "max": 255,
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_ws2812_set_color1_2",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_SET_COLOR1_2}",
  "args0": [
    {
      "type": "field_number",
      "name": "n",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 24,
    },
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    },
    {
      "type": "field_number",
      "name": "n2",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 24,
    },
    {
      "type": "field_colour",
      "name": "color2",
      "colour": "#ff0000"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "yy_ws2812_set_color_line",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_SET_COLOR_LINE}",
  "args0": [
    {
      "type": "field_number",
      "name": "n",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 24,
    },
    {
      "type": "field_number",
      "name": "n2",
      "check": "Number",
      "value": 0,
      "min": 0,
      "max": 24,
    },
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_ws2812_rotate_left",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_ROTATE_LEFT}",
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
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "yy_ws2812_rotate_right",
  "message0": "%{BKY_YY_MENU_DISPLAY_RGB_ROTATE_RIGHT}",
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
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
]
);
