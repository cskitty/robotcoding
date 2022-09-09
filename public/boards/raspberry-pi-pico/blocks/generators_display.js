Blockly.Python['yy_display_custom'] = function(block) {
   
    var v = block.getFieldValue('value');
    var vCol = v;
    var colour_color = block.getFieldValue('color');
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colour_color);
    var red = parseInt(result[1], 16);
    var green = parseInt(result[2], 16);
    var blue = parseInt(result[3], 16);
    v = v.replace(/\\x/g,"");
    var code="";
    var pixel_nums="";
    for(j=0;j<5;j++)
    {
        let num = parseInt(v.substring(j*2,j*2+2),16); 
        for (i=4;i>=0;i--){
            if(j%2==0){
                b =(num>>4-i) & 1 ;
            }
            else{
                b=(num>>i)&1;
            }
            if(b==1)
            {
                pixel_nums = pixel_nums + (5*j+i)+',';
            }
        }
        
    }
    if (pixel_nums !=""){
        pixel_nums = pixel_nums.substring(0, pixel_nums.lastIndexOf(','));
        code = `strip.set_pixels((${pixel_nums}),${red},${green}, ${blue})\n`;
    }
    else{
        code = 'strip.fill(0,0,0)\n';
    }    
    code = code +`#${vCol}\n`;
    code =code + 'strip.show()\n';
    return code;
    
};

Blockly.Python['yy_display_set'] = function (block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_yy_tm1637'] = 'import tm1637';
    
    var dropdown_ch = block.getFieldValue('ch');
    pin = YYJtoGPIO(dropdown_ch)
  
    var code = `tm9830x = tm1637.TM1637(clk=Pin(${pin[0]}),dio=Pin(${pin[1]}))\n`;
    var code = code+ 'tm9830x.show("    ")\n';
    return code;
};

Blockly.Python['yy_display_show'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = `tm9830x.show(${value_value})\n`;
    return code;
};

Blockly.Python['yy_display_scroll'] = function(block) {
    
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = `tm9830x.scroll(${value_value})\n`;
    return code;
};

Blockly.Python['yy_display_show4x8'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = `tm9830x.number(${value_value})\n`;
    return code;
};

Blockly.Python['yy_display_temperature'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = `tm9830x.temperature(${value_value})\n`;
    return code;
};
/*
Blockly.Python['display_right_show'] = function(block) {
    Blockly.Python.definitions_['import_display'] = 'import display';

    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = `display.right(${value_value})\n`;
    return code;
};

Blockly.Python['display_plot'] = function(block) {
    Blockly.Python.definitions_['import_display'] = 'import display';

    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = `display.plot(${value_value})\n`;
    return code;
};
*/
Blockly.Python['yy_display_clear'] = function(block) {
    
    var code = 'tm9830x.show("    ")\n';
    return code;
};

Blockly.Python['yy_display_two_number'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    
    var code = `tm9830x.numbers(${value_x}, ${value_y})\n`;
    return code;
};


Blockly.Python['yy_display_voltage'] = function(block) {
    Blockly.Python.definitions_['from_yylibs_import_yyboard'] = 'from yylibs import YYBord';

    var code  = `yy_vol = YYBord().GetVoltage2()\n`
    code  += `tm9830x.numbers(yy_vol[0],yy_vol[1])\n`;
    return code;
};
