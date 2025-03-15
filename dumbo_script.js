document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.querySelector(".loading-screen");
    const container = document.querySelector(".container");
    const animatedTexts = document.querySelectorAll(".animated-text");
    const noButton = document.getElementById("no-button");
    const convinceButton = document.getElementById("convince-btn");
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
    
    yesButton.addEventListener("click", function () {
        alert("Confetti Explosion! 🎉 But seriously, think again!");
    });
    
   yesButton.addEventListener("mouseover", function () {
    yesButton.style.position = "absolute";
    yesButton.style.left = Math.random() * 90 + "%";
    yesButton.style.top = Math.random() * 90 + "%";
});

    
    dumboPic.addEventListener("click", function () {
        secretMessage.classList.remove("hidden");
    });
});

