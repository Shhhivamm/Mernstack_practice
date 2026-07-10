const accountId = 2337055 // Const is constant value that cannot be changed
let accountEmail = "shivamsharma@gmail.com" // new way
var accountPassword = "12345" // old way
accountCity = "Delhi"

// accountId = 2 this will cause error cause const value cannot be modified

accountEmail = "Ashu@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"
let accountstate;

/*
Prefer not to use var
because of the issue  in block and functional scope
 */

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountstate])