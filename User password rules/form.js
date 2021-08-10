/
 // To validate the name field using the REGEX expression
 
 const nameText=document.querySelector('#name');
 const nameTextError=document.querySelector('.name-error')
 nameText.addEventListener('input',function(){
     let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$')
     console.log(nameText);
     if(nameRegex.test(nameText.value))
         nameTextError.textContent=' ';
     else
         nameTextError.textContent='Name invalid'
 });

 
 //To validate the email field using the REGEX expression
        
 const email = document.querySelector('#email');
        const emailError = document.querySelector('.email-error');
        email.addEventListener('input', function () {
            let emailPattern = RegExp('^([a-zA-Z0-9]{1,}[.]?[a-zA-Z0-9]{1,}?[@][a-zA-Z]{1,}([.][a-zA-Z]{2,4}){1,2})$');
            if (emailPattern.test(email.value))
                emailError.textContent = '';
            else
                emailError.textContent = "Enter Valid Email Address";
        });

// Mobile number validation
const number = document.querySelector('#tel');
const numberError = document.querySelector('.tel-error');
number.addEventListener('input', function () {
    let numberRegex = RegExp('^[1-9]{2}\\s{0,1}[1-9]{1}[0-9]{9}$');
    if (numberRegex.test(number.value))
        numberError.textContent = ' ';
    else
        numberError.textContent = 'Invalid Number!';
}); 

//UC5
// rule 1-password validation minimum 8 characters
//all rules passed
//rule 2-at least 1 upper case
//rule 3-at least 1 numberic number
//rule 4-exactly 1 special character
const pwd = document.querySelector('#pwd');
const passworderror = document.querySelector('.pwd-error');
pwd.addEventListener('input', function () {
    let passwordpattern = RegExp('^[a-z A-Z 0-9 @#%!&*_]{8,}$');
    if (passwordpattern.test(pwd.value))
        passworderror.textContent = ' ';
    else
        passworderror.textContent = 'Invalid Password!';
});
        
