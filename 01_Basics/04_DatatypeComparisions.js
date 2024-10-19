// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);     // true
// console.log("02" > 1);    // true

console.log(null > 0);     // false
console.log(null == 0);    // false
console.log(null >= 0);    // false
// The reason is that the Equality check(==) and Comparisions >=,>,<,<= works differently.
// Comparisions convert null to a number, treating it as 0.
// That's why ( null >= 0 ) is true and ( null > 0 ) is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (Strict check) It checks both data type and value.

console.log("2" === 2);