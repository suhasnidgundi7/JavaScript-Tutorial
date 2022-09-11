// Practical No 2:-Develop JavaScript to use decision making and looping statements

const cars = ["Tata", "Volvo", "BMW"];

// For Loop
document.write("<strong>For Loop!</strong>");
for (let i = 0; i < cars.length; i++) {
  document.write("<br>");
  document.write(cars[i]);
}

document.write("<br><br>");

// While Loop
document.write("<strong>While Loop!</strong>");

let i = 0;
while (i < cars.length) {
  document.write("<br>");
  document.write(cars[i]);
  i++;
}

document.write("<br><br>");

// Do-While Loop
document.write("<strong>Do-While Loop!</strong>");

let j = 0;

do {
  document.write("<br>");
  document.write(cars[j]);
  j++;
} while (i < cars.length);

document.write("<br><br>");

// For Each Loop
document.write("<strong>For Each Loop!</strong>");

cars.forEach((element) => {
  document.write("<br>");
  document.write(element);
});

document.write("<br><br>");

// Map Method
document.write("<strong>Map Function!</strong>");

cars.map((item, index) => {
  document.write("<br>");
  document.write(item);
});


document.write("<br><br>");

// For Of Loop
document.write("<strong>For Of Loop!</strong>");

for (let item of cars){
    document.write("<br>");
    document.write(item);
}

document.write("<br><br>");

// For in Loop
document.write("<strong>For In Loop!</strong>");

for (let index in cars){
    document.write("<br>");
    document.write(cars[index]);
}
