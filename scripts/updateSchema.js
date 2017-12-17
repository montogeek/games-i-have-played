#!/usr/bin/env babel-node

require = require('@std/esm')(module, { cjs: true, esm: 'js' })

var fs = require('fs')
var path = require('path')
var schema = require('../server/schema.js').default
var graphql = require('graphql')

const schemaPath = path.resolve(__dirname, '../data/schema.graphql')

fs.writeFileSync(schemaPath, graphql.printSchema(schema))

console.log('Wrote ' + schemaPath)
