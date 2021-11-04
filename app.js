console.log("Hello World!");

var number_of_rooms = 3;
var square_feet = 1525;
var number_of_baths = 2.5;
var basement_finished = true;
var address = "123 Fake Street";
var value = 400000;

console.log("This is the house we have for sale");
console.log("Number of rooms:" + number_of_rooms);
console.log("Number of baths:" + number_of_baths);
console.log("Square Feet:" + square_feet);
console.log("Basement Finished:" + basement_finished);
console.log("Address:" + address);
console.log("Value:" + value);

value = 450000;
console.log("New asking price:" + value);

console.log(typeof(value));
console.log(typeof(address));

var house_one_number_of_rooms = 1;
var house_one_square_feet = 800;
var house_one_number_of_baths = 1;
var house_one_basement_finished = true;
var house_one_address = "123 Test Dr";
var house_one_value = 100000;

var house_two_number_of_rooms = 2;
var house_two_square_feet = 1200;
var house_two_number_of_baths = 2;
var house_two_basement_finished = true;
var house_two_address = "1234 Test Dr";
var house_two_value = 200000;

console.log("This is the house one we have for sale");
console.log("Number of rooms:" + house_one_number_of_rooms);
console.log("Square Feet:" + house_one_square_feet);
console.log("Number of baths:" + house_one_number_of_baths);
console.log("Basement finished:" + house_one_basement_finished);
console.log("Address:" + house_one_address);
console.log("Value:" + house_one_value);

var userAge = "21";
var username = "awesomeUser";

if(userAge >= 17 && username === "awesomeUser") {
    console.log("The user is at least 17 and is awesome!");
}else if(userAge < 17 && username === "awesomeUser") {
    console.log("The user is under 17 and is awesome!")
}else if(userAge >= 17 && username !== "awesomeUser") {
    console.log("The user is at least 17 and is not awesome")
}else if(userAge < 17 && username !== "awesomeUser") {    
     console.log("The user is under 17 and is not awesome")
} else {
    console.log("Something is wrong with the user");
}

var age = 19;
var is_subscribed = "true";

if(age < 18 && is_subscribed !=="true") {
    console.log("The user is younger than 18 and not subscribed");
}else if(age >= 18 && is_subscribed !== "true") {
    console.log("The user is 18 or older and not subscribed")
}else if(age < 18 && is_subscribed === "true") {
    console.log("The user is younger than 18 and is subscribed")
}else if(age >= 18 && is_subscribed === "true") {
    console.log("The user is 18 or older and is subscribed");
}
