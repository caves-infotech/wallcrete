let x = "applppa";
let b = "applppa";
let y = 121;
let a = 121;
let n = x.toString();
let g = "";
let cal;
let storeCal = 0;

n = 10;

// for (let i = 0; i < n; i++) {
//   cal = y % 2;
//   storeCal = storeCal * 10 + cal;
//   y = parseInt(y / 10);
//   console.log(cal, storeCal, y);
// }

while (x > 0) {
  cal = y % 10;
  storeCal = storeCal * 10 + cal;
  y = parseInt(y / 10);
  console.log(storeCal);
}

if (b == storeCal) {
  console.log("this is palindrome");
} else {
  console.log("this is not palindrom");
}

console.log(g);
