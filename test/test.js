const classNames = require('../dist/easyClassNames.cjs.js')

const test = require('tape')

test('not an object', assert => {
	assert.equal(classNames('hi'), '', 'it should return empty string')

	assert.end()
})

test('object has no keys', assert => {
	assert.equal(classNames({}), '', 'it should return empty string')
	assert.end()
})

test('object with keys', assert => {
	assert.equal(
		classNames({ foo: true, moo: false }),
		'foo',
		'it should return the keys with true value'
	)
	assert.end()
})
