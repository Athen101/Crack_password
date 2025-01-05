function checkpassword(){
    var password=document.getElementById('password').value;
    var correctpassword="Tech at wOrK";
    if(password===correctpassword){
        document.getElementById('result').innerHTML="Correct! You've cracked the password";
        setTimeout(function(){
            window.location.href="Final.html";
        },2000);
    }else{
        document.getElementById('result').innerHTML="Incorrect. Try again!";
        alert("Wrong password!Please try again :)");
    }
}

document.getElementById('togglePassword').addEventListener('click',function(){
    var passwordField=document.getElementById('password');
    var icon=this;
    if(passwordField.type==='password'){
        passwordField.type='text';
        icon.textContent='👁️‍🗨️';
    
    }else{
        passwordField.type='password';
        icon.textContent='👁️‍🗨️';
    }
});
