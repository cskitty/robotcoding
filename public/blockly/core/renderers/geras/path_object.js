/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview An object that owns a block's rendering SVG elements.
 * @author fenichel@google.com (Rachel Fenichel)
 */

'use strict';

goog.provide('Blockly.geras.PathObject');

goog.require('Blockly.blockRendering.PathObject');
goog.require('Blockly.geras.ConstantProvider');
goog.require('Blockly.Theme');
goog.require('Blockly.utils.dom');
goog.require('Blockly.utils.object');


/**
 * An object that handles creating and setting each of the SVG elements
 * used by the renderer.
 * @param {!SVGElement} root The root SVG element.
 * @param {!Blockly.Theme.BlockStyle} style The style object to use for
 *     colouring.
 * @param {!Blockly.geras.ConstantProvider} constants The renderer's constants.
 * @constructor
 * @extends {Blockly.blockRendering.PathObject}
 * @package
 */
Blockly.geras.PathObject = function(root, style, constants) {
  /**
   * The renderer's constant provider.
   * @type {!Blockly.geras.ConstantProvider}
   */
  this.constants = constants;

  this.svgRoot = root;

  // The order of creation for these next three matters, because that
  // effectively sets their z-indices.

  /**
   * The dark path of the block.
   * @type {SVGElement}
   * @package
   */
  this.svgPathDark = Blockly.utils.dom.createSvgElement('path',
      {'class': 'blocklyPathDark', 'transform': 'translate(1,1)'},
      this.svgRoot);

  /**
   * The primary path of the block.
   * @type {!SVGElement}
   * @package
   */
  this.svgPath = Blockly.utils.dom.createSvgElement('path',
      {'class': 'blocklyPath'}, this.svgRoot);

  /**
   * The light path of the block.
   * @type {SVGElement}
   * @package
   */
  this.svgPathLight = Blockly.utils.dom.createSvgElement('path',
      {'class': 'blocklyPathLight'}, this.svgRoot);

  /**
   * The colour of the dark path on the block in '#RRGGBB' format.
   * @type {string}
   * @package
   */
  this.colourDark = '#000000';

  /**
   * The style object to use when colouring block paths.
   * @type {!Blockly.Theme.BlockStyle}
   * @package
   */
  this.style = style;
};
Blockly.utils.object.inherits(Blockly.geras.PathObject,
    Blockly.blockRendering.PathObject);

/**
 * @override
 */
Blockly.geras.PathObject.prototype.setPath = function(mainPath) {
  this.svgPath.setAttribute('d', mainPath);
  this.svgPathDark.setAttribute('d', mainPath);
};

/**
 * Set the highlight path generated by the renderer onto the SVG element.
 * @param {string} highlightPath The highlight path.
 * @package
 */
Blockly.geras.PathObject.prototype.setHighlightPath = function(highlightPath) {
  this.svgPathLight.setAttribute('d', highlightPath);
};

/**
 * @override
 */
Blockly.geras.PathObject.prototype.flipRTL = function() {
  // Mirror the block's path.
  this.svgPath.setAttribute('transform', 'scale(-1 1)');
  this.svgPathLight.setAttribute('transform', 'scale(-1 1)');
  this.svgPathDark.setAttribute('transform', 'translate(1,1) scale(-1 1)');
};

/**
 * @override
 */
Blockly.geras.PathObject.prototype.applyColour = function(block) {
  this.svgPathLight.style.display = '';
  this.svgPathDark.style.display = '';
  this.svgPathLight.setAttribute('stroke', this.style.colourTertiary);
  this.svgPathDark.setAttribute('fill', this.colourDark);

  Blockly.geras.PathObject.superClass_.applyColour.call(this, block);

  this.svgPath.setAttribute('stroke', 'none');
};

/**
 * @override
 */
Blockly.geras.PathObject.prototype.setStyle = function(blockStyle) {
  this.style = blockStyle;
  this.colourDark =
      Blockly.utils.colour.blend('#000', this.style.colourPrimary, 0.2) ||
      this.colourDark;
};

/**
 * @override
 */
Blockly.geras.PathObject.prototype.updateHighlighted = function(highlighted) {
  if (highlighted) {
    this.svgPath.setAttribute('filter',
        'url(#' + this.constants.embossFilterId + ')');
    this.svgPathLight.style.display = 'none';
  } else {
    this.svgPath.setAttribute('filter', 'none');
    this.svgPathLight.style.display = 'inline';
  }
};

/**
 * @override
 */
Blockly.geras.PathObject.prototype.updateShadow_ = function(shadow) {
  if (shadow) {
    this.svgPathLight.style.display = 'none';
    this.svgPathDark.setAttribute('fill', this.style.colourSecondary);
    this.svgPath.setAttribute('stroke', 'none');
    this.svgPath.setAttribute('fill', this.style.colourSecondary);
  }
};

/**
 * @override
 */
Blockly.geras.PathObject.prototype.updateDisabled_ = function(disabled) {
  Blockly.geras.PathObject.superClass_.updateDisabled_.call(this, disabled);
  if (disabled) {
    this.svgPath.setAttribute('stroke', 'none');
  }
};
