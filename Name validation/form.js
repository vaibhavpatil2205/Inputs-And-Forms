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