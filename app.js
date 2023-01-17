let buttons = document.querySelector('.btn')
let formed= document.querySelector('#my-form')
let inputName=document.querySelector('#name')
let inputEmail=document.querySelector('#email')
let userList = document.querySelector('#users')
buttons.addEventListener('click',onSubmit)
formed.addEventListener('click',save)
function onSubmit(e)
{
  e.preventDefault()
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(`${inputName.value}: ${inputEmail.value}`))
 userList.appendChild(li)


  
}
function save(e) {

    // to save as object in local storage 
    var username = document.getElementById('name').value;
    // localStorage.setItem('name',username)
    var email = document.getElementById('email').value;
    // localStorage.setItem('email',email)

    let obj = {
       username,
       email
    }
    
    localStorage.setItem('userdetails',JSON.stringify(obj))

    
    
    // to save as string in local Storage
    // // var fieldValue = document.getElementById('name').value;
    // // localStorage.setItem('name',fieldValue)
    // // var fieldValue2 = document.getElementById('email').value;
    // // localStorage.setItem('email',fieldValue2)


}
