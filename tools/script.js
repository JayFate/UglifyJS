var fs = require("fs");
var path = require('path')
var describe_ast = require('./node').describe_ast

exports.FILES = [
  require.resolve("../lib/utils.js"),
  require.resolve("../lib/ast.js"),
  require.resolve("../lib/transform.js"),
  require.resolve("../lib/parse.js"),
  require.resolve("../lib/scope.js"),
  require.resolve("../lib/compress.js"),
  require.resolve("../lib/output.js"),
  require.resolve("../lib/sourcemap.js"),
  require.resolve("../lib/mozilla-ast.js"),
  require.resolve("../lib/propmangle.js"),
  require.resolve("../lib/minify.js"),
  require.resolve("./exports.js"),
];

var code = exports.FILES.map(function (file) {
  return fs.readFileSync(file, "utf8");
});
code.push("exports.describe_ast = " + describe_ast.toString());

fs.writeFileSync(path.resolve(__dirname, './output.js'), `exports = \n${JSON.stringify(code.join("\n\n"), null, 2)}`, { encoding: 'utf-8' })
