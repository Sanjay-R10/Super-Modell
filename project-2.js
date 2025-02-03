// getting variables

let openbutten = document.getElementById("open-btn");
let modelContainer = document.getElementById("model-container");
let closebtn =  document.getElementById("close-btn");

//Event Listeners

openbutten.addEventListener("click",function(){
    modelContainer.style.display="block";
});

closebtn.addEventListener('click',function(){
    modelContainer.style.display='none';
});

window.addEventListener("click", function (e) {
        if (e.target !== modelContainer && e.target !== closebtn && e.target !== openbutten) {
            modelContainer.style.display = "none";
        }
    });
    