# highlight-javascript-syntax

highlight javascript syntax with html

This module inserts `<span>` elements into a string of javascript syntax.

# example

``` js
var highlight = require('highlight-javascript-syntax')
var fs = require('fs')

var str = process.argv.slice(2).join(' ')
console.log(highlight(str))
```

```
$ node cmd.js 'console.log("hello")'
<span class="program"><span class="expression-statement"><span class="call-expression"><span class="member-expression"><span class="identifier">console</span>.<span class="identifier">log</span></span>(<span class="literal">"hello"</span>)</span></span></span>
```

# api

``` js
var highlight = require('highlight-javascript-syntax')
```

## var html = highlight(js)

Return a string of `html` given a string of javascript `js`.

# styling

The span class names are lowercased, dashed versions of node types.

For a full list, consult the file `syntax.css` included in this distribution.

# install

```
$ npm install highlight-javascript-syntax
```

# license

BSD
