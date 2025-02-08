function openBox() {
    const lid = document.querySelector('.box-lid');
    const chocolates = document.getElementById('chocolates');
    const message = document.getElementById('message');
    const music = document.getElementById('music');
    
    // Open the box
    lid.classList.add('open');
    
    // Show chocolates after delay
    setTimeout(() => {
        chocolates.style.opacity = '1';
        createHeartsConfetti();
        music.play();
    }, 800);

    // Animate message letters
    setTimeout(() => {
        message.style.opacity = '1';
        Array.from(message.children).forEach((span, index) => {
            setTimeout(() => {
                span.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }, 1500);
}

function createHeartsConfetti() {
    const container = document.getElementById('hearts');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.left = ${Math.random() * 100}%;
        heart.style.animationDelay = ${Math.random() * 2}s;
        heart.style.fontSize = ${Math.random() * 20 + 10}px;
        container.appendChild(heart);
    }
}

// Add initial interaction
document.body.addEventListener('click', function initialPlay() {
    const music = document.getElementById('music');
    music.play();
    this.removeEventListener('click', initialPlay);
}, { once: true });
