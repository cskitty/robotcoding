
Blockly.defineBlocksWithJsonArray([
  {
    "type": "yy_set_basketball",
    "message0": "初始化发球机: %1 射击舵机Pin：%2 类型：%3 %4 角度舵机Pin： %5 范围 %6°到 %7° 角度修正：%10 %8红外传感 Pin：%9 ",
    "args0": [
      {
        "type": "input_dummy",
      },
      {
        "type": "field_number",
        "name": "mgs",
        "value": 11,
        "min": 0,
        "max": 28,
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
        "type": "field_number",
        "name": "mga",
        "value": 10,
        "min": 0,
        "max": 28,
      },
      {
        "type": "field_number",
        "name": "agmin",
        "value": 30,
        "min": -90,
        "max": 90,
      },
      {
        "type": "field_number",
        "name": "agmax",
        "value": 80,
        "min": -90,
        "max": 90,
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "field_number",
        "name": "pin",
        "value": 12,
        "min": 0,
        "max": 28,
      },
      {
        "type": "field_number",
        "name": "fix",
        "value": 105,
        "min": -180,
        "max": 180,
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


  


