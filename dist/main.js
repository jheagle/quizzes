const plugins = require('./general/plugins.js');
const jsonDom = require('json-dom');
const jsonDomComponents = require('json-dom-components');
plugins();
window.jsonDom = jsonDom;
window.jsonDomComponents = jsonDomComponents;