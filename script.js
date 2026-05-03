const sides = [
    { name: "Хонь", img: "honi.png.png" },
    { name: "Морь", img: "mori.png.png" },
    { name: "Тэмээ", img: "temee.png.png" },
    { name: "Ямаа", img: "yamaa.png.png" }
];

function throwShagai() {
    const shagaiElements = document.querySelectorAll('.shagai');
    const btn = document.getElementById('throw-btn');
    const resultDisplay = document.getElementById('result');
    const symbolDisplay = document.getElementById('symbol-text');
    
    btn.disabled = true;
    resultDisplay.innerText = "Өнхөрч байна...";
    symbolDisplay.innerText = "";

    setTimeout(() => {
        let results = [];
        
        shagaiElements.forEach(el => {
            const randomSide = sides[Math.floor(Math.random() * sides.length)];
            // Зургийг HTML дотор нь нэмж өгөх
            el.innerHTML = `<img src="${randomSide.img}" alt="${randomSide.name}" style="max-width: 80%; max-height: 80%;">`;
            results.push(randomSide.name);
        });

        checkGame(results);
        btn.disabled = false;
    }, 600);
}

function checkGame(results) {
    const resultDisplay = document.getElementById('result');
    const symbolDisplay = document.getElementById('symbol-text');
    const uniqueResults = [...new Set(results)];

    resultDisplay.innerText = results.join(" - ");

    if (uniqueResults.length === 4) {
        resultDisplay.innerText = "🎉 ДӨРВӨН БЭРХ БУУЛАА! 🎉";
        symbolDisplay.innerText = "Маш сайн бэлгэдэл! Таны бүх ажил үйлс бүтэх болно.";
    } else if (uniqueResults.length === 1) {
        resultDisplay.innerText = `Дөрвөн ижил ${uniqueResults[0]}!`;
        symbolDisplay.innerText = "Ховор тохиолдол, сайны ёр.";
    }
}
