//                      Head Tail Game

// let player1 = prompt("Enter Player Name");
// let player2 = prompt("Enter Player Name");

// let toss = Math.random() *2;
// let change = Math.floor(toss)

// if(change  == 0){
//         document.write(`${player1} You have won the toss and ${change}`)
// }else(
//     document.write(`${player2} You have won the toss and ${change}`)
// )
// ====================================================================================================

//                      Age Calculator

// let today = new Date();

// let mydate = new Date("22 january 1999");

// let diff = today.getTime() - mydate.getTime();

// let day = diff /(1000 * 60 * 60 * 24)
// let month = diff /(1000 * 60 * 60 * 24 * 30)
// console.log(Math.round(day));
// console.log(Math.round(month));

// ====================================================================================================

//                      Age Calculator

let randomvalues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklpmnopqrdtuvwxyz1234567890!@#$%^&*()?";

let password = "";

for(let i = 0; i <12; i++){
    let  randomnumber = Math.floor(Math.random() * randomvalues.length)
    password += randomvalues[randomnumber]
}
console.log(password)

// ====================================================================================================

