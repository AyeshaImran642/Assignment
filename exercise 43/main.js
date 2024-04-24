function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Harry Houdini", "Harry Houdini", "David Blaine"];
var copy_magician_names = magician_names.slice();
var copy_great_magicians = make_great(copy_magician_names);
console.log(" Original Array \n");
show_magicians(magician_names);
console.log("\n Copied Array \n");
show_magicians(copy_great_magicians);
