 function makeSandwich(...items: string[]) {
    console.log(`Making a sandwich with the following items: ${items.join(' , ')}`)
}
 //Calling the function with different numbers of arguments
 makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
 makeSandwich("Chicken", "Mustard");
 makeSandwich( "Avocado", "Mayo", "Onion");


