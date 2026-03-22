// 
let a = 10
console.log(a);

function factory() {

let balance = 1000
    return{
deposit: function(amount){
balance += amount
},

getBalance: function(){
return balance
}
    }
}

const user1 = factory()
user1.deposit(500)
console.log(user1.getBalance());





