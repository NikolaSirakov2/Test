let masiv = [5, 2, 3];

function errase(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.pop();
  }
  return arr;
}

errase(masiv);

console.log(masiv);