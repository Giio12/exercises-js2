///*****************## Part 1*************
//**********BOTON AZUL
function buttonBlue(event){
    event.preventDefault()
    
    const jumb= document.querySelector('.jumbotron')
    jumb.style.backgroundColor ='#588fbd'
    const button1= document.querySelector('a[class="btn btn-primary btn-lrg"]')//una clase dentro de un atributo
    button1.style.backgroundColor ='ffa500'
    const button2= document.querySelector('a[class="btn btn-secondary btn-lrg"]')
    button2.style.backgroundColor ='black'
    button2.style.color ='white'
   
}
const blueButton= document.getElementById('blueBtn')
blueButton.addEventListener('click',buttonBlue)

//***********BOTON NARANJA******** */

function buttonOrange(event){
    event.preventDefault()
    
    const jumb= document.querySelector('.jumbotron')
    jumb.style.backgroundColor ='#f0ad4e'
    const button1= document.querySelector('a[class="btn btn-primary btn-lrg"]')//una clase dentro de un atributo
    button1.style.backgroundColor ='#5751fd'
    const button2= document.querySelector('a[class="btn btn-secondary btn-lrg"]')
    button2.style.backgroundColor ='#31b0d5'
    button2.style.color ='white'
   
}
const orangeButton = document.getElementById('orangeBtn')
orangeButton.addEventListener('click',buttonOrange)

//***********BOTON VERDE******** */

function buttonGreen(event){
    event.preventDefault()
    
    // const jumb= document.querySelector('.jumbotron')//Otra opcion que es válida
    const jumb= document.getElementsByClassName('jumbotron')
    jumb[0].style.backgroundColor ='#87ca8a'
    const button1= document.querySelector('a[class="btn btn-primary btn-lrg"]')//una clase dentro de un atributo
    button1.style.backgroundColor ='black'
    const button2= document.querySelector('a[class="btn btn-secondary btn-lrg"]')
    button2.style.backgroundColor ='#8c9c08'
    button2.style.color ='white'
   
}
const greenButton = document.getElementById('greenBtn')
greenButton.addEventListener('click',buttonGreen)


///*****************## Part 2*****************************
let email= document.getElementById('exampleInputEmail1')
let valid= /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ //PARA LA VERIFICACION DE LA ARROBA Y EL .COM
let nombre= document.getElementById('example-text-input')
let texto= document.getElementById('exampleTextarea')

function validForm(event) {
    event.preventDefault()
       //***********PRIMERA VALIDACION "EMAIL"//************/
        if(email.value.length<=0 ){
            email.style.borderColor ='red'
            invalid
            alert("Ingrese correo electronico")
          }else  if (!valid.test(email.value)){
            email.style.borderColor ='red'
            alert("La direcció de email es invalida")
        //***********SEGUNDA VALIDACION "NOMBRE"//************/
          }else if(nombre.value.length<=0 ){
            nombre.style.borderColor ='red'
            alert("Ingrese Nombre Completo")
        //***********TERCERA VALIDACION "TEXTO"//************/
          }else if(texto.value.length<=0 ){
                texto.style.borderColor ='red'
                alert("Ingrese Texto")
            
          }else{
              email.style.borderColor ="rgba(0,0,0,.15)"//Para que regrese al color de antes
              nombre.style.borderColor ="rgba(0,0,0,.15)"
              texto.style.borderColor ="rgba(0,0,0,.15)"
              alert("Gracias Por Rellenar el Formulario")
              email.value=("")
              nombre.value=("")
              texto.value=("") 
          }
    
    }

const submitButton = document.querySelector('button[class="btn btn-primary"]')//Seleccion del boton con un type 
submitButton.addEventListener("click",validForm)