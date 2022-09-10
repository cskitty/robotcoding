Blockly.defineBlocksWithJsonArray([
  {
    type: 'yy_motor_go',
    message0: '%{BKY_YY_MENU_MOVE_MOTOR_GO}',
    args0: [
      {
        type: 'field_dropdown',
        name: 'ch',
        options: [
          ['M1', '1'],
          ['M2', '2'],
        ],
      },
      {
        type: 'field_dropdown',
        name: 'dir',
        options: [
          ['%{BKY_YY_MENU_MOVE_MOTOR_DIR_1}', '1'],
          ['%{BKY_YY_MENU_MOVE_MOTOR_DIR_2}', '2'],
        ],
      },
      {
        type: 'input_value',
        name: 'speed',
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: '#86d197',
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'yy_motor_stop',
    message0: '%{BKY_YY_MENU_MOVE_MOTOR_STOP}',
    args0: [
      {
        type: 'field_dropdown',
        name: 'ch',
        options: [
          ['M1', '1'],
          ['M2', '2'],
          ['%{BKY_YY_MENU_MOVE_MOTOR_M_ALL}', '0'],
        ],
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: '#86d197',
    tooltip: '',
    helpUrl: '',
  },
])
