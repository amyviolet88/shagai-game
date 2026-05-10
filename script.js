script.js засах
Зургуудыг гаргаж ирэх ба урамшууллын үг хэлэх логик:

JavaScript
function rollShagai() {
    const shagaiElements = document.querySelectorAll('.shagai');
    const resultDisplay = document.getElementById('result-text');
    
    // Таны GitHub дээрх яг тэр файлын нэрс:
    const sides = [
        { name: 'Хонь', file: 'honi.png.png' },
        { name: 'Ямаа', file: 'yamaa.png.png' },
        { name: 'Тэмээ', file: 'temee.png.png' },
        { name: 'Морь', file: 'mori.png.png' }
    ];

    const messages = [
        "Сайхан буулаа!",
        "Өгөөжтэй сайхан жил болох нь!",
        "Аз хийморь дагуулах болтугай!",
        "Төлийн дуу цангинасан намар болох нь!",
        "Морь буувал хийморь сэргэнэ!",
        "Тэмээ буувал тэх шиг зоригтой!"
    ];

    shagaiElements.forEach((el) => {
        const radius = Math.random() * 130 + 20; 
        const angle = Math.random() * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const spin = 1440 + Math.random() * 1080; 

        el.animate([
            { transform: `translate(-50%, -50%) rotate(0deg) scale(1)`, offset: 0 },
            { transform: `translate(calc(-50% + ${x/2}px), calc(-50% + ${y/2 - 200}px)) rotate(${spin/2}deg) scale(2.5)`, offset: 0.5 },
            { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${spin}deg) scale(1)`, offset: 1 }
        ], {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards'
        });

        // Санамсаргүй тал сонгох
        const randomIdx = Math.floor(Math.random() * sides.length);
        el.src = sides[randomIdx].file; 
    });

    // Урамшууллын үг санамсаргүйгээр гаргах
    setTimeout(() => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        resultDisplay.innerText = randomMsg;
    }, 1000);
}
