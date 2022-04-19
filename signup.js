const phoneno=document.getElementById("phno");
const email=document.getElementById("InputEmail");
const password=document.getElementById("Password");
const pconfirm=document.getElementById("PasswordConfirm");
// const form=document.getElementById("form");
form.addEventListener('submit',function(event){
    if(!validate())
    event.preventDefault();
})

    function validate()
    {
        // var num=/^[0-9]$/;
        // var num=/^\d{10}$/;
        var regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var emailexp=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
        if(phoneno.value.trim()==""|| email.value.trim()==""|| password.value.trim()==""|| pconfirm.value.trim()=="")
        {
            alert("Field cannot be empty");
             return false;
        }
            
        if(!regexp.test(phoneno.value))
        {
            alert("Phone number not valid");
            return false;            
        }
            
        if(!emailexp.test(email.value))
        {
            error.innerHTML="Invalid email id";
            error.style.color="red";
            return false;
        }
        if(password.value.trim()!=pconfirm.value.trim())
        {
            alert("Password does not match");
            return false;
        }
        else
        {
            return true;
        }
        

    }



 