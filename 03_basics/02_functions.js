function calculateCartPrice(val1, val2, ...num1){
return num1
}

// console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200, 400, 500, 1000, 2000));

const user = {
    username: "Divyanshu",
    Price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.Price}.`);
    
}

// handleObject(user)

handleObject(
    {
username: "Sameer",
Price: 2000000
}
)


const array = [1, 2, 3, 400, 50000]

function returnSecondValue(anyArray){
console.log(anyArray[4]);  // first method 

}
returnSecondValue(array)

function returnSecondValue1 (anyArray){
return anyArray[2]            
}

// console.log(returnSecondValue1(array));
console.log(returnSecondValue1([1, 2, 3, 400, 5000]));




