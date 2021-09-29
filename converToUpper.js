
// const allCaps = (arg) => arg.map((item) => item.toUpperCase());


const allCaps = (arg) => arg.map((item) => `<button>${item}</button>`);

console.log(allCaps(["cat","bat","rat","dog"]));