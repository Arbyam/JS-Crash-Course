// BUZZ QUESTION ASKED IN INTERVIEWS




// for (let i = 1; i<=20; i++){
//     if( i % 3 ===0){
//         console.log(i + " -> Frontend")
//     }

//     else if(i % 5 ===0){
//         console.log(i + " -> Simplified")
//     }
//     else if(i % 3 ===0 && i % 5 ===0){
//         console.log(i + " -> Frontend Simplified")
//     }
//     else{
//         console.log(i)
//     }
// }

// QUESTION 2
// // Print out every character from the string:
// Frontend Simplified


// let str = "Frontend Simplified"

// for(let i=0; i < str.length; i++){
//     console.log(str[i])
// }





// Funnction Definition


// function welcomePersontoFES(firstName, lastName ){
//     console.log("WElcome to Frontend Simplified " + firstName, lastName)
// }


// // CAlling the function
// welcomePersontoFES('bobb ', "doe")
// welcomePersontoFES('dimitr' , 'hoie')


// function sumOfTwoNumbers(num1, num2){
//     return num1+num2
// }

// console.log(sumOfTwoNumbers(10,10))


// Create a function that coverts Celsius to Fahrenheit


// function convertCelsiusToFahrenheit(celsius){
//     let fahrenheit = celsius * 1.8 + 32
//     return fahrenheit
// }

// console.log(convertCelsiusToFahrenheit(30))
// console.log(convertCelsiusToFahrenheit(0))



//2ND WAY OF DEFINING A FUNCTION 


// const convertCelsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// }
// console.log(convertCelsiusToFahrenheit(0))


//ARRAYS

// let arr = [20,30,40,50,100]
// //first elemt of aray:

// console.log(arr[0])


// //last element of array:

// console.log(arr[arr.length -1])

// // adding an element to the array

// arr.push(200)


// let newArr=arr.filter((element) => {
// if(element<50){

//     return true;
// }
// })

// console.log(newArr)



// ** FILTER OUT ALL THE 'FAIL' elements in an array

// let grades = ['A+', 'A', 'FAIL']


// //Done in 1 line array method which accepts a callback

// let newGrades = grades.filter(element =>{ return element !=='FAIL'})
// console.log(newGrades)




// ** QUESTION 4 **


// let grades = ['A+', 'A', 'FAIL']
// goodGrades = []

// for( let i = 0; i<grades.length; i++){
//     if(grades[i] != 'FAIL'){
//         goodGrades.push(grades[i])
//     }
// }
// console.log(goodGrades)


// let arr = [1,4,9,16]

// let newArr = arr.map((element) => {
//     console.log(element)
//     return undefined
// })

// console.log(newArr)

// ** QUESTION 5
// let dollars = [1, 5, 10, 3]

// let cents = dollars.map((element) => {
//     return element * 100
// })


// console.log(cents)


// **QUESTION 5 USING FOR LOOP

// let dollars = [1 ,5, 10, 3]

// cents = []

// for(let i = 0; i<dollars.length; i++){
//     cents.push(dollars[i] *100)
// }

// console.log(cents)



//OBJECTS
// let users = [{
//     username: 'David',
//     email: 'baz@gmail.com',
//     password: 'test123',
//     subscriptionStatus: 'VIP',
//     discordId: 'DavidBragg#0001',
//     lessonsCompleted: [0,1],
// },
// {
//     username: 'JIMMY',
//     email: 'JIMMY@gmail.com',
//     password: 'bobby123',

//     subscriptionStatus: 'VIP',
//     discordId: 'DavidBragg#0001',
//     lessonsCompleted: [0,1,2,3]
    
// },


//]

// function login(email, password){
//     for(let i = 0; i< users.length; i++){
//     if(users[i].email ===email){
//         console.log(users[i])

//         if(users[i].password ===password){
//             console.log('Log user in -- details correct')
//         }
//         else{
//             console.log('password is incorrect')
//         }
//         return;

//     }
// }

// console.log('Could not find an email that matches')
// }


// login('baz@gmail.com', 'test123')


// function register( username,email,password,subscriptionStatus,discordId,lessonsCompleted){
//     let user = {
//         username: username,
//         email: email,
//         password:password,
//         subscriptionStatus: subscriptionStatus,
//         discordId: discordId,
//         lessonsCompleted: lessonsCompleted,
//     }

//     users.push(user)

// }

// register({
//     username:'dog', email:'dog@gmail', password:'password1234', subscriptionStatus:'VIP', discordId:'dog#111',lessonsCompleted: [1,2,3]
// })
// console.log(users)

//first way of accessing an element


function toggleDarkMode(){
document.querySelector('body').classList.toggle("dark-theme")
}