const user = {
username: "Divyanshu", 
price: 999, 

welcomeMessage: function (){
    console.log(`${this.username}, welcome to website`);
console.log(this); 
    
}


}
user.welcomeMessage()
user.username = "Akash"
user.welcomeMessage()
console.log(this);




const chai = () => {
    let username = "Divyanshu"
    // console.log(this.username);   // ye this.username wala concept sirf tab hi kaam kar raha hai jab hum objext ke andar function likhte hain aur aise normal function let karne me this.username method kaam nahi karega  
    console.log(this);
    
}
chai()

const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(3, 11));


const userName = () => ({username: "divyanshu"})
console.log(userName());

