const container = document.getElementById('shagai-container');
const music = document.getElementById('bgMusic');
const numberOfShagai = 4;
const radius = 140; // Хээний голын тойрогт тааруулах зай

// Файлын нэрсийг латин болгосон
const shagaiTypes = ['horse.png', 'sheep.png', 'camel.png', 'goat.png'];

function initializeShagai() {
    container.innerHTML = '';
    for (let i = 0; i < numberOfShagai; i++) {
        const shagai = document.createElement('img');
        // Эхлээд бүгдийг нь хонь болгож харуулъя
        shagai.src = 'sheep.png'; 
        shagai.className = 'shagai';

        const angle = (i / numberOfShagai) * (2 * Math.PI);
        const x = Math.cos(angle) * radius + (container.clientWidth / 2) - 40;
        const y = Math.sin(angle) * radius + (container.clientHeight / 2) - 40;

        shagai.style.left = `${x}px`;
        shagai.style.top = `${y}px`;

        container.appendChild(shagai);
    }
}

function rollShagai() {
    // Хэрэглэгч товч дарахад ая тоглуулж эхэлнэ
    if (music.paused) {
        music.play().catch(e => console.log("Ая тоглуулахад алдаа гарлаа"));
    }

    const shagaiElements = document.querySelectorAll('.shagai');
    shagaiElements.forEach(el => {
        const randomType = shagaiTypes[Math.floor(Math.random() * shagaiTypes.length)];
        el.src = randomType;
        
        // Хаях үед эргэлдэх эффект
        el.style.transform = `scale(1.3) rotate(${Math.random() * 360}deg)`;
        setTimeout(() => {
            el.style.transform = `scale(1) rotate(0deg)`;
        }, 200);
    });
}

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

window.onload = initializeShagai;
