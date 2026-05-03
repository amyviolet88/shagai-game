const sides = [
    { name: "Хонь", class: "shagai-honi" },
    { name: "Морь", class: "shagai-mori" },
    { name: "Тэмээ", class: "shagai-temee" },
    { name: "Ямаа", class: "shagai-yamaa" }
];

function throwShagai() {
    const shagaiElements = document.querySelectorAll('.shagai');
    const btn = document.getElementById('throw-btn');
    const resultDisplay = document.getElementById('result-text');
    const symbolDisplay = document.getElementById('symbol-text');
    
    btn.disabled = true; // Өнхрөх явцад товчийг идэвхгүй болгоно
    resultDisplay.innerText = "Өнхөрч байна...";
    symbolDisplay.innerText = "";

    shagaiElements.forEach(el => {
        el.className = 'shagai rolling'; // Хөдөлгөөн нэмэх
    });

    setTimeout(() => {
        let results = [];
        
        shagaiElements.forEach(el => {
            const randomSide = sides[Math.floor(Math.random() * sides.length)];
            el.className = 'shagai ' + randomSide.class; // Зургийг солих
            results.push(randomSide.name);
        });

        checkGame(results);
        btn.disabled = false;
    }, 1000); // 1 секунд өнхөрнө
}

function checkGame(results) {
    const resultDisplay = document.getElementById('result-text');
    const symbolDisplay = document.getElementById('symbol-text');
    const uniqueResults = [...new Set(results)];

    resultDisplay.innerText = results.join(" - ");

    if (uniqueResults.length === 4) {
        resultDisplay.innerText = "🎉 ДӨРВӨН БЭРХ БУУЛАА! 🎉";
        symbolDisplay.innerText = "Маш сайн бэлгэдэл! Таны бүх ажил үйлс бүтэх болно.";
        resultDisplay.style.color = "#d4af37";
    } else if (uniqueResults.length === 1) {
        resultDisplay.innerText = `Дөрвөн ижил ${uniqueResults[0]}!`;
        symbolDisplay.innerText = "Ховор тохиолдол, сайны ёр.";
        resultDisplay.style.color = "#a4161a";
    } else {
        resultDisplay.style.color = "black";
    }
}
