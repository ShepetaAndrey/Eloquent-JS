const map = { value: '5', fingers: 20, hasOwnProperty: true };

let watcher = (map, value) => {
	console.log(Object.prototype.hasOwnProperty.call(map, value))
}

watcher(map, 'value') //true
watcher(map, 'fingers') //true
watcher(map, 'hasOwnProperty') //true
watcher(map, 'hair') //false