var highlight = require('../')
var fs = require('fs')

var src = fs.readFileSync(process.argv[2], 'utf8')
console.log(highlight(src))
