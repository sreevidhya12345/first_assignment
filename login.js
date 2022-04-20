let email=document.getElementById('typeEmailX');
let password=document.getElementById('typePasswordX');

form.addEventListener('submit',function(event){
  if(!validate())
  event.preventDefault();
})

function validate()
{
  let regexp= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
  if(email.value.trim()==""||password.value.trim()=="")
  {
      alert("Fields cannot be empty");
      return false;
      
  }
  
  if(regexp.test(email.value))
  {
      error.innerHTML="valid";
      error.style.color="green";
      return true;

  }
  else{
      error.innerHTML="invalid email id";
      error.style.color="red";
      return false;
  }
  

}




