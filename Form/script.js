const form = document.querySelector("#form")
const uname = document.querySelector("#username")
const email = document.querySelector("#email")
const pass = document.querySelector("#password")
const cpass = document.querySelector("#cpassword")

form.addEventListener('submit',(e)=>{
    if(!validateInput()){
        e.preventDefault()
    }
})

function validateInput(){
    const unamevalue = uname.value.trim()
    const emailvalue = email.value.trim()
    const passval = pass.value.trim()
    const cpassval = cpass.value.trim()
    let success = true
    if(unamevalue===''){
        success = false;
        setFailure(uname, "Name is required")
    }
    else{
        setSuccess(uname)
    }

    if(emailvalue===''){
        success = false;
        setFailure(email,"Email is required")
    }
    else if(!validateEmail(emailvalue)){
        success = false;
        setFailure(email, "Enter a valid email")
    }
    else{
        setSuccess(email)
    }

    if(passval === ''){
        success = false;
        setFailure(pass, "Password is required")
    }
    else if(passval.length<8){
        success = false;
        setFailure(pass, "Password must be atleast 8 characters")
    }
    else{
        setSuccess(pass)
    }

    if(cpassval===''){
        success = false;
        setFailure(cpass,"Confirm your password")
    }
    else if(cpassval !== passval){
        success = false;
        setFailure(cpass, "Password doesn't match")
    }
    else{
        setSuccess(cpass)
    }
    return success
}
 
//to print the error msg in each input box
function setSuccess(element){
    const parentinput = element.parentElement
    const error = parentinput.querySelector(".error")
    error.innerText = ''
    parentinput.classList.add('success')
    parentinput.classList.remove('failure')
}

function setFailure(element, message){
    const parentinput = element.parentElement
    const error = parentinput.querySelector(".error")
    error.innerText = message
    parentinput.classList.add('failure')
    parentinput.classList.remove('success')
}

function validateEmail(email){
    return (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)
}