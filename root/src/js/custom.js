import '../scss/custom.scss';

class Test {
	constructor(name) {
		this.name = name;
	}

	logger() {
		console.log('Hello', this.name);
	}
}

const test = new Test('world');

test.logger();
