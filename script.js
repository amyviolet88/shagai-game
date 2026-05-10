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
