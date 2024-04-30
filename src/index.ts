// let text: string = 'peepeepoopoo';
// text = text + 'hello world';
// // console.log(text);

// function sum(number1: number, number2: number): number {
//   const result = number1 + number2;
//   return result;
// }
// const result = sum(69, 420);
// console.log(result);

// - Write a new function called `greeter`
// - The function should take in 3 parameters: `firstName`, which is of type `string`, `lastName`, which is also a `string`, and `ageNum` which is of type `number`
// - The function should define a variable `name` which combines `firstName` and `lastName`
// - The function should define another variable `age` which combines the string `"Age: "` with the `ageNum` parameter
// - Finally, the function should return a string `"Hello, "` combined with the previously defined `name` variable and also the previously defined `age` variable

// function capitalize(text: string): string {
//   const firstletter = text.charAt(0).toUpperCase();
//   const rest = text.slice(1);
//   return firstletter + rest;
// }

// function greeter(firstName: string, lastName: string, ageNum: number): string {
//   const name = capitalize(firstName) + ' ' + capitalize(lastName);
//   const age = 'Age: ' + ageNum;
//   return 'Hello ' + name + ' ' + age;
// }

// console.log(greeter('jeffrey', 'dahmer', 60));

// const list = [];
// list.push('hello world', 'peepeepoopoo', 'sans', 'urg');

// for (const item of list) {
//   console.log(`now looping over ${item}`);
//   if (item.length < 5) {
//     list[list.indexOf(item)] = capitalize(item);
//   }
// }

// console.log(list);

// function add(x: number, y: number): number {
//   return x + y;
// }

// const add = (x: number, y: number): number => x + y;

// const text = `Aoe's profile: ${Aoe.playerUrl}`; // "Aoe's profile: " + Aoe.playerUrl
// console.log(text);