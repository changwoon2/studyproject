var li = ["a", "b", "c", "d", "e"];
li.push("y");
console.log(li);

var li = ["a", "b", "c", "d", "e"];
li = li.concat(["f", "g"]);
console.log(li);

var li = ["a", "b", "c", "d", "e"];
li.unshift("z");
console.log(li);

var li = ["a", "b", "c", "d", "e"];
li.splice(4, 0, "D");
console.log(li);
