let value = 8;
let result = 1;
for (let i = value; i > 0; i = i - 1) {
  for (let j = value; j > i; j = j - 1){
    if (j > 5) {
      result = result * i;
    } else {
      result = result * j;
    }
  }
}
console.log(result);
