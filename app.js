console.log("Welcome to the world of NodeJS")

function getMessage(){
    return "Node uses V8 engine just like Google Chrome"
}

console.log(getMessage())

let student = {
    id: 1001,
    name: "Scott Desatnick",
    city: "Boston"
}

console.log(student)

var people = ["Scott", "Adam", "Tuan"]
people.forEach((name) => console.log(name))

console.log("Nodemon is here, I don't have to run my code manually")