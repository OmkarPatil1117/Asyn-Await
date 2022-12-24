//Question 1. Write one example explaining how you can write a callback function

const greeting = (name) =>{
    console.log(`Hello, my name is ${name}`);
}

function enterName(nameoffriend, callback) {
    console.log("Enter your name");
    callback(nameoffriend);
}

enterName("kartik", greeting)

//Question 2. Wrtie a Callback function to print numbers from 1 to 7,
//in which 1 should be printed after 1 sec, 2 should be printed after 2 sec
// 3 should be printed after 3 sec and so on.


const printNumbers = () => {
    console.log("Numbers");
    setTimeout(() =>{
        console.log("1");
        setTimeout(() =>{
            console.log("2");
            setTimeout(() =>{
                console.log("3");
                setTimeout(() =>{
                    console.log("4");
                    setTimeout(() =>{
                        console.log("5");
                        setTimeout(() =>{
                            console.log("6");
                            setTimeout(() =>{
                                console.log("7");
                            }, 7000)
                        }, 6000)
                    }, 5000)
                }, 4000)
            }, 3000)
        }, 2000)
    }, 1000)
}

//Question 3. Explain Callback Hell
//callback hell is that situation, where callbacks are situated within other callbacks several levels deep,
//eventually making it difficult to maintain and understand the code and finally it is difficult to move forward with the code.
//The structure of callback hell looks like a pyramid/arrow shape.
//We use Promises to avois callback hells

//Question 4. Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 after 2 sec and so on

const OneToSeven = (time, num) => {
    return new Promise( (resolve, reject) =>{
        if(num){
            setTimeout(() =>{
                resolve( num())
            }, time)
        }
        else{
            reject( console.log("error"))
        }
    })
}

OneToSeven ( 0, () => console.log("Numbers"))
    .then(() =>{
        return OneToSeven(1000,() => console.log("1"))
    })
    .then(() =>{
        return OneToSeven(2000,() => console.log("2"))
    })
    .then(() =>{
        return OneToSeven(3000,() => console.log("3"))
    })
    .then(() =>{
        return OneToSeven(4000,() => console.log("4"))
    })
    .then(() =>{
        return OneToSeven(5000,() => console.log("5"))
    })
    .then(() =>{
        return OneToSeven(6000,() => console.log("6"))
    })
    .then(() =>{
        return OneToSeven(7000,() => console.log("7"))
    })
    .catch(() =>{
        return ("error in printing the numbers")
    })
    .finally(() =>{
        return ("Promise is ended")
    })


//Question 5. Create a promise function accpeting an argument. if yes is spassed the function should 
//go to resolved state and print Promise Resolved. But if nothing is passed then it should go to
//reject state and catch the error and print Promise Rejected

const Argument = (num) => {
    return new Promise( (resolve, reject) =>{
        if(num % 2 == 0){
            resolve(console.log(`Success, the number ${num} is even`))
            }
        else{
            reject( console.log(" Oops ! Not an Even Number"));
        }
    })
}

Argument(7)
.then(() =>{
      console.log("Even Number");
})

.catch(() =>{
    console.log("Oops");
})

.finally(() =>{
    console.log("End of Promise");
})


//Question 6 - Create examples to explain callback hell function

const getEmpId = () => {
    setTimeout(() =>{
        console.log("Finding the ID's");
         let id = [1, 2, 3, 4, 5];
          console.log(id);

          setTimeout(() =>{
            let empDetails = {
            fName: "Priyanka",
            lName: "Sharma",
            age: 22,
            };
             console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age} `);

           setTimeout(() =>{
            (empDetails.gender = 'Female'),
        console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age} and gender is ${empDetails.gender}`);
        }, 2000);
    }, 2000);
},2000);
}

getEmpId();

//Question 7 - Create examples to explain async and await functions

async function tryingPromises (){
    console.log("I am inside the async function"); // after line 125, this is printed as the function is called
    const response = await fetch("https://api.github.com/users") //4th  line inititated but not finished because javascript has to wait so it leaves the async function and goes to line 126
    console.log("before the response is fetched"); // after line 127
    const users = await response.json();
    console.log("Users resolved");

    return users;
}

   console.log("This is printed first");
   let data = tryingPromises() // functions tryingPromises is called
   console.log("After calling the function"); // after line 116, this is printed
   console.log("data recieved", data); // again function tryingPromises is called
   data.then((res) =>{
   console.log(res);
})

//Question 8 - Create examples to explain promise.all functions

const promise1 = Promise.resolve(3);
const promise2 = 40;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Hey There');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});