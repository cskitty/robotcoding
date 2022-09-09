Blockly.defineBlocksWithJsonArray([
{
      "type": "yy_l298n_go1",
      "message0": "%{BKY_YY_MENU_MOVE_L298N_GO1}",
      "args0": [
        {
          "type": "field_number",
          "name": "in1",
          "value": 0,
          "min": 0,
          "max": 27
        },
        {
          "type": "field_number",
          "name": "in2",
          "value": 1,
          "min": 0,
          "max": 27
        },
        {
            "type": "field_dropdown",
            "name": "dir",
            "options": [
              ["%{BKY_YY_MENU_MOVE_MOTOR_DIR_1}","1"],
              ["%{BKY_YY_MENU_MOVE_MOTOR_DIR_2}","2"],
            ]
          },
        {
          "type": "input_value",
          "name": "speed"
        }
      ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#28B463",
    "tooltip": "",
    "helpUrl": ""
},
{
  "type": "yy_l298n_go2",
  "message0": "%{BKY_YY_MENU_MOVE_L298N_GO2}",
  "args0": [
      {
        "type": "field_number",
        "name": "in3",
        "value": 2,
        "min": 0,
        "max": 27
      },
      {
        "type": "field_number",
        "name": "in4",
        "value": 3,
        "min": 0,
        "max": 27
      },
      {
          "type": "field_dropdown",
          "name": "dir",
          "options": [
            ["%{BKY_YY_MENU_MOVE_MOTOR_DIR_1}","1"],
            ["%{BKY_YY_MENU_MOVE_MOTOR_DIR_2}","2"],
          ]
        },
      {
        "type": "input_value",
        "name": "speed"
      }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#28B463",
  "tooltip": "",
  "helpUrl": ""
},
{
    "type": "yy_l298n_stop",
    "message0": "%{BKY_YY_MENU_MOVE_L298N_STOP}",
"args0": [
  {
    "type": "field_dropdown",
    "name": "ch",
    "options": [
      ["A","1"],
      ["B","2"],
      ["%{BKY_YY_MENU_MOVE_MOTOR_M_ALL}","0"],
    ]
  },
],
"inputsInline": true,
"previousStatement": null,
"nextStatement": null,
"colour": "#28B463",
"tooltip": "",
"helpUrl": ""
},
]);