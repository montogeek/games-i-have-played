// Provide options as a parameter or options file.
require = require('@std/esm')(module, { cjs: true, esm: 'js' })
module.exports = require('./index.js').default
