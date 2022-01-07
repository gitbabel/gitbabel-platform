
// require our `process` function we want to test
const process = require('../../src')

test('Run remark process for markdown string "# Hi" and verify the mdast has a type heading', () => {
  // run our function with some sample markdown text
  const resultToTest = process('# HI')

  // aseertions
  expect(resultToTest).not.toBeNull()
  expect(resultToTest.children[0].type).toBe('heading')
})

test('Run remark process for markdown string "just text should be paragraph" and verify the mdast has a type paragraph', () => {
  // run our function with some sample markdown text
  const resultToTest = process('listelement')

  // aseertions
  expect(resultToTest.children[0].type).toBe('paragraph')
})
