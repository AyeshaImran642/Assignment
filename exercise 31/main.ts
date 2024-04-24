// Exercise 31: Hello Admin

let usernames: string[] = ['Admin', 'Eric', 'Alize', 'Alina', 'Hania'];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log(`Hello ${username}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Remove all usernames from the array
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}