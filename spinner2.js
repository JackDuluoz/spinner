
const spinSymbols = "|/-\\|/-\\|";
let delay = 100;

const spinner = function(symbols) {
  for (let symbol of symbols) {
    setTimeout(() => {
      process.stdout.write(`\r${symbol}   `);
    }, delay);
    delay = delay + 300;
  }
};

spinner(spinSymbols);

// setTimeout(() => {
//   process.stdout.write('\r|   ')
// }, 100)

// setTimeout(() => {
//   process.stdout.write('\r/   ')
// }, 400)

// setTimeout(() => {
//   process.stdout.write('\r-   ')
// }, 700)

// setTimeout(() => {
//   process.stdout.write('\r\\   ')
// }, 1000)

// setTimeout(() => {
//   process.stdout.write('\r|   ')
// }, 1300)

// setTimeout(() => {
//   process.stdout.write('\r/   ')
// }, 1600)

// setTimeout(() => {
//   process.stdout.write('\r-   ')
// }, 1900)

// setTimeout(() => {
//   process.stdout.write('\r\\   ')
// }, 2200)

// setTimeout(() => {
//   process.stdout.write('\r|   ')
// }, 2500)