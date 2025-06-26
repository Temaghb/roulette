document.addEventListener('DOMContentLoaded', function() {
    const wheel = document.querySelector('.wheel');
    const spinBtn = document.getElementById('spin-btn');
    const resultDiv = document.getElementById('result');
    
    // Правильный порядок номеров рулетки (европейская версия)
    const numbers = [
        0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 
        5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
    ];
    
    // Соответствующие цвета для каждого числа
    const colors = [
        'green', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 
        'black', 'red', 'black', 'black', 'red', 'black', 'red', 'black', 
        'red', 'black', 'red', 'red', 'black', 'red', 'black', 'red', 
        'black', 'red', 'black', 'red', 'black', 'black', 'red', 'black', 
        'red', 'black', 'red', 'black', 'red'
    ];
    
    let isSpinning = false;
    
    spinBtn.addEventListener('click', function() {
        if (isSpinning) return;
        
        isSpinning = true;
        resultDiv.textContent = "Крутим...";
        
        // Параметры вращения
        const spins = 5 + Math.random() * 5; // 5-10 оборотов
        const finalAngle = Math.floor(Math.random() * 360); // Конечный угол
        const totalAngle = spins * 360 + finalAngle; // Общий угол
        
        // Применяем вращение
        wheel.style.transform = rotate(${totalAngle}deg);
        
        // Определяем результат после остановки
        setTimeout(() => {
            const winningIndex = Math.floor((360 - (finalAngle % 360)) / (360 / numbers.length));
            const winningNumber = numbers[winningIndex];
            const winningColor = colors[winningIndex];
            
            resultDiv.textContent = Выпало: ${winningNumber} (${winningColor});
            isSpinning = false;
        }, 5000); // Время должно совпадать с CSS-анимацией
    });
});
