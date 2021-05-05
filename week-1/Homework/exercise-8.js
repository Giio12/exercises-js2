/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

//YOUR CODE HERE

//*******FIRST TASK*******/

// function serch() {
//   mentors.forEach(mentor=>{
//     if(mentor.job.city==="Barcelona" && mentor.skills.includes('React')){
// console.log(`Hi, my name is ${mentor.firstName} ${mentor.lastName}. I work in Barcelona and i know React.`)
//     }
//   })
// }
// serch()

// //*******SECOND TASK*******/

// function setAttribute() {
//   mentors.forEach(mentor=>{
//     if(mentor.job.city==="Barcelona"){
//     mentor.class="Jun1"
//     mentor.skills.push("SQL")
//     }
//   })
// }
// setAttribute()
// console.log(mentors)//Se ve como se agregaron skills a los que viven en Barcelona y cambia class

//*******THIRD TASK*******/

// function addSkillMethod() {
//   mentors.forEach(mentor=>{
//     mentor.addSkill = function addSkills(skill) {
//       this.skills.push(...skill)//Utilizo 3 puntos para agregar varios skills en uno solo 
//     }
//   })
// }
// addSkillMethod()
// // mentors[0].addSkill(['Photoshop','Css'])
// console.log(mentors[0])// PARA COMPROBAR SI AGREGA EL SKILL 

// //*******FOURTH TASK*******/

// function addSk(mentors,newSkill){
//   mentors.forEach(mentor=>{
//   mentor.addSkill(newSkill)
//   })

// }
// addSk(mentors,['Ajedrez'])// El nuevo skill se agrega entrecorchetes porque utilice en el metodo un spread por si son varios skills
// console.log(mentors)

//*******FIFTH TASK*******/
// function removeSkill(skill) {
//   mentors.forEach(mentor=>{
//     if(mentor.skills.includes(skill)){
//       i=(mentor.skills.indexOf(skill))//Declaro i para tener un indice de donde se encuentra el skill y poder removerlo
//       mentor.skills.splice(i, 1); 
//     }
//   })
  
// }
// removeSkill('React')
// console.log(mentors)//PRUEBA

//*******SIXTH TASK*******/
// function mentorWithMoreSkills() {
//   let numSkills= []
//   mentors.forEach(mentor=>{
//     numSkills.push(mentor.skills.length)
//   })
//   const moreSkill= Math.max(...numSkills)
//   mentors.forEach(mentor=>{
//     if(mentor.skills.length===moreSkill){
//     console.log(`${mentor.firstName} is the mentor with more skills`)
//     }
//   })
// }
// mentorWithMoreSkills()

//*******SEVENTH TASK*******/

function addStudentLikes() {
  mentors.forEach(mentor=>{
    mentor.addStudentLike = function addLikes(like) {
      this.studentLikes+=like
    }
  })
}
addStudentLikes()
// mentors[0].addStudentLike(1)//AGREGA EL LIKE SOLO AL QUE SE INDICA
console.log(mentors)// PARA COMPROBAR SI AGREGA EL LIKE

//*******EIGHTH TASK*******/

function addStudentLik(mentors,like){
  mentors.forEach(mentor=>{
  mentor.addStudentLike(like)//LLAMA AL METODO FUNCION DE LA TAREA 7
  })

}
addStudentLik(mentors,2)//AGREGA DOS LIKES A TODOS LOS MENTORES
console.log(mentors)//PARA COMPROBAR SI AUMENTA




