let days = ["mon", "tue", "wed"];

days[1] = "목요일";
days.push("thu");
days.unshift("sun");
for (let day of days) {
  console.log(day);
}
