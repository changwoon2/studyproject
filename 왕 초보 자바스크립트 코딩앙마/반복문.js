for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

let i = 0;

console.log();

while (i < 10) {
  console.log(i);
  i++;
}

console.log();

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}
