let guestArr: string[] = ["Ali", "Hania", "Minha"];
let canNotAttend: string = "Minha";
let newGuest: string = "Alishba";

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;

console.log(guestArr);
guestArr.map((items) =>
  console.log(
    `Dear ${items}, I found a bigger dinner table so i have invited more people.`
  )
);

let guestBeg: string = "Ahmed";
guestArr.unshift(guestBeg);
console.log(guestArr);

let middleGuest: string = "Imran";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);

guestArr.push("Rayan");
console.log(guestArr);

guestArr.map((items) =>
  console.log(
    `Dear ${items}, You are invited to the dinner with more people present.`
  )
);