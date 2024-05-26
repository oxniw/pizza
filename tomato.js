let tomatocount = parseInt(localStorage.getItem("tomatoCount")) || 0;
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("tomato").addEventListener("click", function(){
        num--;
        tomatocount++;
        document.getElementById("number").textContent = num;
        localStorage.setItem("pizzaCount", num);
        localStorage.setItem("tomatoCount", tomatocount);
    });
});
