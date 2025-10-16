// 
function sayAdd(num1, num2) {
    console.log(num1 + num2);
    
}

sayAdd(3, 5)

for (let i = 0; i <= 10; i++) {
    console.log(i);

    for (let j = 0; j <= 10; j++) {
        // console.log(j);
        
       console.log(i + '+' + j + "=" + (i+j) );
       
        
    }
    
    
}


function meraNaam(a, b) {

    
    console.log("d");
    
    return  a + b ;
     
    
}

// const result = meraNaam(3, 10)

// console.log("Hamara Result aaya hai: ", result );

// let obj1 = {
//     name: "Divyanshu", 
//     class: "IV", 
// }

// let obj2 = {
//     goal: "model",
//     age: 21,  

// }

// function meraFunction(obj) {
//     console.log(` value of name is ${obj.name} `);
    
// }

// meraFunction(obj1)


function one (){
    const username = "Divyanshu"


    function two() {
        const website = "Youtube"
        console.log(username);
        
    }

    // console.log(website);

    // two()
    
    console.log(username);
    
}

one()


// myZepto(5, 8)
// const myZepto = function(num1, num2){
//     console.log(num1 + num2);
// }


const obj1 = {
    kaam: "freeLancing",
    dhan: 20000,

    meraFunct: function(){
        console.log(this);

        
        
        
      return   `kaam ki naam hai: ${this.kaam}`
     
    }
}

console.log(obj1.meraFunct());
obj1.kaam = "kuchnahi"
console.log(obj1.meraFunct());





const myFun = (num1, num2) => { return num1*num2}

console.log(myFun(2, 6));
