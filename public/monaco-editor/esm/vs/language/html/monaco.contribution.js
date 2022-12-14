import '../../editor/editor.api.js';
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var Emitter = monaco.Emitter;
// --- HTML configuration and defaults ---------
var LanguageServiceDefaultsImpl = /** @class */ (function () {
    function LanguageServiceDefaultsImpl(languageId, options, modeConfiguration) {
        this._onDidChange = new Emitter();
        this._languageId = languageId;
        this.setOptions(options);
        this.setModeConfiguration(modeConfiguration);
    }
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "onDidChange", {
        get: function () {
            return this._onDidChange.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "modeConfiguration", {
        get: function () {
            return this._modeConfiguration;
        },
        enumerable: true,
        configurable: true
    });
    LanguageServiceDefaultsImpl.prototype.setOptions = function (options) {
        this._options = options || Object.create(null);
        this._onDidChange.fire(this);
    };
    LanguageServiceDefaultsImpl.prototype.setModeConfiguration = function (modeConfiguration) {
        this._modeConfiguration = modeConfiguration || Object.create(null);
        this._onDidChange.fire(this);
    };
    ;
    return LanguageServiceDefaultsImpl;
}());
export { LanguageServiceDefaultsImpl };
var formatDefaults = {
    tabSize: 4,
    insertSpaces: false,
    wrapLineLength: 120,
    unformatted: 'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',
    contentUnformatted: 'pre',
    indentInnerHtml: false,
    preserveNewLines: true,
    maxPreserveNewLines: null,
    indentHandlebars: false,
    endWithNewline: false,
    extraLiners: 'head, body, /html',
    wrapAttributes: 'auto'
};
var htmlOptionsDefault = {
    format: formatDefaults,
    suggest: { html5: true, angular1: true, ionic: true }
};
var handlebarOptionsDefault = {
    format: formatDefaults,
    suggest: { html5: true }
};
var razorOptionsDefault = {
    format: formatDefaults,
    suggest: { html5: true, razor: true }
};
function getConfigurationDefault(languageId) {
    return {
        completionItems: true,
        hovers: true,
        documentSymbols: true,
        links: true,
        documentHighlights: true,
        rename: true,
        colors: true,
        foldingRanges: true,
        selectionRanges: true,
        diagnostics: languageId === htmlLanguageId,
        documentFormattingEdits: languageId === htmlLanguageId,
        documentRangeFormattingEdits: languageId === htmlLanguageId // turned off for Razor and Handlebar
    };
}
var htmlLanguageId = 'html';
var handlebarsLanguageId = 'handlebars';
var razorLanguageId = 'razor';
var htmlDefaults = new LanguageServiceDefaultsImpl(htmlLanguageId, htmlOptionsDefault, getConfigurationDefault(htmlLanguageId));
var handlebarDefaults = new LanguageServiceDefaultsImpl(handlebarsLanguageId, handlebarOptionsDefault, getConfigurationDefault(handlebarsLanguageId));
var razorDefaults = new LanguageServiceDefaultsImpl(razorLanguageId, razorOptionsDefault, getConfigurationDefault(razorLanguageId));
// Export API
function createAPI() {
    return {
        htmlDefaults: htmlDefaults,
        razorDefaults: razorDefaults,
        handlebarDefaults: handlebarDefaults
    };
}
monaco.languages.html = createAPI();
// --- Registration to monaco editor ---
function getMode() {
    return import('./htmlMode.js');
}
monaco.languages.onLanguage(htmlLanguageId, function () {
    getMode().then(function (mode) { return mode.setupMode(htmlDefaults); });
});
monaco.languages.onLanguage(handlebarsLanguageId, function () {
    getMode().then(function (mode) { return mode.setupMode(handlebarDefaults); });
});
monaco.languages.onLanguage(razorLanguageId, function () {
    getMode().then(function (mode) { return mode.setupMode(razorDefaults); });
});
