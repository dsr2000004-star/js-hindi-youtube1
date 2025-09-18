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
    // console.log(this.username);
    console.log(this);
    
}
chai()
