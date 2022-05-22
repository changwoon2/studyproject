var pattern = /a/;

console.log("abcdef".match(pattern));

console.log("bcdefg".match(pattern));

console.log("abcdef".replace(pattern, "A"));
