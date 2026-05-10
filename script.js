function rollShagai() {
    const shagaiElements = document.querySelectorAll('.shagai');
    const containerSize = 400; // Контейнерын хэмжээ

    shagaiElements.forEach((el, index) => {
        // 1. Санамсаргүй эцсийн байрлал (Тойрог дотор)
        const radius = Math.random() * 120; // Төвөөс холдох зай
        const angle = Math.random() * Math.PI * 2; // Санамсаргүй өнцөг
        
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        // 2. Санамсаргүй эргэлтүүд
        const spin = 720 + Math.random() * 1080; // 2-5 бүтэн эргэлт
        
        // 3. Web Animations API ашиглан тойрог замын эффект оруулах
        el.animate([
            { 
                transform: `translate(0, 0) rotate(0deg) scale(1)`, 
                offset: 0 
            },
            { 
                // Агаарт хөөрч буй мэт харагдуулах
                transform: `translate(${x/2}px, ${y/2 - 100}px) rotate(${spin/2}deg) scale(1.5)`, 
                offset: 0.5 
            },
            { 
                transform: `translate(${x}px, ${y}px) rotate(${spin}deg) scale(1)`, 
                offset: 1 
            }
        ], {
            duration: 800 + Math.random() * 400,
            easing: 'ease-out',
            fill: 'forwards'
        });

        // 4. Шагайн талыг санамсаргүйгээр сонгох
        const sides = ['sheep', 'goat', 'camel', 'horse'];
        const randomSide = sides[Math.floor(Math.random() * sides.length)];
        el.src = `images/${randomSide}.png`; // Таны images хавтсан дахь зургийн нэрс
    });
}
function rollShagai() {
    const shagaiElements = document.querySelectorAll('.shagai');

    shagaiElements.forEach((el) => {
        // 1. Шидэгдэж очих зай болон өнцөг (Radius & Angle)
        // Хээний төв тойрог дотор багтаахын тулд radius-ыг 100-150 орчимд байлгаарай
        const radius = Math.random() * 140 + 20; 
        const angle = Math.random() * Math.PI * 2;
        
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        // 2. Эргэлдэх эффект
        const spin = 1080 + Math.random() * 1440; // Маш их эргэлдэнэ

        // 3. Анимаци
        el.animate([
            { 
                transform: `translate(0, 0) rotate(0deg) scale(1)`, 
                zIndex: 100 
            },
            { 
                // Агаарт хөөрөх үе (Нуман хөдөлгөөн)
                transform: `translate(${x/2}px, ${y/2 - 200}px) rotate(${spin/2}deg) scale(2)`, 
                offset: 0.5 
            },
            { 
                // Газарт (хээ дээр) буух цэг
                transform: `translate(${x}px, ${y}px) rotate(${spin}deg) scale(1)`, 
                zIndex: 1 
            }
        ], {
            duration: 900,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Илүү зөөлөн зогсоно
            fill: 'forwards'
        });

        // 4. Дүрсийг солих (Санамсаргүй тал)
        const sides = ['sheep', 'goat', 'camel', 'horse'];
        const randomSide = sides[Math.floor(Math.random() * sides.length)];
        el.src = `images/${randomSide}.png`;
    });
}
