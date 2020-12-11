document.getElementById('Signin').addEventListener('click',function(event){
    
    // fetching ids
    let name=document.getElementById('login__password__name');
    let password =document.getElementById('login__password__password');
    let btn=document.getElementById('login__button');
    let forgotPassword=document.getElementById('login__password__forgotPassword');
    // animation
    let line=document.getElementById('login__line');
    line.style.animation="lineMovingRight 0.3s ease-in-out 0s 1 alternate";
    line.style.animationFillMode="both";
    
    // changing color
    let Signup=document.getElementById('Signup');
    Signup.children[0].style.color="gray";
    event.target.style.color='black';
    
    // display
    name.style.display='flex';
    password.style.display='flex';
    btn.innerText='Sign In';
    forgotPassword.style.display="flex";

});


document.getElementById('Signup').addEventListener('click',function(event){
    
    // fetching ids
    let name=document.getElementById('login__password__name');
    let password =document.getElementById('login__password__password');
    let btn=document.getElementById('login__button');
    let forgotPassword=document.getElementById('login__password__forgotPassword');
    // animation
    let line=document.getElementById('login__line');
    line.style.animation="lineMovingLeft 0.3s ease-in 0s 1 alternate";
    line.style.animationFillMode="both";
    
    // changing color
    let Signup=document.getElementById('Signin');
    Signup.children[0].style.color="gray";
    event.target.style.color='black';
    
    // display
    name.style.display='none';
    password.style.display='none';
    btn.innerText='Sign Up';
    forgotPassword.style.display="none";

});

