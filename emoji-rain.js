function createRain() {
    const heart = document.createElement
    ("div");
    rain.classList.add("heart");

    rain.style.left = Math.random() * 100 + "vw";

    rain.style.animationDuration = Math.random() * 2 + 3 + "s";

    rain.innerText ='❤️';  

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createrain,300);
