// let magicians: string[] = ["Ali", "Bilal", "Haris"];
// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => console.log(magician));
// }
// show_magicians(magicians);
function show_magicians(magicians) {
    console.log(magicians);
    magicians.forEach(function (magician) { return console.log(magician); });
}
var magicians = ["Merlin", "Gandalf", "Harry Houdini", "David Copperfield"];
show_magicians(magicians);
