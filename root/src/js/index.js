import 'ress';
import 'core-js/stable';
import '../scss/style.scss';

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
