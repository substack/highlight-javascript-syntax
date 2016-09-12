var highlight = require('../')
var fs = require('fs')

var str = process.argv.slice(2).join(' ')
console.log(highlight(str))
