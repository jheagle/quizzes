const plugins = require('./general/plugins.js');
const jsonDom = require('json-dom').default;
const jsonDomComponents = require('json-dom-components').default;
plugins();
window.jsonDom = jsonDom;
window.jsonDomComponents = jsonDomComponents;