const accountID = 144553
let accountEmail = "dsr2000004@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountID = 2 // not allowed
console.log(accountID);
accountEmail = "hchh@gmail.com"
accountPassword = "2121221212"
accountCity = "Bengaluru"

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/