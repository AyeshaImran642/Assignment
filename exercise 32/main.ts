// Exercise 32: Checking Usernames

let current_users: string[] = ['Admin', 'Eric', 'Ahmed', 'Ali', 'Haris'];
let new_users: string[] = ['Admin', 'Ali', 'Fatima', 'Hamza', 'Hania'];

for (let new_user of new_users) {
    let isDuplicate = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());

    if (isDuplicate) {
        console.log(`Sorry, ${new_user} is already taken. Please choose a different username.`);
    } else {
        console.log(`${new_user} is available.`);
    }
}
