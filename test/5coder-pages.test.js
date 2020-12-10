const test = require('ava')
const 5CoderPages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => 5CoderPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(5CoderPages('w'), 'w@zce.me')
  t.is(5CoderPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
