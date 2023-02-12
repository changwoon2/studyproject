const superman = {
  name: "clark",
  age: 30,
};
superman.hairColor = "black";
superman["hobby"] = "football";
// delete superman.age;
console.log(superman);
// console.log(superman["age"]);

console.log();

function makeObject(name, age) {
  return {
    name: name,
    age: age,
    hobby: "football",
  };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);
console.log("age" in Mike);
console.log("birthday" in Mike);

console.log();

function isAdult(user) {
  if (!("age" in user) || user.age < 20) {
    return false;
  }
  return true;
}

const like = {
  name: "like",
  age: 30,
};

const Jane = {
  name: "Jane",
};

console.log(isAdult(Jane));

const page = {
  name: "page",
  age: 30,
};

for (x in page) {
  console.log(page[x]);
}

console.log();

let boy = {
  name: "Mike",
  showName: function () {
    console.log(this.name);
  },
};

let man = boy;
boy = null;

man.showName();
