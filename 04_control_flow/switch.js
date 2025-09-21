// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// jab  kisi se match nahi hota to default value li jaati hai 

const month = 4

switch (month) {
    case 1:
        console.log("January");
        
        break;

    case 2:
        console.log("February");
        
        break;

    case 3:
        console.log("March");
        
        break;

    case 4:
        console.log("April");
        
        break;
        

    default:
        console.log("default case match");
        
        break;
}

let age = 5

switch (age) {
    case 4:
        console.log("Four");
        
        break;

    case 5:
        console.log("Five");
        
        // break;      // (break hatane se main value print to hone ke baad uske baad ka sab print ho jata hai except default value)

    case 6:
        console.log("Six");
        
        break;

    default:
        console.log("Default Case Matched");
        
        break;
}

const namE = "abhi"

switch (namE) {
    case "mani":
        console.log("Manish");
        
        break;
    case "abhi":
        console.log("Abhishek");
        
        break;

    default:
        console.log("Default value matched");
        
        break;
}