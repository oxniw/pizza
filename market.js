document.addEventListener("DOMContentLoaded", function() {
    const marketButton = document.getElementById("marketButton");
    const marketGui = document.getElementById("marketGui");
    const closeButton = document.getElementById("closeButton");

    marketButton.addEventListener("click", function() {
        marketGui.classList.toggle("visible");
    });

    closeButton.addEventListener("click", function() {
        marketGui.classList.remove("visible");
    });
});
