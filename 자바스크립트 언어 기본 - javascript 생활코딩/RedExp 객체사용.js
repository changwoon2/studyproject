var pattern = /a/;

console.log(pattern.exec("bcdefg"));

console.log(pattern.exec("abcdef"));

console.log(pattern.test("abcdef"));

console.log(pattern.test("bcdefg"));
