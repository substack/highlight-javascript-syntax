var highlight = require('../')
var test = require('tape')

test('lt', function (t) {
  t.equal(highlight('var y = x < 4').replace(/\s+/g,''), `
    <span class="program"><span class="variable-declaration">
    var <span class="variable-declarator"><span class="identifier">y</span>
    = <span class="binary-expression"><span class="identifier">x</span>
    &lt; <span class="literal">4</span></span></span></span></span>
  `.replace(/\s+/g,''))
  t.end()
})
