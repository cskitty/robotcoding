Blockly.defineBlocksWithJsonArray([
    {
        "type": "yy_csb_set",
        "message0": "%{BKY_YY_MENU_INPUT_HCSR_SET}",
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
        "colour": "#E67E22",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "yy_csb_get_cm",
        "message0": "%{BKY_YY_MENU_INPUT_HCSR_GET_CM}",
        "args0": [ ],
        "output": "Number",
        "colour": "#E67E22",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "yy_csb_get_mm",
        "message0": "%{BKY_YY_MENU_INPUT_HCSR_GET_MM}",
        "args0": [ ],
        "output": "Number",
        "colour": "#E67E22",
        "tooltip": "",
        "helpUrl": ""
    },
])