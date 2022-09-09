Blockly.defineBlocksWithJsonArray([
  {
    "type": "yy_set_servo",
    "message0": "%{BKY_YY_MENU_MOVE_SERVO_SET_SERVO}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "ch",
        "options": [
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_1}","12"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_2}","13"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_3}","14"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_4}","15"],
        ]
      },
      {
        "type": "field_number",
        "name": "anglemin",
        "value": -90,
        "min": -90,
        "max": 90,
      },
      {
        "type": "field_number",
        "name": "anglemax",
        "value": 90,
        "min": -90,
        "max": 90,
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2C3E50",
    "tooltip": "",
    "helpUrl": ""
  }
  ]);


Blockly.defineBlocksWithJsonArray([
{
  "type": "yy_external_servo",
  "message0": "%{BKY_YY_MENU_MOVE_SERVO_EXTERNAL_SERVO}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "ch",
      "options": [
        ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_1}","12"],
        ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_2}","13"],
        ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_3}","14"],
        ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_4}","15"],
      ]
    },
    {
      "type": "input_value",
      "name": "angle"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#2C3E50",
  "tooltip": "",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "yy_servo_angle",
    "message0": "%{BKY_YY_MENU_MOVE_SERVO_SERVO_ANGLE}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "ch",
        "options": [
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_1}","12"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_2}","13"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_3}","14"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_4}","15"],
        ]
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": "#2C3E50",
    "tooltip": "",
    "helpUrl": ""
  }
  ]);

