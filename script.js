var istatus = document.querySelector("h4");
var addFriend = document.querySelector(".add");
var remove = document.querySelector(".remove");


var empty = 0;
addFriend.addEventListener("click", function(){
        istatus.innerHTML = "Friend";
        istatus.style.color = "green"
})

remove.addEventListener("click", function(){
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red"
})

