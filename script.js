const chota =  document.getElementById("chota-div");
const button = document.getElementById("btn");
const changeButton = document.getElementById("toggleTheme")
const passw = document.getElementById("pas-num")
const main =  document.getElementById("main-box" )
let length = 10;
button.addEventListener("click",function(){
    function string(length) {
        return Math.random().toString(20) .substring(2, length);
    }
    chota.innerText = string(length);
    
})
const toggleButton = document.getElementById("toggleTheme");


toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    chota.style.backgroundColor="white";
    passw.style.color="black";
    


   
    let isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
});



if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}
