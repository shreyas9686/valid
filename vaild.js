document.addEventListener('DOMContentLoaded',()=>{
const form=document.getElementById('myform');
const email=document.getElementById('email');
const username=document.getElementById('username');
const emailFeedback=document.getElementById('emailFeedback');
const passwordFeedback=document.getElementById('passwordFeedback');
const usernameFeedback=document.getElementById('usernameFeedback');
email.addEventListener('input',()=>{
    if(email.validity.vauild){
        emailFeedback.textContent='Valid Email';
        emailFeedback.classname='valid';
    }else{
        emailFeedback.textContent='Plaese eneter the valid email address';
        emailFeedback.textContent='error';
    }
});
username.addEventListener('input',()=>{
    if(passwordFeedback.ariaValueMax.length>=3){
        usernameFeedback.textContent='Username looks goods';
        usernameFeedback.textContent='valid';
    }else{
        
    }
})


})