Blockly.defineBlocksWithJsonArray([
    {
        "type": "yy_car_forward",
        "message0": "%{BKY_YY_MENU_MOVE_CAR_FORWARD}",
        "args0": [{
            "type": "field_number",
            "name": "speed",
            "value": 50,
            "min": 1,
            "max": 100
        }, {
            "type": "field_number",
            "name": "time",
            "value": 3,
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "yy_car_backward",
        "message0": "%{BKY_WR_MENU_8285_MOVE_CAR_BACKWARD}",
        "args0": [{
            "type": "field_number",
            "name": "time",
            "value": 3,
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    }, 
    {
        "type": "yy_car_turn_left",
        "message0": "%{BKY_YY_MENU_MOVE_CAR_TURN_LEFT}",
        "args0": [{
            "type": "field_number",
            "name": "speed",
            "value": 50,
            "min": 1,
            "max": 100,
        }, {
            "type": "field_number",
            "name": "time",
            "value": 3,
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "yy_car_turn_right",
        "message0": "%{BKY_YY_MENU_MOVE_CAR_TURN_RIGHT}",
        "args0": [{
            "type": "field_number",
            "name": "speed",
            "value": 50,
            "min": 1,
            "max": 100,
        }, {
            "type": "field_number",
            "name": "time",
            "value": 3,
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "yy_car_move",
        "message0": "%{BKY_YY_MENU_MOVE_CAR_CAR_MOVE}",
        "args0": [{
            "type": "field_dropdown",
            "name": "move",
            "options": [
                ["%{BKY_YY_MENU_MOVE_CAR_CAR_MOVE_FORWARD}", "1"],
                ["%{BKY_YY_MENU_MOVE_CAR_CAR_MOVE_BACKWARD}", "2"],
                ["%{BKY_YY_MENU_MOVE_CAR_CAR_MOVE_RIGHT}", "3"],
                ["%{BKY_YY_MENU_MOVE_CAR_CAR_MOVE_LEFT}", "4"]
            ]
        }, {
            "type": "input_value",
            "name": "speed",
            "value": 50,
            "min": 1,
            "max": 100,
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "yy_car_stop",
        "message0": "%{BKY_YY_MENU_MOVE_CAR_STOP}",
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
 
    },
    {
        "type": "yy_car_set_speed",
        "message0": "%{BKY_YY_MENU_MOVE_CAR_SET_SPEED}",
        "args0": [{
            "type": "field_number",
            "name": "speed",
            "value": 50,
            "min": 1,
            "max": 100,
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "yy_car_get_speed",
        "message0": "%{BKY_YY_MENU_MOVE_CAR_GET_SPEED}",
        "args0": [ ],
        "output": "Number",
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "yy_car_set_Pin",
        "message0": "%{BKY_YY_MENU_MOVE_CAR_SET_PIN}",
        "args0": [
          {
            "type": "field_number",
            "name": "in1",
            "check": "Number",
            "value": 0,
            "min": 0,
            "max": 40, 
          },
          {
            "type": "field_number",
            "name": "in2",
            "check": "Number",
            "value": 0,
            "min": 0,
            "max": 40,
          },
          {
            "type": "field_number",
            "name": "in3",
            "check": "Number",
            "value": 0,
            "min": 0,
            "max": 40,
          },
          {
            "type": "field_number",
            "name": "in4",
            "check": "Number",
            "value": 0,
            "min": 0,
            "max": 40,
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#28B463",
        "tooltip": "",
        "helpUrl": ""
      }

]
);