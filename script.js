const display = document.querySelector(".password");
const button = document.querySelector(".reveal");

button.addEventListener("click",password);

function password(){
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    const stringLength = 7;
    let result='';
    
    for ( var i = 0; i < stringLength; i++ ) {
        let randomNum= Math.floor(Math.random() * chars.length);
        result += chars.substring(randomNum,randomNum+1);
    }
    display.innerHTML='!' + result;
    button.style.display='none';
}