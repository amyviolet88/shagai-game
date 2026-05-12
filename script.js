const container = document.getElementById('shagai-container');
const music = document.getElementById('bgMusic');
const numberOfShagai = 4;
const radius = 130; // Хээний гол тойрогт тааруулсан радиус

// Шагайнуудын зургийн нэрс (өөрийн файлын нэрээр солино уу)
const shagaiTypes = ['horse.png', 'sheep.png', 'camel.png', 'goat.png'];

// 1. Шагайнуудыг тойрог хэлбэрээр анхлан байрлуулах функц
function initializeShagai() {
    container.innerHTML = ''; // Дахин зурахаас өмнө цэвэрлэнэ
    for (let i = 0; i < numberOfShagai; i++) {
        const shagai = document.createElement('img');
        shagai.src = shagaiTypes[Math.floor(Math.random() * shagaiTypes.length)];
        shagai.className = 'shagai';
        shagai.id = `shagai-${i}`;

        const angle = (i / numberOfShagai) * (2 * Math.PI);
        const x = Math.cos(angle) * radius + (container.clientWidth / 2) - 35;
        const y = Math.sin(angle) * radius + (container.clientHeight / 2) - 35;

        shagai.style.left = `${x}px`;
        shagai.style.top = `${y}px`;

        container.appendChild(shagai);
    }
}

// 2. Шагай орхих (санамсаргүй зураг гаргах)
function rollShagai() {
    // Хэрэв ая эхлээгүй бол тоглуулж эхэлнэ
    if (music.paused) music.play();

    const shagaiElements = document.querySelectorAll('.shagai');
    shagaiElements.forEach(el => {
        // Санамсаргүй төрөл сонгох
        const randomType = shagaiTypes[Math.floor(Math.random() * shagaiTypes.length)];
        el.src = randomType;
        
        // Бага зэрэг "үсэрч" байгаа мэт эффект
        el.style.transform = `scale(1.2) rotate(${Math.random() * 360}deg)`;
        setTimeout(() => {
            el.style.transform = `scale(1) rotate(0deg)`;
        }, 300);
    });
}

// 3. Хөгжим удирдах
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Хуудсыг ачаалахад шагайнуудыг бэлдэх
window.onload = initializeShagai;
