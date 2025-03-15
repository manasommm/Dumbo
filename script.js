document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("response").innerText = "Yay! 🎉 I’ll ping you soon with the details!";
});
document.getElementById("convinceBtn").addEventListener("click", function() {
    document.getElementById("response").innerText = "Okay, here’s the logic: If (happiness == ‘saying yes’), then { let’s go! } 😜";
});

// Time Counter (Nerdy touch)
const startTime = new Date();
startTime.setDate(startTime.getDate() - 15); // 15 days ago
function updateCounter() {
    const now = new Date();
    const diff = now - startTime;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById("time-counter").innerText = `${days} days, ${hours} hours`;
}
updateCounter();
