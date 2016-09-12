var falafel = require('falafel')

module.exports = function (str) {
  return falafel(str, { ecmaVersion: 6 }, function (node) {
    var str = node.source()
    if (node.type === 'ArrowFunctionExpression') {
      str = str.replace(/=>/, '=&gt;')
    } else if (node.type === 'BinaryExpression' && /<>&/.test(node.operator)) {
      str = node.left.source() + esc(node.operator) + node.right.source()
    } else if (node.type === 'Literal' || node.type === 'TemplateElement') {
      str = esc(str)
    }
    node.update('<span class="' + dash(node.type) + '">' + str + '</span>')
  }).toString()
}

function esc (str) {
  return str.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/&/g, '&amp;')
}

function dash (str) {
  return str.replace(/^[A-Z]/,tolower).replace(/([a-z])([A-Z])/g, dasher)
  function tolower (s) { return s.toLowerCase() }
  function dasher (_, a, b) { return a + '-' + b.toLowerCase() }
}
