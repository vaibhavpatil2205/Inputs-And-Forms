
 // validate the name field using the REGEX expression
 
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

 
 // validate the email field using the REGEX expression
        
 const email = document.querySelector('#email');
        const emailError = document.querySelector('.email-error');
        email.addEventListener('input', function () {
            let emailPattern = RegExp('^([a-zA-Z0-9]{1,}[.]?[a-zA-Z0-9]{1,}?[@][a-zA-Z]{1,}([.][a-zA-Z]{2,4}){1,2})$');
            if (emailPattern.test(email.value))
                emailError.textContent = '';
            else
                emailError.textContent = "Enter Valid Email Address";
        });


//Mobile number validation
const number = document.querySelector('#tel');
const numberError = document.querySelector('.tel-error');
number.addEventListener('input', function () {
    let numberRegex = RegExp('^[1-9]{2}\\s{0,1}[1-9]{1}[0-9]{9}$');
    if (numberRegex.test(number.value))
        numberError.textContent = ' ';
    else
        numberError.textContent = 'Invalid Number!';
});  