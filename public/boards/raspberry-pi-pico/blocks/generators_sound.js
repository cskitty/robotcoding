Blockly.Python['yy_set_sound'] = function (block) {
    Blockly.Python.definitions_['import_yy_yyyx9100'] = 'from yyyx9100 import YX9100';
    Blockly.Python.definitions_[`def_yy_yyyx9100`] = `sound = YX9100()\nsound.volume(25)\nsound.stop()`;
    return '';
};

Blockly.Python['yy_sound_set_vol'] = function(block) {
    var value_vol = block.getFieldValue('vol');
    var code = `sound.volume(${value_vol})\n`;
    return code;
};

Blockly.Python['yy_sound_play_track'] = function(block) {
    var value_track = block.getFieldValue('track');
    var code = `sound.play(${value_track})\n`;
    return code;
};

Blockly.Python['yy_sound_play_track_loop'] = function(block) {
    var value_track = block.getFieldValue('track');
    var code = `sound.loop_track(${value_track})\n`;
    return code;
};

Blockly.Python['yy_sound_pause'] = function(block) {
    var code = `sound.pause()\n`;
    return code;
};

Blockly.Python['yy_sound_resume'] = function(block) {
    var code = `sound.resume()\n`;
    return code;
};

Blockly.Python['yy_sound_stop'] = function(block) {
    var code = `sound.stop()\n`;
    return code;
};

Blockly.Python['yy_sound_loop'] = function(block) {
    var code = `sound.loop()\n`;
    return code;
};

Blockly.Python['yy_sound_loop_disable'] = function(block) {
    var code = `sound.loop_disable()\n`;
    return code;
};

Blockly.Python['yy_sound_vol_up'] = function(block) {
    var code = `sound.volume_up()\n`;
    return code;
};

Blockly.Python['yy_sound_vol_down'] = function(block) {
    var code = `sound.volume_down()\n`;
    return code;
};

Blockly.Python['yy_sound_vol_get'] = function(block) {
    var code = `sound.volume()`;
    return [code, Blockly.Python.ORDER_NONE];
  };
  