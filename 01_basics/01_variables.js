const accountId = 144553
let accountEmail = "lalitjoshihld9@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;
// accountId = 2  //not allowed
accountEmail = "jhh@hj.com"
accountPassword = "645"
accountCity = "delhi"

/*
Prefer not to use var
because of issue in bock scope and functional scope.
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])