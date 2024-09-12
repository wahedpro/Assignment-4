// Problem 1
// function calculateTax(income, expenses) {
//     if(income<0 || expenses<0 || income<expenses){
//         return "Invalid Input";
//     }
//     return (income-expenses)*.20;
// }

// Problem 2
// function sendNotification(email) {
//     if(email.indexOf("@")<0){
//         return "Invalid Email";
//     }
//     let [userName, domainName] = email.split('@');
//     return userName + " sent you an email from " +domainName;
// }

// console.log(sendNotification("zihad@gmail.com"))
// console.log(sendNotification("farhan34@yahoo.com"))
// console.log(sendNotification("nadim.naem5@outlook.com"))
// console.log(sendNotification("fahim234.hotmail.com"))
// console.log(sendNotification("sadia8icloud.com"))




// Problem 3
// function checkDigitsInName(name) {
//     if (typeof name !== 'string') {
//         return "Invalid Input";
//     }
//     for (let i = 0; i <name.length; i++) {
//         if (name[i] >= '0' && name[i] <= '9') {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(checkDigitsInName("Raj123"))
// console.log(checkDigitsInName("n9ayeem"))
// console.log(checkDigitsInName("e1mu3"))
// console.log(checkDigitsInName("Suman"))
// console.log(checkDigitsInName("Name2024"))
// console.log(checkDigitsInName("!@#"))
// console.log(checkDigitsInName(["Raj"]))

// Problem 4
// function calculateFinalScore(obj) {
//     if(typeof obj !== 'object'){
//         return "Invalid Input";
//     }
//     let finalScore = obj.testScore + obj.schoolGrade;
//     if (obj.isFFamily) {
//         finalScore += 20;
//     }
//     return finalScore >= 80;
// }

// const studentInfo = {
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: true,
// };
// const studentInfo1 = {
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: false,
// };
// const studentInfo2 = {
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFamily: true,
// };
// console.log(calculateFinalScore(studentInfo));
// console.log(calculateFinalScore(studentInfo1));
// console.log(calculateFinalScore("hello"));
// console.log(calculateFinalScore(studentInfo2));


// Problem 5
// function  waitingTime(waitingTimes  , serialNumber) {
//     if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
//         return "Invalid Input";
//     }
//     let sum=0;
//     for(let i=0; i<waitingTimes.length; i++){
//         sum+=waitingTimes[i];
//     }
//     const averageTime= Math.round(sum/waitingTimes.length);
//     const remainingPeople = serialNumber - waitingTimes.length-1;
//     if (remainingPeople <= 0) {
//         return 0;
//     }
//     const waitingTime = remainingPeople * averageTime;
//     return waitingTime;
// }

// console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10))
// console.log(waitingTime([13, 2], 6))
// console.log(waitingTime([13, 2, 6, 7, 10], 6))
// console.log(waitingTime([6], 4))
// console.log(waitingTime(7 , 10))
// console.log(waitingTime("[6,2]", 9))
// console.log(waitingTime([7, 8, 3, 4, 5], "9"))