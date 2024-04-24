// let describe_city = (city: string, country: string = 'Pakistan') => {
//     console.log(`${city} is in ${country}.`);
// };
// describe_city('Karachi');
// describe_city('Tokyo', 'Japan');
// describe_city('Paris', 'France');
var describe_city = function (city, country) {
    console.log("".concat(city, " is in ").concat(country, "."));
};
describe_city('Karachi', 'pakistan');
describe_city('Tokyo', 'Japan');
describe_city('Paris', 'France');
