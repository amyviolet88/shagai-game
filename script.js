function rollShagai() {
    const shagaiElements = document.querySelectorAll('.shagai');
    const sides = ['sheep', 'goat', 'camel', 'horse'];

    shagaiElements.forEach((el) => {
        // 1. Санамсаргүй байрлал (Хээний төв тойрог дотор)
        const radius = Math.random() * 150 + 20; 
        const angle = Math.random() * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        // 2. Эргэлдэх хурд ба өнцөг
        const spin = 1440 + Math.random() * 1080; 

        // 3. Web Animations API ашиглан тойрог замаар шидэх
        el.animate([
            { transform: `translate(-50%, -50%) rotate(0deg) scale(1)`, offset: 0 },
            { transform: `translate(calc(-50% + ${x/2}px), calc(-50% + ${y/2 - 250}px)) rotate(${spin/2}deg) scale(2)`, offset: 0.5 },
            { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${spin}deg) scale(1)`, offset: 1 }
        ], {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards'
        });

        // 4. Дүрсийг санамсаргүйгээр солих
        const randomSide = sides[Math.floor(Math.random() * sides.length)];
        el.src = `images/${randomSide}.png`;
    });
}
