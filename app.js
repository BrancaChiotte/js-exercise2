// 1 - Using the variables names1 and names2
var names1 = "Ana,Rita,Maria";
var names2 = "Nuno,Hugo";

// 1.1 - Convert each variable into array using the split operator
// 1.2 - Concatenate both arrays using spread operator
// 1.3 - Order that final array alphabetically

var names1 = names1.split(",");
var names2 = names2.split(",");
var namesSum = names1.concat(names2);
namesSum.sort();

// 2 – Using the final array in previous point and function makeData:
function makeData(city, country) {
  return `Hello my name is ${this.name}, I am ${this.age} and I live in ${city}, ${country}`;
}
// Call that function for each user in the names array.
// Don’t use the ‘for’ or ‘while’ methods for it.
// (Note: Define whatever variables you think you will need age,city and country values will be at your choice)

var age = [11, 36, 28, 17, 38];
var cities = ["Lisbon", "Porto", "Braga", "Coimbra", "Faro"];
var country = ["Portugal"];

arrInfo = [];
namesSum.forEach(function (name, i) {
  var x = {
    name: name,
    age: age[i],
  };
  var city = cities[Math.floor(Math.random() * cities.length)];
  var allInfo = makeData.call(x, city, country);
  arrInfo.push(allInfo);

});


// 3 - Change the function makeData and convert it into an ES6 arrow function

const makeDataEs6 = (city, country) => `Hello my name is ${name}, I am ${age} and I live in ${city}, ${country}`;


// 4 - Add the return sentence of the function, using the filter method, to two different arrays. One for adults (age>= 18) and other for kids (age<18)

var kids = arrInfo.filter((info) => {
  return info.match(/[0][0-9]| 1[0-7]/)
});

var adults = arrInfo.filter((info) => {
  console.log(info)
  return info.match(/ 1[8-9]|[2-9][0-9]/)
});


// 5 -Using the following HTML code insert those messages in the respective area. For displaying the messages you can use ul/li elements or div elements

// <div>
//  <div id="kids"></div>
//  <div id="adults"></div>
// </div>

function trying (x, arr) {
  // Create an unordered list
  var ul = document.createElement("ul");
  var li = "";
  x.appendChild(ul);
  arr.forEach(function(item) {
    // create a new list item
    var li = document.createElement('li');
    // append the text to the li
    li.textContent = item;
        // li.appendChild(document.createTextNode(item));
    // append the list item to the ul
    ul.appendChild(li);
 });
}
var divKids = document.getElementById('kids');
var divAdults = document.getElementById('adults');

trying(divKids, kids);
trying(divAdults, adults);
