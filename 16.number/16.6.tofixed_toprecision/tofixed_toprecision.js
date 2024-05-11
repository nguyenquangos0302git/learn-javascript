// toFixed()
const n = 123.525;
n.toFixed(); // 124 as default value for arg is 0
n.toFixed(0); // 124
n.toFixed(1); // 123.5
n.toFixed(2); // 123.53
n.toFixed(3); // 123.525
n.toFixed(4); // 123.5250
n.toFixed(5); // 123.52500

// toPrecision()
const n = 123.525;
n.toPrecision(); // 123.525 similar to n.toString()
n.toString(); // 123.525
n.toPrecision(0); // error argument must be between 1 and 100
n.toPrecision(1); // 100
n.toPrecision(2); // 120
n.toPrecision(3); // 124
n.toPrecision(4); // 123.5
n.toPrecision(5); // 123.53
n.toPrecision(6); // 123.525
n.toPrecision(7); // 123.5250
n.toPrecision(8); // 123.52500
