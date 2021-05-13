/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  
  people.forEach(persona=>{
  content.innerHTML+=`<h1>${persona.name}</h1>`
  content.innerHTML+=`<h2>${persona.job}</h2>`
})

}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  content.innerHTML+=`<ul>`
  shopping.forEach(lista=>{
    content.innerHTML+=`<li>${lista}</li>`
  })
  content.innerHTML+=`</ul>`
    
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/

function exerciseThree(books) {
  content.innerHTML+=`<h1>Books</h1>`
  let books1=""
    books.forEach((book,i)=>{
    const backgroundColor = book.alreadyRead ? 'green' : 'red';
    books1+=`<li style="background-color:${backgroundColor};
    margin:100px;
    padding:15px">
    <p>${book.title} - ${book.author} </p>
    <img src=${images[i]}>
    </li>`
  })
  content.innerHTML+=`<ul>${books1} </ul>`
  
}
    let img1= "https://m.media-amazon.com/images/I/416Hql52NCL.jpg width=300px"
    let img2= "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg width=300px"
    let img3= "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg width=300px"
    const images=[img1,img2,img3]

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
