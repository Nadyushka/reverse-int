module.exports = function reverse(a) {
	let b = Math.abs(a);
	let arr = String(b).split('');
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		result.unshift(arr[i]);
	}
	return Number(result.join(''));
}
