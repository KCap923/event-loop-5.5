// Part 1 ********************************************************

let counter = 0;

function incrementForever() {
counter++
incrementForever()

}

try {
// incrementForever();
} catch(err) {
console.log(err)
console.log(counter)
}

// This function will take a number and increment counter to that number

function incrementTo(num) {
  if (num <= 0) return

if (num === counter) return // base case tells it to stop running

counter += 1
incrementTo(num)
}

try {
incrementTo(100)
console.log(counter);

} catch (err) {
  console.log(err);
}
//100

// Part 2 ****************************************************************

const factorial = (n) => {
  if (n === 0) return 1; 
  return n * factorial(n - 1);
}

const facto = (n, a = 1) => {
  if (n === 0) return a;
  return () => facto(n - 1, n * a);
}


const trampoline = (f, ...args) => {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
}
  return result;
}

console.log(trampoline(facto(10000)))

//Infinity