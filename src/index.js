import isObject from './isObject'

const hasOwn = Object.prototype.hasOwnProperty

const classNames = obj => {
	if (!isObject(obj)) return ''

	if (0 === Object.keys(obj).length) return ''

	const classes = []

	for (const prop in obj) {
		if (hasOwn.call(obj, prop) && obj[prop]) {
			classes.push(prop)
		}
	}

	return classes.join(' ')
}

export default classNames
