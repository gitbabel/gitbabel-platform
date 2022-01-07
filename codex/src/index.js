const unified = require('unified')
const markdown = require('remark-parse')
//const frontmatter = require('remark-frontmatter')


function process (markdownBuffer) {
  const tree = unified().use(markdown).parse(markdownBuffer)

  //console.log(tree)
  return tree
}

module.exports = process
