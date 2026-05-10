function throwShagai() {
    const shagaiElements = document.querySelectorAll('.shagai');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    shagaiElements.forEach((el, index) => {
        // 1. Санамсаргүй эцсийн цэг (Radius)
        const angle = Math.random() * Math.PI * 2; // Санамсаргүй өнцөг
        const radius = Math.random() * 200 + 100; // Төвөөс холдох зай
        
        const targetX = Math.cos(angle) * radius;
        const targetY = Math.sin(angle) * radius;
        const finalRotation = Math.random() * 720; // 2 бүтэн эргэлт

        // 2. Web Animations API ашиглан тойрог зам үүсгэх
        el.animate([
            { 
                transform: `translate(-50%, -50%) scale(0.5) rotate(0deg)`,
                opacity: 0 
            },
            { 
                // Замын дунд хэсэг (Агаарт хөөрөх үе)
                transform: `translate(calc(-50% + ${targetX / 2}px), calc(-50% + ${targetY / 2 - 150}px)) scale(1.5) rotate(${finalRotation / 2}deg)`,
                opacity: 1,
                offset: 0.5
            },
            { 
                // Буух цэг
                transform: `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(1) rotate(${finalRotation}deg)`,
                opacity: 1
            }
        ], {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards'
        });

        // 3. Шагайн буусан талыг санамсаргүйгээр зургаар солих
        const sides = ['alchur', 'bukh', 'khon', 'temee'];
        const randomSide = sides[Math.floor(Math.random() * sides.length)];
        // Жишээ: images/bukh.png
        el.src = `images/${randomSide}.png`; 
    });
}
