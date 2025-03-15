document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.querySelector(".loading-screen");
    const container = document.querySelector(".container");
    const animatedTexts = document.querySelectorAll(".animated-text");
    const noButton = document.getElementById("no-button");
    const convinceButton = document.getElementById("convince-btn");
    const yesButton = document.getElementById("yes-button");
    const dumboPic = document.getElementById("dumbo-pic");
    const secretMessage = document.getElementById("secret-message");
    
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        container.classList.remove("hidden");
    }, 3000);
    
    setTimeout(() => {
        animatedTexts[0].classList.add("hidden");
        animatedTexts[1].classList.remove("hidden");
    }, 5000);
    
    noButton.addEventListener("click", function () {
        alert("Confetti Explosion! 🎉 But seriously, think again!");
    });
    
    convinceButton.addEventListener("mouseover", function () {
        convinceButton.style.position = "absolute";
        convinceButton.style.left = Math.random() * 90 + "%";
        convinceButton.style.top = Math.random() * 90 + "%";
    });
    
    yesButton.addEventListener("click", function () {
        alert("Yay! 🎉 Be ready on Monday 2nd half! ❤️");
    });
    
    dumboPic.addEventListener("click", function () {
        secretMessage.classList.remove("hidden");
    });
});

