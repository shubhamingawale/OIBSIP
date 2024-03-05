let logout = document.querySelector('[data-logout]');
logout.addEventListener('click',()=>{
    alert("Are you sure want to logout?");
    if(alert){
        window.location.href = "login.html";
    }
});