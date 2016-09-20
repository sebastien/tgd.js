#!/usr/bin/env python3
import sys, re

# NOTE: Run it like: find modules/ -name "*.js" | grep -v /umd/ | xargs python3 bin/require-rewrite.py
__doc__ = """
Rewrites statements from input files like

```
var calculateNormals = require('guf').faceNormals;
exports.fileWriter = require('./lgp/file-writer');
```

into

```
import faceNormals as calculateNormals from 'guf';
import * as fileWriter from './lgp/file-writer';
```
"""

REQUIRE = re.compile("(var\s+|exports\.)([\w\d_]+)\s*=\s*require\s*\(([^\)]+)\)(\.([\w\d_]+))?\s*;?")

def require_rewrite( text ):
	res = []
	o   = 0
	for _ in REQUIRE.finditer(text):
		decl, name, module, __, symbol = _.groups()
		line = None
		if not symbol:
			line = "import * as {name} from {module};"
		elif name and symbol and symbol != name:
			line = "import {symbol} as {name} from {module};"
		else:
			raise Exception("Line: {0}, decl={1}, name={2}, module={3}, symbol={4}".format(_.group(), decl, name, module, symbol))
		res.append(text[o:_.start()])
		res.append(line.format(name=name,symbol=symbol,module=module))
		print ("- replaced", _.group(), "by", res[-1])
		o = _.end()
	res.append(text[o:])
	return "".join(res)

if __name__ == "__main__":
	for _ in sys.argv[1:]:
		print ("Rewriting file", _)
		with open(_, "r") as f:
			t = require_rewrite(f.read())
		with open(_, "w") as f:
			f.write(t)
# EOF
