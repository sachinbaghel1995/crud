let buttons = document.querySelector('.btn')
let formed= document.querySelector('#my-form')
let inputName=document.querySelector('#name')
let inputEmail=document.querySelector('#email')
let userList = document.querySelector('#users')
buttons.addEventListener('click',onSubmit)
formed.addEventListener('click',save)
userList.addEventListener('click', removeItem)
function onSubmit(e)
{
  e.preventDefault()
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(`${inputName.value}: ${inputEmail.value}`))
 userList.appendChild(li)

 var deletebutton = document.createElement('btn')
 deletebutton.className='delete'
 deletebutton.appendChild(document.createTextNode('Delete'))
 li.appendChild(deletebutton)
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
  }
  function removeItem(e) {

    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement
            userList.removeChild(li)
        }
    }
  }