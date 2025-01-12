document.getElementById("login").addEventListener("click" ,function(){
    const elRegex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const elError =document.getElementById("Error");

const elInput =document.getElementById("email");


if(!elRegex.test(elInput.value)){
    elError.classList.remove("d-none")
return;
}
else{
    elError.classList.add("d-none")
}
 const username = elInput.value.split("@")[0];

 localStorage.setItem("username", username)
window.location= "index1.html";
});


