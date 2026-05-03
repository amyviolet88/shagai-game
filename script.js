function throwShagai() {
    const shagaiElements = document.querySelectorAll('.shagai');
    const btn = document.getElementById('throw-btn');
    
    btn.disabled = true;
    
    // Эргэлдэх хөдөлгөөн нэмэх
    shagaiElements.forEach(el => {
        el.classList.add('spinning');
        el.innerHTML = ""; // Хуучин зургийг арилгах
    });

    setTimeout(() => {
        let results = [];
        shagaiElements.forEach(el => {
            el.classList.remove('spinning'); // Эргэлтийг зогсоох
            const randomSide = sides[Math.floor(Math.random() * sides.length)];
            el.innerHTML = `<img src="${randomSide.img}" style="width: 80%;">`;
            results.push(randomSide.name);
        });
        
        document.getElementById('result').innerText = results.join(" - ");
        btn.disabled = false;
    }, 1000); // 1 секунд эргэлдэнэ
}
