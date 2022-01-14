const unified = require('unified')
const markdown = require('remark-parse')
// const frontmatter = require('remark-frontmatter')
const remarkHint = require('remark-hint')

function process (markdownBuffer) {
  const tree = unified().use(markdown).use(remarkHint).parse(markdownBuffer)

  // console.log(tree)
  return tree
}

module.exports = process
