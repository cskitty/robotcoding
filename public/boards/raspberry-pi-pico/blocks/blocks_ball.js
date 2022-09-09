
Blockly.defineBlocksWithJsonArray([
  {
    "type": "yy_set_basketball",
    "message0": "%{BKY_YY_MENU_SHOOT_SET}",
    "args0": [
      {
        "type": "input_dummy",
      },
      {
        "type": "field_dropdown",
        "name": "mgs",
        "options": [
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_1}","12"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_2}","13"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_3}","14"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_4}","15"],
        ]
      },
      {
        "type": "field_dropdown",
        "name": "mgstype",
        "options": [
          ["%{BKY_YY_MENU_SHOOT_SERVO_TYPE_0}","0"],
          ["%{BKY_YY_MENU_SHOOT_SERVO_TYPE_1}","1"],
        ]
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "field_dropdown",
        "name": "mga",
        "options": [
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_1}","12"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_2}","13"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_3}","14"],
          ["%{BKY_YY_MENU_MOVE_SERVO_SERIAL_4}","15"],
        ]
      },
      {
        "type": "field_number",
        "name": "agmin",
        "value": -55,
        "min": -90,
        "max": 90,
      },
      {
        "type": "field_number",
        "name": "agmax",
        "value": -20,
        "min": -90,
        "max": 90,
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "field_number",
        "name": "pin",
        "value": 0,
        "min": 0,
        "max": 28,
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yy_shoot_basketball",
    "message0": "%{BKY_YY_MENU_SHOOT_SHOOT}",
    "args0": [],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yy_turn_basketball",
    "message0": "%{BKY_YY_MENU_SHOOT_TURN}",
    "args0": [
      {
        "type": "input_value",
        "name": "angle"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yy_turn_step_basketball",
    "message0": "%{BKY_YY_MENU_SHOOT_TURN_STEP}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "ch",
        "options": [
          ["%{BKY_YY_MENU_SHOOT_TURN_ADD}","1"],
          ["%{BKY_YY_MENU_SHOOT_TURN_REDUCE}","0"],
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
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yy_ball_turn_angle",
    "message0": "%{BKY_YY_MENU_SHOOT_ANGLE}",
    "args0": [ ],
    "output": "Number",
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
},
  ]);


  


