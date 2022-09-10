addBoard({
  id: 'esp32',
  name: 'Windtree Junior Robotics',
  description: '',
  image: 'images/cover.jpg',
  chip: 'ESP32',
  script: [
    // "js/field_bitmap.js",
  ],
  css: [
    // "css/field_bitmap.css",
  ],
  blocks: [
    `blocks/blocks_car.js?v=${jsver}`,
    'blocks/blocks_pin.js',
    'blocks/blocks_advanced.js',

    'blocks/generators_car.js',
    'blocks/generators_pin.js',
    'blocks/generators_avanced.js',
  ],
  modules: [],
  examples: [
    `${yy_msg['EX_CAR']}`,
    {
      name: `${yy_msg['EX_CAR_SIMPLE']}`,
      files: 'examples/move',
    },
  ],
  firmware: [
    {
      name: 'MicroPython for ESP32 Dev Board V1.6.0',
      path: 'firmware/MicroPython.for.ESP32.Dev.Board.V1.6.0.bin',
      version: 'V1.6.0',
      date: '2021-1-30',
      board: 'ESP32 Dev Board',
      cpu: 'ESP32',
    },
  ],
  usb: [
    {
      // CP2104
      vendorId: '10C4',
      productId: 'EA60',
    },
  ],
  autoCompletion: {},
  level: [
    {
      name: 'Beginner',
      description: '',
      icon: 'images/puzzle.png',
      blocks: [
        {
          name: '%{BKY_YY_MENU_MOVE}',
          icon: 'images/tire.png',
          clolor: '#f2e994',
          blocks: [
            {
              xml: '<label text="%{BKY_YY_MENU_MOVE_YYCAR}"></label>',
            },
            'yy_car_set_Pin',
            'yy_car_forward',
            'yy_car_backward',
            'yy_car_turn_left',
            'yy_car_turn_right',
            {
              xml: `
                                <block type="yy_car_move">
                                    <value name="speed">
                                        <shadow type="math_number">
                                            <field name="NUM">50</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            'yy_car_stop',
            'yy_car_set_speed',
            'yy_car_get_speed',
          ],
        },
        {
          name: '%{BKY_YY_MENU_PIN}',
          icon: '/images/icon/led.png',
          color: '#f2e994',
          blocks: [
            {
              xml: `
                                <block type="pin_digital_write">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="pin_analog_write">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1023</field>
                                        </shadow>
                                    </value>
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="pin_digital_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="pin_analog_read">
                                    <value name="pin">
                                        <shadow type="math_number">
                                            <field name="NUM">34</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
          ],
        },
        {
          name: '%{BKY_YY_MENU_CONTROL}',
          icon: `/images/icon/process.png`,
          color: '#fbbd5e',
          blocks: [
            {
              xml: `
                                <block type="controls_wait">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            'controls_forever',
            {
              xml: `
                                <block type="controls_repeat_ext">
                                    <value name="TIMES">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="controls_for">
                                    <field name="VAR">i</field>
                                    <value name="FROM">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="TO">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                    <value name="BY">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                          `,
            },
            'controls_if',
            {
              xml: `
                                <block type="controls_if">
                                    <mutation else="1"></mutation>
                                </block>
                            `,
            },
            'controls_wait_until',
            'controls_whileUntil',
          ],
        },
        {
          name: '%{BKY_YY_MENU_GENERIC}',
          icon: `/images/icon/maths.png`,
          color: '#293939',
          blocks: [
            {
              xml: '<label text="Math"></label>',
            },
            {
              xml: `
                                <block type="math_arithmetic">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">ADD</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="math_modulo">
                                    <value name="DIVIDEND">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                    <value name="DIVISOR">
                                        <shadow type="math_number">
                                            <field name="NUM">2</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            'random_seed',
            {
              xml: `
                                <block type="math_random_int">
                                    <value name="FROM">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                    <value name="TO">
                                        <shadow type="math_number">
                                            <field name="NUM">100</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="math_trig">
                                    <value name="NUM">
                                        <shadow type="math_number">
                                            <field name="NUM">45</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="math_round">
                                    <field name="OP">ROUND</field>
                                    <value name="NUM">
                                    <shadow type="math_number">
                                        <field name="NUM">3.1</field>
                                    </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: '<label text="Logic"></label>',
            },
            {
              xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                    <field name="OP">GT</field>
                                    <value name="B">
                                        <shadow type="math_number">
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },

            'logic_operation',
            'logic_negate',
            {
              xml: '<label text="Text"></label>',
            },
            'text',
            'text_join',
            {
              xml: `
                                <block type="logic_compare">
                                    <field name="OP">EQ</field>
                                    <value name="B">
                                        <shadow type="text">
                                            <field name="TEXT">Hello!</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
          ],
        },
        {
          name: '%{BKY_YY_MENU_VARIABLE}',
          icon: `/images/icon/relativity.png`,
          color: '#ac5e2e',
          blocks: 'VARIABLE',
        },
        {
          name: '%{BKY_YY_MENU_FUNCTION}',
          icon: `/images/icon/jigsaw.png`,
          color: '#17A589',
          blocks: 'PROCEDURE',
        },
        {
          name: '%{BKY_YY_MENU_ADVANCED}',
          icon: `/images/icon/expert.png`,
          color: '#8E44AD',
          blocks: [
            {
              xml: '<label text="Dashboard"></label>',
            },
            {
              xml: `
                                <block type="send_into_source">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">33</field>
                                        </shadow>
                                    </value>
                                    <value name="source">
                                        <shadow type="text">
                                            <field name="TEXT">source1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: '<label text="Debug"></label>',
            },
            {
              xml: `
                                <block type="print">
                                    <value name="value">
                                        <shadow type="text">
                                            <field name="TEXT">Hello, world!</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            /*
                        {
                            xml: '<label text="Internal RTC"></label>',
                        },
                        {
                            xml: `
                                <block type="rtc_set_time">
                                    <value name="hour">
                                        <shadow type="math_number">
                                            <field name="NUM">16</field>
                                        </shadow>
                                    </value>
                                    <value name="min">
                                        <shadow type="math_number">
                                            <field name="NUM">50</field>
                                        </shadow>
                                    </value>
                                    <value name="sec">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="day">
                                        <shadow type="math_number">
                                            <field name="NUM">22</field>
                                        </shadow>
                                    </value>
                                    <value name="month">
                                        <shadow type="math_number">
                                            <field name="NUM">8</field>
                                        </shadow>
                                    </value>
                                    <value name="year">
                                        <shadow type="math_number">
                                            <field name="NUM">2020</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "rtc_get_hour",
                        "rtc_get_min",
                        "rtc_get_sec",
                        "rtc_get_microsecond",
                        "rtc_get_day",
                        "rtc_get_month",
                        "rtc_get_year",
                        "rtc_sync_ntp",
                        {
                            xml: '<label text="Task"></label>',
                        },
                        "run_in_background",
                        {
                            xml: '<label text="Low Power Mode"></label>',
                        },
                        {
                            xml: `
                                <block type="light_sleep">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="deep_sleep">
                                    <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">10</field>
                                        </shadow>
                                    </value>
                                </block>
                            `
                        },
                        "is_woke_from_deep_sleep",
                        "board_reset"
                        */
          ],
        },
      ],
    },
  ],
})
