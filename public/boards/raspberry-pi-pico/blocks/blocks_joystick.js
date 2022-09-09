
Blockly.defineBlocksWithJsonArray([
  {
    "type": "yy_set_joystick",
    "message0": "%{BKY_YY_MENU_RCONTROL_JOY_SET}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "ch",
        "options": [
          [
            "J6",
            "J6"
          ],
          [
            "J7",
            "J7"
          ],
        ]
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#003366",
    "tooltip": "",
    "helpUrl": ""
  }
  ]);


  Blockly.defineBlocksWithJsonArray([
  {
    "type": "yy_get_joystick",
      "message0": "%{BKY_YY_MENU_RCONTROL_JOY_GET}",
      "args0": [],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#003366",
      "tooltip": "",
      "helpUrl": ""
  },
  {
    "type": "yy_joystick_get_key",
    "message0": "%{BKY_YY_MENU_RCONTROL_JOY_GET_KEY}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "keycode",
        "options": [
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_0}","0"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_5}","5"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_6}","6"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_7}","7"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_8}","8"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_99}","99"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_13}","13"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_14}","14"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_15}","15"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_16}","16"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_25}","25"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_26}","26"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_27}","27"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_28}","28"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_1}","1"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_2}","2"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_3}","3"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_4}","4"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_11}","11"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_9}","9"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_12}","12"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_10}","10"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_29}","29"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_30}","30"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_31}","31"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_32}","32"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_33}","33"],
          ["%{BKY_YY_MENU_RCONTROL_JOY_KEY_34}","34"],
          ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "callback"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#003366",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yy_clear_joystick",
    "message0": "%{BKY_YY_MENU_RCONTROL_JOY_CLEAR} ",
    "args0": [],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#003366",
    "tooltip": "",
    "helpUrl": ""
  },
]);


Blockly.defineBlocksWithJsonArray([
    {
      "type": "yy_get_ir",
      "message0": "%{BKY_YY_MENU_RCONTROL_IR_GET}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "callback"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#003366",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "yy_ir_get_key",
      "message0": "%{BKY_YY_MENU_RCONTROL_IR_GET_KEY}",
      "args0": [
        {
          "type": "field_number",
          "name": "code",
          "value": 0,
          "min": 0,
          "max": 999,
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "callback"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#003366",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "yy_ir_get_key_val",
      "message0": "%{BKY_YY_MENU_RCONTROL_IR_GET_KEY_VAL}",
      "args0": [ ],
      "output": "Number",
      "colour": "#003366",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "yy_get_joystick_key2",
      "message0": "%{BKY_YY_MENU_RCONTROL_JOY_GET_KEY2}",
      "args0": [ ],
      "output": "Number",
      "colour": "#003366",
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "yy_get_joystick_rocker",
      "message0": "%{BKY_YY_MENU_RCONTROL_JOY_GET_ROCKER}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ch",
          "options": [
            ["%{BKY_YY_MENU_RCONTROL_JOY_GET_ROCKER_L}","1"],
            ["%{BKY_YY_MENU_RCONTROL_JOY_GET_ROCKER_R}","2"],
          ]
        }
       ],
      "output": "Number",
      "colour": "#003366",
      "tooltip": "",
      "helpUrl": ""
    },
  ]);