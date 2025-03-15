document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 2000);

    let animatedText = document.getElementById("animated-text");
    setTimeout(() => {
        animatedText.textContent = "Come on, you know I'm your favorite idiot!";
    }, 3000);

    let noButton = document.getElementById("no-button");
    noButton.addEventListener("mouseover", function() {
        noButton.style.position = "absolute";
        noButton.style.top = Math.random() * window.innerHeight + "px";
        noButton.style.left = Math.random() * window.innerWidth + "px";
    });

    let yesButton = document.getElementById("yes-button");
    yesButton.addEventListener("click", function() {
        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.top = "50%";
        confetti.style.left = "50%";
        confetti.style.fontSize = "50px";
        document.body.appendChild(confetti);
        setTimeout(() => { confetti.remove(); }, 1000);
    });

    let secretMessage = document.getElementById("secret-message");
    secretMessage.addEventListener("click", function() {
        alert("Surprise! You're the cutest Dumbo ever! 🐵💕");
    });
});
