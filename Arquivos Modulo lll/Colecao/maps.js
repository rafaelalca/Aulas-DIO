const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Maria', 'USER');
userRoles.set('Ze', 'ADMIN');
userRoles.set('Oliveira', 'ADMIN');
userRoles.set('Cassio', 'USER');
userRoles.set('Guilherme', 'USER');
userRoles.set('Aquiles', 'ADMIN');
userRoles.set('Antonieta', 'ADMIN');

console.log(getAdmins(userRoles));