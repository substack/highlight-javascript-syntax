var highlight = require('../')
var test = require('tape')

test('syntax', function (t) {
  t.equal(highlight('var y=x<4').replace(/\s+/g,' '), `
    <span class="program"><span class="variable-declaration">
    var <span class="variable-declarator"><span class="identifier">y</span>
    =<span class="binary-expression"><span class="identifier">x</span>
    &lt;<span class="literal">4</span></span></span></span></span>
  `.replace(/\s*\n\s*/g,'').replace(/\s+/g,' ').trim(), 'lt')
  t.equal(highlight('x < 4').replace(/\s+/g,' '), `
    <span class="program"><span class="expression-statement">
    <span class="binary-expression"><span class="identifier">x
    </span> &lt; <span class="literal">4</span></span></span></span>
  `.replace(/\s*\n\s*/g,'').replace(/\s+/g,' ').trim(), 'lt whitespace')
  t.end()
})
