
// require our `process` function we want to test
const process = require('../../src')

test('Run remark process for markdown string "# Hi" and verify the mdast has a type heading [h1]', () => {
  // run our function with some sample markdown text
  const resultToTest = process('# HI')

  // aseertions
  expect(resultToTest).not.toBeNull()
  expect(resultToTest.children[0].type).toBe('heading')
})

test('Run remark process for markdown string "just text should be paragraph" and verify the mdast has a type paragraph [p]', () => {
  // run our function with some sample markdown text
  const resultToTest = process('listelement')

  // aseertions
  expect(resultToTest.children[0].type).toBe('paragraph')
})

test('Run remark process for markdown string "> that is some blockquote" and verify the mdast has a type blockquote [blockquote]', () => {
  // run our function with some sample markdown text
  const resultToTest = process('>sometexth blahb habksdf   and oh  BlockQuote BAM')

  // aseertions
  expect(resultToTest.children[0].type).toBe('blockquote')
})

test('Run remark process for markdown string "> that is some blockquote" and verify the mdast has a type blockquote [blockquote]', () => {
  // run our function with some sample markdown text
  const resultToTest = process('?>sometexth blahb habksdf   and oh  BlockQuote BAM')
  console.log(resultToTest.children)
  // aseertions
  expect(resultToTest.children[0].type).toBe('blockquote')
})
