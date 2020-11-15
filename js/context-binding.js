const obj = { x: 15 };

function first() {
  	return this.x; // 15
}

function second() {
    let firstFunc = first.bind(obj);
  	return firstFunc(); // Вернет undefined, а нужно 15
}