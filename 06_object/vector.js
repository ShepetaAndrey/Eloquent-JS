class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	plus(v) {
		return new Vec(this.x + v.x, this.y + v.y);
	}

	minus(v) {
		return new Vec(this.x - v.x, this.y - v.y);
	}

	get length() {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}
}

const a = new Vec(3, 4);
console.log(a.length);
console.log(a.plus(new Vec(3, 4)))
console.log(a.minus(new Vec(3, 4)))