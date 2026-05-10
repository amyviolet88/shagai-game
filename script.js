// Товчлуур ажиллахгүй байхаас сэргийлж window объект дээр зарлав
window.rollShagai = function() {
    const shagaiElements = document.querySelectorAll('.shagai');
    const resultDisplay = document.getElementById('result-text');
    const btn = document.getElementById('roll-button');
    
    // Зургийн нэрс (Таны GitHub дээрх нэрстэй таарч байх ёстой)
    const sides = ['honi.png', 'mori.png', 'temee.png', 'yamaa.png'];
    
    const messages = [
        "Сайхан буулаа! Хийморь сэргэх болтугай!",
        "Азтай байна! Өгөөжтэй сайхан жил болох нь!",
        "Морь буулаа! Ажил үйлс тань бүтэмжтэй байна!",
        "Тэмээ буулаа! Алсын аян тань өлзийтэй байг!",
        "Хийморь сэргэсэн сайхан буулт боллоо!",
        "Дөрвөн бэрх буух ойрхон байна шүү!"
    ];

    // Товчлуурыг түр идэвхгүй болгох
    btn.disabled = true;
    resultDisplay.innerText = "Шидэж байна...";

    shagaiElements.forEach((el) => {
        // 1. Санамсаргүй очих цэг (Радиус 60-150px дотор)
        const radius = Math.random() * 120 + 40; 
        const angle = Math.random() * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        // 2. Маш их эргэлт (Spin)
        const spin = 1440 + Math.random() * 1080; 

        // 3. Web Animations API - Тойргоор цацагдах хөдөлгөөн
        el.animate([
            { transform: `translate(-50%, -50%) rotate(0deg) scale(1)`, offset: 0 },
            { transform: `translate(calc(-50% + ${x/2}px), calc(-50% + ${y/2 - 250}px)) rotate(${spin/2}deg) scale(2.5)`, offset: 0.5 },
            { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${spin}deg) scale(1)`, offset: 1 }
        ], {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards'
        });

        // 4. Дүрсийг санамсаргүйгээр солих
        const randomSide = sides[Math.floor(Math.random() * sides.length)];
        el.src = randomSide; 
    });

    // 1 секунд хүлээгээд үр дүнг харуулж, товчийг идэвхжүүлэх
    setTimeout(() => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        resultDisplay.innerText = randomMsg;
        btn.disabled = false;
    }, 1000);
};
