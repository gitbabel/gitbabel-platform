const unified = require('unified')
//import {unified} from 'unified'
const markdown = require('remark-parse')
//import markdown from 'remark-parse'
const frontmatter = require('remark-frontmatter')
//import remarkFrontmatter from 'remark-frontmatter'


function process (markdownBuffer) {
  const tree = unified().use(markdown).use(frontmatter, ['yaml','toml']).parse(markdownBuffer)

  console.log(tree)
  return tree
}

module.exports = process
