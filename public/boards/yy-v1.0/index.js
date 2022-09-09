addBoard({
  id: "yy-v1.0",
  name: "Windtree Ball Server(PICO) v1.0",
  description: "",
  image: "images/yyv1.0.jpg",
  uploadMode: "REPL",
  chip: "RP2",
  script: ["../raspberry-pi-pico/js/field_dotmatrix.js"],
  css: ["../raspberry-pi-pico/css/field_dotmatrix.css"],
  blocks: [
    "blocks/blocks_car.js",
    "../raspberry-pi-pico/blocks/blocks_pin.js",
    "../raspberry-pi-pico/blocks/blocks_advanced.js",
    "blocks/blocks_servo.js",
    "../raspberry-pi-pico/blocks/blocks_display.js",
    //"blocks/blocks_gerora.js",
    "../raspberry-pi-pico/blocks/blocks_joystick.js",
    //"blocks/blocks_sound.js",
    "blocks/blocks_ball.js",
    //"blocks/blocks_switch.js",
    //"blocks/blocks_input.js",
    //"blocks/blocks_tcs3472.js",
    //"blocks/blocks_motor.js",
    //"blocks/blocks_l298n.js",
    "blocks/blocks_v1.js",

    "blocks/generators_car.js",
    "../raspberry-pi-pico/blocks/generators_pin.js",
    "../raspberry-pi-pico/blocks/generators_avanced.js",
    "blocks/generators_servo.js",
    "../raspberry-pi-pico/blocks/generators_display.js",
    //"blocks/generators_gerora.js",
    //"blocks/generators_sound.js",
    "../raspberry-pi-pico/blocks/generators_joystick.js",
    "blocks/generators_ball.js",
    //"blocks/generators_switch.js",
    //"blocks/generators_input.js",
    //"blocks/generators_tcs3472.js",
    //"blocks/generators_motor.js",
    //"blocks/generators_l298n.js",
    "blocks/generators_v1.js",
  ],
  modules: [],
  examples: [
    "高级",
    {
      name: "Ball server",
      files: "examples/shoot",
    },
  ],
  firmware: [
    {
      name: "MicroPython for Raspberry Pi Pico V1.17",
      path: "firmware/rp2-pico-20210902-v1.17.uf2",
      version: "v1.17",
      date: "2021-09-02",
      board: "Raspberry Pi Pico",
      cpu: "RP2040",
    },
  ],
  usb: [
    {
      vendorId: "2E8A",
      productId: "0005",
    },
  ],
  autoCompletion: {},
  level: [
    {
      name: "Beginner",
      description: "",
      icon: "images/puzzle.png",
      blocks: [
        {
          name: "%{BKY_YY_MENU_MOVE}",
          icon: "images/tire.png",
          clolor: "#e64c3c",
          blocks: [
            {
              xml: '<label text="%{BKY_YY_MENU_MOVE_YYCAR}"></label>',
            },
            "yy_car_forward",
            "yy_car_backward",
            "yy_car_turn_left",
            "yy_car_turn_right",
            {
              xml: `
                                <block type="yy_car_move">
                                    <value name="speed">
                                        <shadow type="math_number">
                                            <field name="NUM">100</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            "yy_car_stop",
            "yy_car_set_speed",
            "yy_car_get_speed",
          ],
        },
        {
          name: "%{BKY_YY_MENU_RCONTROL}",
          icon: "images/joystick.png",
          color: "#e64c3c",
          blocks: [
            {
              xml: '<label text="%{BKY_YY_MENU_RCONTROL_JOY}"></label>',
            },
            "yy_set_joystick",
            "yy_get_joystick",
            "yy_joystick_get_key",
            "yy_get_joystick_key2",
            "yy_get_joystick_rocker",
            "yy_clear_joystick",
          ],
        },
        {
          name: "%{BKY_YY_MENU_DISPLAY}",
          icon: "images/tm1637.png",
          color: "#e64c3c",
          blocks: [
            {
              xml: '<label text="%{BKY_YY_MENU_DISPLAY_TM1637}"></label>',
            },
            "yy_display_set",
            "yy_display_angle",
            "yy_display_speed",
            {
              xml: `
                                <block type="yy_display_show">
                                    <value name="value">
                                        <shadow type="text">
                                            <field name="TEXT">ABCD</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="yy_display_scroll">
                                    <value name="value">
                                        <shadow type="text">
                                            <field name="TEXT">A</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="yy_display_show4x8">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="yy_display_temperature">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">12</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="yy_display_two_number">
                                    <value name="x">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                    <value name="y">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            "yy_display_clear",
          ],
        },
        {
          name: "%{BKY_YY_MENU_SHOOT}",
          icon: "images/shoot.png",
          color: "#e64c3c",
          blocks: [
            "yy_set_basketball",
            "yy_shoot_basketball",
            {
              xml: `
                                <block type="yy_turn_basketball">
                                    <value name="angle">
                                        <shadow type="math_number">
                                            <field name="NUM">50</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="yy_turn_step_basketball">
                                    <value name="angle">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            "yy_ball_turn_angle",
          ],
        },
        {
          name: "%{BKY_YY_MENU_PIN}",
          icon: "/images/icon/led.png",
          color: "#e64c3c",
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
                                            <field name="NUM">13</field>
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
                                            <field name="NUM">13</field>
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
                                            <field name="NUM">5</field>
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
                                            <field name="NUM">5</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
          ],
        },
        {
          name: "%{BKY_YY_MENU_CONTROL}",
          icon: `/images/icon/process.png`,
          color: "#fbbd5e",
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
            "controls_forever",
            "controls_flow_statements",
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
            "controls_if",
            {
              xml: `
                                <block type="controls_if">
                                    <mutation else="1"></mutation>
                                </block>
                            `,
            },
            "controls_wait_until",
            "controls_whileUntil",
          ],
        },
        {
          name: "%{BKY_YY_MENU_GENERIC}",
          icon: `/images/icon/maths.png`,
          color: "#293939",
          blocks: [
            {
              xml: '<label text="%{BKY_YY_MENU_GENERIC_MATH}"></label>',
            },
            "yy_number",
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
              xml: '<label text="%{BKY_YY_MENU_GENERIC_LOGIC}"></label>',
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

            "logic_operation",
            "logic_negate",
            {
              xml: '<label text="%{BKY_YY_MENU_GENERIC_TEXT}"></label>',
            },
            "text",
            "text_join",
            {
              xml: `
                                <block type="yy_number_2_text">
                                    <value name="number">
                                        <shadow type="math_number">
                                            <field name="NUM">0</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            {
              xml: `
                                <block type="logic_compare">
                                    <value name="A">
                                        <shadow type="text">
                                            <field name="TEXT">Hello!</field>
                                        </shadow>
                                    </value>
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
          name: "%{BKY_YY_MENU_VARIABLE}",
          icon: `/images/icon/relativity.png`,
          color: "#ac5e2e",
          blocks: "VARIABLE",
        },
        {
          name: "%{BKY_YY_MENU_FUNCTION}",
          icon: `/images/icon/jigsaw.png`,
          color: "#17A589",
          blocks: "PROCEDURE",
        },
        {
          name: "%{BKY_YY_MENU_ADVANCED}",
          icon: `/images/icon/expert.png`,
          color: "#8E44AD",
          blocks: [
            {
              xml: '<label text="%{BKY_YY_MENU_ADVANCED_DEBUG}"></label>',
            },
            {
              xml: `
                                <block type="yy_code">
                                    <value name="code">
                                        <shadow type="text">
                                            <field name="TEXT"></field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
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
            {
              xml: `
                                <block type="yy_send_into_source">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM"></field>
                                        </shadow>
                                    </value>
                                    <value name="source">
                                        <shadow type="text">
                                            <field name="TEXT">variable1</field>
                                        </shadow>
                                    </value>
                                </block>
                            `,
            },
            /*
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
                            `
                        },
                        */

            {
              xml: '<label text="%{BKY_YY_MENU_ADVANCED_THREAD}"></label>',
            },
            "run_in_background",
            {
              xml: '<label text="%{BKY_YY_MENU_ADVANCED_POWER}"></label>',
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
                            `,
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
                            `,
            },
            // "is_woke_from_deep_sleep",
            "board_reset",
            //"yy_get_voltage",
          ],
        },
      ],
    },
  ],
});
