// // const fs = require("fs")
// // fs.writeFileSync("hello.txt", "hello from nodejs")
// // var name = "max"
// // console.log(name)
// // const summarizeUser = (UserName, Userage, Userhobby) => {
// //     return ("Name is" +
// //         UserName +
// //         " age is" +
// //         Userage +
// //         "hobby is"
// //         + Userhobby)

// // }
// // console.log(summarizeUser(name, 22, "football"))

// // const add = (a, b) => {
// //     return a + b
// // }
// // console.log(add(1, 2))
// const person = {
//     name: "asif",
//     age: 29,
//     greet() {
//         console.log("hi i am " + this.name)
//     }
// }
// const printName = ({ name, age }) => {
//     console.log(name, age)

// }
// printName(person)
// const { name, age } = person
// console.log(name, age)
// // const copiedPerson = { ...person }
// // console.log(copiedPerson)
// // // console.log(person)
// const hobbies = ['sports', 'cooking']
// const [hobby1, hobby2] = hobbies
// console.log(hobby1, hobby2)
// // const coppiedArray = [...hobbies]
// // console.log(coppiedArray)
// // // for (let hobby of hobbies) {
// // //     console.log(hobby)
// // // }
// // // console.log(hobbies.map(hobby =>
// // //     "hobby: " + hobby
// // // ))
// // // console.log(hobbies)
// // const toArray = (...args) => {
// //     return args
// // }
// // console.log(toArray(1, 2, 3, 4))
const fetctData = () => {
    const promsie = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done!")

        }, 1500)
    })
    return promsie
}



setTimeout(() => {
    console.log('timeout')
    fetctData().then(text => {
        console.log(text)
    })

}, 2000)