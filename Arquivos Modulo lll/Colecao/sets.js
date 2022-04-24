function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

const arr = [13, 80, 140, 35, 56, 478, 35];

console.log(uniqueElements(arr));