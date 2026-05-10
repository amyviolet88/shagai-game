function rollShagai() {
    const shagaiElements = document.querySelectorAll('.shagai');
    const resultDisplay = document.getElementById('result-text');
    
    // Таны GitHub дээрх яг тэр файлын нэрс
    const sides = [
        'honi.png.png',
        'yamaa.png.png',
        'temee.png.png',
        'mori.png.png'
    ];

    const messages = [
        "Сайхан буулаа! Түмэн олон тань амгалан байг!",
        "Аз хийморь тань бадрах болтугай!",
        "Өгөөжтэй сайхан жил болох нь ээ!",
        "Морь буулаа, ажил үйлс тань бүтэмжтэй байна!",
        "Төлийн дуу цангинасан дэлгэр зун болох нь!",
        "Хийморь сэргэсэн сайхан буулт боллоо!"
    ];

    // Товчлуурыг түр идэвхгүй болгох (анимаци дуустал)
    const btn = document.getElementById('roll-button');
    btn.style.pointerEvents = 'none';
    btn.innerText = 'Шидэж байна...';

    shagaiElements.forEach((el) => {
        // Төвөөс цацагдах байрлал (Radius 50-180px)
        const radius = Math.random() * 130 + 50; 
        const angle = Math.random() * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        // Маш их эргэлт (Spin)
        const spin = 1440 + Math.random() * 1080; 

        // Анимаци эхлүүлэх
        el.animate([
            { transform: `translate(-50%, -50%) rotate(0deg) scale(1)`, offset: 0 },
            { transform: `translate(calc(-50% + ${x/2}px), calc(-50% + ${y/2 - 250}px)) rotate(${spin/2}deg) scale(2.5)`, offset: 0.5 },
            { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${spin}deg) scale(1)`, offset: 1 }
        ], {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards'
        });

        // Санамсаргүй зургийг оноох
        const randomImg = sides[Math.floor(Math.random() * sides.length)];
        el.src = randomImg; 
    });

    // Урамшууллын үг гаргаж, товчлуурыг буцааж идэвхжүүлэх
    setTimeout(() => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        resultDisplay.innerText = randomMsg;
        btn.style.pointerEvents = 'auto';
        btn.innerText = 'Дахин шидэх';
    }, 1000);
}
