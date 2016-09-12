var falafel = require('falafel')

module.exports = function (source) {
  return falafel(source, { ecmaVersion: 6 }, function (node) {
    var str = node.source()
    if (node.type === 'ArrowFunctionExpression') {
      str = str.replace(/=>/, '=&gt;')
    } else if (node.type === 'BinaryExpression' && /[<>&]/.test(node.operator)) {
      var op = source.slice(node.left.end, node.right.start)
      str = node.left.source() + esc(op) + node.right.source()
    } else if (node.type === 'Literal' || node.type === 'TemplateElement') {
      str = esc(str)
    }
    node.update('<span class="' + dash(node.type) + '">' + str + '</span>')
  }).toString()
}

function esc (str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}

function dash (str) {
  return str.replace(/^[A-Z]/,tolower).replace(/([a-z])([A-Z])/g, dasher)
  function tolower (s) { return s.toLowerCase() }
  function dasher (_, a, b) { return a + '-' + b.toLowerCase() }
}
