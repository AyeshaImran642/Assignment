let guestArr: string[] =["Ali", "Hania", "Minha"];
let canNotAttend: string = "Minha";

console.log(canNotAttend + " can not attend the dinner")

let newGuest: string = "Alishba";
guestArr [guestArr.indexOf(canNotAttend)] =newGuest;

console.log(guestArr);
guestArr.map((items) =>
  console.log(`Dear ${items}, you are invited to the dinner.`)
)
guestArr.map((items) =>
console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peoples.`)
)