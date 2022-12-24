//Question 1. Write one example explaining how you can write a callback function

// const Name = (name)=> {
//     console.log(`Hello, ${name}`);
// }

// const EnterName = (name, callback)=> {
//     callback(name)
// }

// EnterName("Virat", Name)

// Question 2. Wrtie a Callback function to print numbers from 1 to 7,
// in which 1 should be printed after 1 sec, 2 should be printed after 2 sec
// 3 should be printed after 3 sec and so on.

// const printNumbers = ()=> {
//     console.log("Numbers");
//     setTimeout( ()=> {
//         console.log(1);
//         setTimeout( ()=> {
//             console.log(2);
//             setTimeout( ()=> {
//                 console.log(3);
//                 setTimeout(  ()=> {
//                     console.log(4);
//                     setTimeout( ()=> {
//                         console.log(5);
//                         setTimeout( ()=> {
//                             console.log(6);
//                             setTimeout( ()=> {
//                                 console.log(7);
//                                 console.log("Till 7 printed");
//                             },7000 )
//                         }, 6000)
//                     },5000 )
//                 }, 4000)
//             },3000 )
//         },2000 )
//     },1000 )
// }
// printNumbers();

// //Question 3. Explain Callback Hell
// //callback hell is that situation, where callbacks are situated within other callbacks several levels deep,
// //eventually making it difficult to maintain and understand the code and finally it is difficult to move forward with the code.
// //The structure of callback hell looks like a pyramid/arrow shape.
// //We use Promises to avois callback hell

// //Question 4. Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 after 2 sec and so on

// const onetoSeven = (time, num)=> {
//     return new Promise( (resolve, reject)=> {
//         if(num) {
//             setTimeout( ()=>{
//                 resolve( num() )
//             }, time )
//         } else {
//             reject( "Some error has been Accured")
//         }
//     })
// }
// onetoSeven(0, ()=> { return console.log("Numbers") } )
// .then( ()=> {
//     return onetoSeven(1000, ()=> { return console.log(1) })
// } )
// .then ( ()=> {
//      return onetoSeven(2000, ()=> { console.log(2) }  )
// } )
// .then( ()=> {
//     return onetoSeven(3000, ()=> {console.log(3) } )
// } )
// .then( ()=> {
//     return onetoSeven(4000, ()=> {console.log(4) } )
// } )
// .then( ()=> {
//     return onetoSeven(5000, ()=> {console.log(5) } )
// } )
// .then( ()=> {
//     return onetoSeven(6000, ()=> {console.log(6) } )
// } )
// .then( ()=> {
//     return onetoSeven(7000, ()=> {console.log(7) } )
// } ).catch( ()=> {
//     console.log("An error has been Accured");
// } ).finally( ()=> {
//     console.log("Complited");
// } )


// //Question 5. Create a promise function accpeting an argument. if yes is spassed the function should 
// //go to resolved state and print Promise Resolved. But if nothing is passed then it should go to
// //reject state and catch the error and print Promise Rejected

// const EvenOdd = (num)=> {
//     return new Promise(  (resolve, reject) => {
//         if( num % 2 === 0 ) {
//             resolve()
//         } else {
//             reject()
//         }
//     })
// }
// EvenOdd(2)
// .then( ()=> {
//     console.log("Number is Even");
// } )
// .catch( ()=> {
//     console.log("Number is Odd");
// } )
// .finally( ()=> {
//     console.log("Promise is Complited");
// } )


// //Question 6 - Create examples to explain callback hell function

// const getEmpId = () => {
//     setTimeout(() =>{
//         console.log("Finding the ID's");
//          let id = [1, 2, 3, 4, 5];
//           console.log(id);

//           setTimeout(() =>{
//             let empDetails = {
//             fName: "Priyanka",
//             lName: "Sharma",
//             age: 22,
//             };
//              console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age} `);

//            setTimeout(() =>{
//             (empDetails.gender = 'Female'),
//         console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age} and gender is ${empDetails.gender}`);
//         }, 2000);
//     }, 2000);
// },2000);
// }

// getEmpId();

// //Question 7 - Create examples to explain async and await functions

// async function tryingPromises (){
//     const response = await fetch("https://api.github.com/users")
//     const users = await response.json();
//     return users;
// }

//    let data = tryingPromises() 
//    console.log("data recieved", data)
//    data.then((res) =>{
//    console.log(res);
// })

//Question 8 - Create examples to explain promise.all functions

// const promise1 = Promise.resolve(5)
// const promise2 = 60;
// const promise3 = new Promise( (res, rej)=> {
//     setTimeout(res, 1000, " Hey" )
// })
// Promise.all([promise1, promise2, promise3]).then( (val)=> {
//     console.log(val);
// } )
