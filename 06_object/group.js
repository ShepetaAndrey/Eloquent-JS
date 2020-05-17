class Group {
	constructor() {
		this.group = [];
		this[Symbol.iterator] = function() {
			return new GroupIterator(this);
		}
	}

	add(item) {
		if(this.group.includes(item)) {
			return;
		} else {
			this.group.push(item);
		}
	}

	delete(item) {
		this.group = this.group.filter(x => x != item);
	}

	has(item) {
		return this.group.includes(item);
	}

	static from(array) {
		let group = new Group();
		for(let elem of array) {
			group.add(elem);
		}
		return group;
	}
}

class GroupIterator {
	constructor(group) {
		this.index = 0;
		this.group = group.group;
	}

	next() {
		if(this.index < this.group.length) {
			return { value: this.group[this.index++], done: false };
		} else {
			return { done: true };
		}
	}
}

let g = Group.from([1,2,4,5,6,4,5,7,6,3,3,3,3,3,3,3,3,3])

for(let a of g) console.log(a)