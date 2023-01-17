let buttons = document.querySelector('.btn')
let formed = document.querySelector('#my-form')
let inputName = document.querySelector('#name')
let inputEmail = document.querySelector('#email')
let userList = document.querySelector('#users')
buttons.addEventListener('click', onSubmit)
formed.addEventListener('click', save)
userList.addEventListener('click', removeItem)
userList.addEventListener('click', editItem)
function onSubmit(e) {
  e.preventDefault()
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(`${inputName.value}: ${inputEmail.value}`))
  userList.appendChild(li)

  var deletebutton = document.createElement('button')
  deletebutton.className = 'delete'
  deletebutton.appendChild(document.createTextNode('Delete'))
  li.appendChild(deletebutton)
  userList.appendChild(li)

  var editbutton = document.createElement('button')
  editbutton.className = 'edit'
  editbutton.type = 'button'
  editbutton.appendChild(document.createTextNode('Edit'))
  li.appendChild(editbutton)
  userList.appendChild(li)
}
function save(e) {

  // to save as object in local storage 
  var username = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  let obj = {
    username,
    email
  }
  localStorage.setItem(email, JSON.stringify(obj))
}
function removeItem(e) {

  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement
      userList.removeChild(li)
    }
  }
}
function editItem(e) {

  if (e.target.classList.contains('edit')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement
      userList.removeChild(li)
      document.getElementById('name').value = obj.username
      document.getElementById('email').value = obj.email
    }
  }
}