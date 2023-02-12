function say(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}

say("mike");
say("tom");
say("body");

console.log();

let msg = "welcome";
function sayHello(name) {
  let msg = "Hello";
  console.log(msg + "" + name);
}

sayHello("Mike");
console.log(msg);

let name = "jack";

function jack(name) {
  console.log(name);
}

jack();
jack("jane");

function add(num1, num2) {
  return num1 + num2;
}

const result = add(2, 3);
console.log(result);
