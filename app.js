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

  axios.post('https://crudcrud.com/api/4148077331d14cf2bc8a972173a14901/appointmentapp',obj)
  .then((response)=>{
    console.log(response)
  })
  .catch((err)=>{
    console.log(err)
  })
  // localStorage.setItem(email, JSON.stringify(obj))
}
function removeItem(e) {

  if (e.target.classList.contains('delete')) {
    e.preventDefault()
    if (confirm('Are you sure?')) {
      var username1 = document.getElementById('name').value;
      var email1 = document.getElementById('email').value;
      var li = e.target.parentElement
      userList.removeChild(li)
      let obj = {
        username1,
        email1
      }
      localStorage.removeItem(email1,JSON.stringify(obj))
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