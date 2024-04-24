// Exercise 32: Checking Usernames
var current_users = ['Admin', 'Eric', 'Ahmed', 'Ali', 'Haris'];
var new_users = ['Admin', 'Ali', 'Fatima', 'Hamza', 'Hania'];
var _loop_1 = function (new_user) {
    var isDuplicate = current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); });
    if (isDuplicate) {
        console.log("Sorry, ".concat(new_user, " is already taken. Please choose a different username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
