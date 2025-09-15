document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.getElementById('greeting');
    const button = document.getElementById('changeGreeting');

    const greetings = [
        'Hello, World!',
        'Welcome to SOAK!',
        'Greetings, Friend!',
        'Hey there!',
        'Good to see you!'
    ];

    let currentIndex = 0;

    button.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % greetings.length;
        greeting.textContent = greetings[currentIndex];

        greeting.style.transform = 'scale(1.1)';
        setTimeout(() => {
            greeting.style.transform = 'scale(1)';
        }, 200);
    });

    greeting.style.transition = 'transform 0.2s ease';
});