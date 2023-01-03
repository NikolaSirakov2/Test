let masiv = [1, 2, 3];

function errase(arr) {
    for(let i = 0; i < arr.length; i++){
        arr.shift()
    }

    console.log(arr);

   

    return arr;
}

errase(masiv);

console.log(masiv);