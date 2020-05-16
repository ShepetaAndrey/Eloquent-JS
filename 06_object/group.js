class Group {
	constructor() {
		this.group = [];
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

const g = new Group();

g.add(1);
g.add(2);
g.add(1);
console.log(g);
console.log(g.has(1));
console.log(g.has(5));
g.delete(5);
console.log(g);
g.delete(2);
console.log(g);

let g2 = Group.from([1,2,4,5,6,4,5,7,6,3,3,3,3,3,3,3,3,3])
console.log(g2)
console.log(g2.has(9))