document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.querySelector(".loading-screen");
    const container = document.querySelector(".container");
    const animatedTexts = document.querySelectorAll(".animated-text");
    const noButton = document.getElementById("no-button");
    const convinceButton = document.getElementById("convince-btn");
    const yesButton = document.getElementById("yes-button");
    const dumboPic = document.getElementById("dumbo-pic");
    const secretMessage = document.getElementById("secret-message");

    // Show content after loading screen
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        container.classList.remove("hidden");
    }, 3000);

    // Change text animation
    setTimeout(() => {
        animatedTexts[0].classList.add("hidden");
        animatedTexts[1].classList.remove("hidden");
    }, 5000);

    // No button confetti explosion
    noButton.addEventListener("click", function () {
        alert("Confetti Explosion! 🎉 But seriously, think again!");
    });

    // Convince Me button runs away
    convinceButton.style.position = "absolute";
    convinceButton.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - convinceButton.offsetWidth;
        const maxY = window.innerHeight - convinceButton.offsetHeight;
        convinceButton.style.left = Math.random() * maxX + "px";
        convinceButton.style.top = Math.random() * maxY + "px";
    });

    // Yes button confirms the date
    yesButton.addEventListener("click", function () {
        alert("Yay! 🎉 Be ready on Monday 2nd half! ❤️");
    });

    // Clicking on Dumbo's picture reveals the secret message
    dumboPic.addEventListener("click", function () {
        secretMessage.classList.remove("hidden");
        showHearts();
    });

    // Function to drop hearts when Dumbo's picture is clicked
    function showHearts() {
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.style.position = "absolute";
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.top = Math.random() * window.innerHeight + "px";
            heart.style.fontSize = "30px";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }
    }
});
