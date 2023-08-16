const clickMe = document.getElementById("clickMe");
const navBar = document.getElementsByClassName("navBar")[0];
const dashboardEnableButton = document.getElementById("dashboardEnableButton");
const dashboard = document.getElementsByClassName("dashboard")[0];


clickMe.addEventListener("click", function(){
    navBar.classList.toggle("navShow");
});


dashboardEnableButton.addEventListener("click", function(e){
    dashboard.className = "dashboard styling";
})

dashboard.addEventListener("click", function(){
    dashboard.className = "dashboard";
})