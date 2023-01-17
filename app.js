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
    var fieldValue = document.getElementById('name').value;
    localStorage.setItem('name', fieldValue)
    var fieldValue2 = document.getElementById('email').value;
    localStorage.setItem('email', fieldValue2)
}