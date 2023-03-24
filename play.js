// let name = 'sudeep';
// let age = 22;
// let hasHobbies = true;

// age = 30;

// function summariseUser(userName,userAge,userHasHobbies){
//     return ( 
//         'Name is ' + userName 
//         + ', Age is '+ userAge
//         + ' and the user has hobbies :' + userHasHobbies
//     )
// }
// console.log(summariseUser(name,age,hasHobbies));

// const productNum = (a,b)=> a*b;
// console.log(productNum(2,4));

// const Student = {

// 	name: "Sudeep",

// 	age: 22,




// 	subject:"maths"

// }

// console.log(typeOf(Student))

// class Student {
//     constructor(name,age,marks){
//         this.name = name,
//         this.age = age,
//         this.marks = marks
//     }

//     setPlacementAge(minAge){
//         return (minMarks)=>{
        
//             if (this.marks>=minMarks && this.age>=minAge){
//                 console.log(this.name + " is ready for current company");

//             }  else {
//                 console.log(this.name + " is not ready for current company");
//             }
//         }
//     }
// }

// const Yash = new Student("Yash",23,75);
// const vaibhav = new Student("Vaibhav" , 13, 36);

// vaibhav.setPlacementAge(18)(40);


// const array = ["apple","oranges","mango","lemon"];
// // for (let i=1;i<array.length;i++){
//     for (let j=i;j<array.length;j++){
//         console.log(array.map(fruit => {
//             return (`fruits ${[j]} ` + fruit);
//         }))
//     }
    
// }
    
// const newArray = {...array};
// console.log(newArray)

// const newArray = (...args)=>{
//     return args;
// };
// console.log(newArray(1,2,3,4,789,2,4,53,0))

// const obj = {
//     name:"sudeep",
//     age: 22,
//     sub:"maths"
// }
// const printName = ({name})=>{
//     console.log(name);
// }
// printName(obj);
// const {name,age} = obj;
// // console.log(name,age);

// console.log("a");
// console.log("b");
// const promise = new Promise((resolve,reject)=> {
//     setTimeout(()=> {
//         resolve("c");
//     },3000);
// });

// promise
//     .then((result)=>{
//     console.log(result);
//     })
//     .then(()=>{
//         console.log("d");
//     });

// console.log("e");

// console.log('a');
// console.log('b');
// Promise.resolve().then(()=>{
//     setTimeout(()=>{
//         console.log("c");
//     },3000)
//     })
//     .then(()=>{
//         setTimeout(()=>{
//             console.log("d")
//         },0);
//     })
//     .then(()=>{
//         console.log("e")
//     })

// // console.log("e")
// async function printSequence(){
//     console.log("a");
//     console.log("b");
//     await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("c");
//             console.log("c");
//         },3000)
//     })
//     await setTimeout(()=>{
//         console.log("d");
//     },0)
//     await setTimeout(()=>{
//         console.log("e");
//     },0)
    
//     }
// printSequence();