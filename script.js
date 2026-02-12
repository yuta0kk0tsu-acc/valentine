const contentDiv = document.getElementById('main-content');
const toast = document.getElementById('toast-message');

// Позиции для парных картинок на каждом этапе - ЗДЕСЬ ВСТАВЛЯЙ ССЫЛКИ НА СВОИ КАРТИНКИ
const decoImages = [
    { // Стартовый экран
        topLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🐻', 
        topRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🐻‍❄️', 
        bottomLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🌸', 
        bottomRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🌿'
    },
    { // Вопрос про имя
        topLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=☕', 
        topRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=📖', 
        bottomLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🎀', 
        bottomRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🕯️'
    },
    { // День рождения
        topLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🎂', 
        topRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🎈', 
        bottomLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🧁', 
        bottomRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🍰'
    },
    { // Любимый цвет
        topLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🎨', 
        topRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🖌️', 
        bottomLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=💙', 
        bottomRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=💚'
    },
    { // Сложный пример
        topLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🧮', 
        topRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=📐', 
        bottomLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=⚗️', 
        bottomRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🔭'
    },
    { // Имя Алина
        topLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=💌', 
        topRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=📝', 
        bottomLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=✨', 
        bottomRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=🪶'
    },
    { // Финальный экран
        topLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=💘', 
        topRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=💞', 
        bottomLeft: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=💖', 
        bottomRight: 'https://placehold.co/100x100/ffb3c6/ffb3c6?text=💗'
    }
];

let currentDecoIndex = 0;
let noClickCount = 0;
let noBtnMoveInterval = null;

// Функция обновления парных объектов с картинками
function updateDeco(index) {
    const imgs = decoImages[index];
    
    // Получаем элементы img и устанавливаем src
    document.getElementById('img-deco1').src = imgs.topLeft;
    document.getElementById('img-deco2').src = imgs.topRight;
    document.getElementById('img-deco3').src = imgs.bottomLeft;
    document.getElementById('img-deco4').src = imgs.bottomRight;
    
    // Альтернативный текст
    document.getElementById('img-deco1').alt = 'deco1';
    document.getElementById('img-deco2').alt = 'deco2';
    document.getElementById('img-deco3').alt = 'deco3';
    document.getElementById('img-deco4').alt = 'deco4';
}

// Рандомная сортировка вариантов
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Показать тост
function showToast(msg, isError = false) {
    toast.textContent = msg;
    toast.style.background = isError ? 'rgba(255, 220, 230, 0.95)' : 'rgba(230, 240, 255, 0.95)';
    toast.style.color = isError ? '#b33f5e' : '#3f5eb3';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// Стартовый экран
function renderStart() {
    currentDecoIndex = 0;
    updateDeco(0);
    contentDiv.innerHTML = `
        <h1>Привет, ты попала в мой мир внутренний мир</h1>
        <p style="font-size: 1.6rem; margin-bottom: 25px;">Хочешь добраться до его самого центра?</p>
        <div style="display: flex; justify-content: center;">
            <button class="btn" style="width: auto; padding: 16px 48px;" onclick="nextQuestion('start')">🌷 Начать 🌷</button>
        </div>
    `;
}

// Навигация
window.nextQuestion = (from) => {
    if (from === 'start') {
        renderNameInput();
    }
};

function renderNameInput() {
    currentDecoIndex = 5;
    updateDeco(5);
    contentDiv.innerHTML = `
        <h2>Хочу с тобой познакомиться</h2>
        <p style="font-size: 1.25rem; margin-bottom: 30px;">Точно ли в мой мир попала моя любовь</p>
        <input type="text" id="girlNameInput" class="input-field" placeholder="Напиши своё имя" autocomplete="off">
        <div style="display: flex; justify-content: center;">
            <button class="btn" style="width: auto; padding: 16px 40px;" onclick="submitGirlName()">💕 Это я 💕</button>
        </div>
    `;
}

window.submitGirlName = () => {
    const input = document.getElementById('girlNameInput').value.trim().toLowerCase();
    const correctNames = ['алина', 'алиночка', 'алинушка', 'аля', 'алинка', 'алечка', 'алиначка'];
    
    if (correctNames.includes(input)) {
        showToast('Я тебя ждал котёнок 💗', false);
        setTimeout(() => renderNameQuestion(), 2500);
    } else {
        showToast('Я таких людей тут не ждал... 💔', true);
    }
};

// ВОПРОС 1: Как меня зовут?
function renderNameQuestion() {
    currentDecoIndex = 1;
    updateDeco(1);
    let options = ['Гоблин', 'Женя', 'Милый', 'Ботан', 'Фембой'];
    options = shuffleArray(options);
    const buttonsHtml = options.map(opt => 
        `<button class="btn" onclick="checkName('${opt}')">${opt}</button>`
    ).join('');
    
    contentDiv.innerHTML = `
        <h2>Давай начнём с самого простого</h2>
        <p class="question-text">Как меня зовут?</p>
        <div class="button-group">${buttonsHtml}</div>
    `;
}

window.checkName = (answer) => {
    if (answer === 'Женя') {
        showToast('Хе-хе, правильный ответ )', false);
        setTimeout(() => renderBirthdayQuestion(), 2500);
    } else {
        if (answer === 'Гоблин') {
            showToast('Ну-ну, конечно, ХОПЛИН.', true);
        }
        if (answer === 'Ботан') {
            showToast('За "ботана" ты у меня получишь!', true);
        }
        if (answer === 'Милый') {
            showToast('Только твой милашка:з, но нужно выбрать мое настоящее имя.', true);
        }
        if (answer === 'Фембой') {
            showToast('Эх, фантазии твои фантазии..', true);
        }
    }
};

// ВОПРОС 2: День рождения
function renderBirthdayQuestion() {
    currentDecoIndex = 2;
    updateDeco(2);
    let options = ['5 июня', '12 марта', '20 апреля', '1 июля'];
    options = shuffleArray(options);
    const btns = options.map(opt => 
        `<button class="btn" onclick="checkBirthday('${opt}')">${opt}</button>`
    ).join('');
    
    contentDiv.innerHTML = `
        <h2>А помнишь ли ты...</h2>
        <p class="question-text">Когда у меня День Рождения?</p>
        <div class="button-group">${btns}</div>
    `;
}

window.checkBirthday = (ans) => {
    if (ans === '12 марта') {
        showToast('Иии... это правильный ответ! )', false);
        setTimeout(() => renderColorQuestion(), 2500);
    } else {
        showToast('Не тот денёк..', true);
    }
};

// ВОПРОС 3: Любимый цвет
function renderColorQuestion() {
    currentDecoIndex = 3;
    updateDeco(3);
    let colors = ['Розовый', 'Бирюзовый', 'Фиолетовый', 'Красный'];
    colors = shuffleArray(colors);
    const btns = colors.map(c => 
        `<button class="btn" onclick="checkColor('${c}')">${c}</button>`
    ).join('');
    
    contentDiv.innerHTML = `
        <h2>А что насчёт цвета</h2>
        <p class="question-text">Какой мой любимый цвет?</p>
        <div class="button-group">${btns}</div>
    `;
}

window.checkColor = (color) => {
    if (color === 'Бирюзовый') {
        showToast('Да, это один из любимых цветов <3', false);
        setTimeout(() => renderMathQuestion(), 3000);
    } else {
        if (color === 'Фиолетовый') {
            showToast('Да, это один из любимых цветов <3', false);
            setTimeout(() => renderMathQuestion(), 3000);
        }
        else {
            showToast('Неа, не мой.', true);
        }
    }
};

// ВОПРОС 4: Сложный пример
function renderMathQuestion() {
    currentDecoIndex = 4;
    updateDeco(4);
    let answers = ['42', '3,14', 'Я незнаю', '0'];
    answers = shuffleArray(answers);
    const btns = answers.map(a => 
        `<button class="btn" onclick="checkMath('${a}')">${a}</button>`
    ).join('');
    
    contentDiv.innerHTML = `
        <h2>🧠 Ну всё, вопрос посложнее...</h2>
        <p class="question-text">Сколько будет 548 × 0,5 + 23/7 × √64?</p>
        <div class="button-group">${btns}</div>
    `;
}

window.checkMath = (ans) => {
    if (ans === 'Я незнаю') {
        showToast('Правильно, таким лучше займусь я, а тебе не стоит об этом думать :з', false);
        setTimeout(() => renderOurQuestion(), 3000);
    } else {
        showToast('Неа, не угадала.', true);
    }
};

function renderOurQuestion() {
    currentDecoIndex = 2;
    updateDeco(2);
    let options = ['25 ноября', '25 октября', '25 декабря', '25 сентября'];
    options = shuffleArray(options);
    const btns = options.map(opt => 
        `<button class="btn" onclick="checkOur('${opt}')">${opt}</button>`
    ).join('');
    
    contentDiv.innerHTML = `
        <h2>Лучше задавать вопросы попроще</h2>
        <p class="question-text">Когда мы друг другу признались и начали отношения?</p>
        <div class="button-group">${btns}</div>
    `;
}

window.checkOur = (ans) => {
    if (ans === '25 ноября') {
        showToast('Я уже не мог сдерживать свои чувства...', false);
        setTimeout(() => renderFinalQuestion(), 2500);
    } else {
        showToast('Забыла что-ли?', true);
    }
};

// ФИНАЛ: "Ты будешь моей валентинкой?"
function renderFinalQuestion() {
    currentDecoIndex = 6;
    updateDeco(6);
    noClickCount = 0;
    
    contentDiv.innerHTML = `
        <h1 style="font-size: 2.2rem; margin-bottom: 40px;">Ты будешь моей валентинкой? 💌</h1>
        <div style="display: flex; justify-content: center; gap: 30px; position: relative; min-height: 100px;">
            <button class="btn" id="yesBtn" onclick="sayYes()" style="width: auto; padding: 16px 40px;">Да</button>
            <button class="btn btn-no" id="noBtn" onclick="sayNo()" style="width: auto; padding: 16px 40px;">Нет</button>
        </div>
    `;
    
    // Добавляем обработчики для кнопки "Нет"
    const noBtn = document.getElementById('noBtn');
    noBtn.addEventListener('mouseenter', moveNoButton);
    noBtn.addEventListener('click', sayNo);
    
    // Запускаем постоянное движение при наведении
    if (noBtnMoveInterval) clearInterval(noBtnMoveInterval);
}

// Функция перемещения кнопки "Нет"
function moveNoButton(e) {
    const btn = e.target;
    const container = document.querySelector('.content-card');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    
    // Рандомные координаты в пределах карточки
    const maxX = containerRect.width - btnRect.width - 40;
    const maxY = containerRect.height - btnRect.height - 40;
    
    let newX = Math.max(10, Math.min(maxX, Math.random() * maxX));
    let newY = Math.max(10, Math.min(maxY, Math.random() * maxY));
    
    btn.style.position = 'absolute';
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
    btn.style.transform = `rotate(${Math.random() * 8 - 4}deg) scale(${0.8 + Math.random() * 0.5})`;
    
    // Разные цвета при движении
    const colors = ['#ffb3c6', '#ffc2c7', '#ffd1d1', '#ffe0e0', '#ffb3ba'];
    btn.style.background = `linear-gradient(145deg, ${colors[Math.floor(Math.random() * colors.length)]}, white)`;
}

window.sayNo = function() {
    noClickCount++;
    const noBtn = document.getElementById('noBtn');
    
    const messages = [
        'Подумай ещё...',
        'Ну пожалуйста...',
        'Ты разбиваешь мне сердце',
        'Не убегай от ответа!',
        'Я верю, ты передумаешь...',
        'Нажми "Да", я знаю ты хочешь!',
        'Ты самая лучшая, скажи "Да"!'
    ];
    
    const msgIndex = Math.min(noClickCount - 1, messages.length - 1);
    showToast(messages[msgIndex], true);
    
    // Активно двигаем кнопку при каждом нажатии
    moveNoButton({ target: noBtn });
}

window.sayYes = function() {
    // Останавливаем движение кнопки "Нет"
    if (noBtnMoveInterval) clearInterval(noBtnMoveInterval);
    
    // Салют из смайлов
    launchHeartFireworks();
    
    contentDiv.innerHTML = `
        <div style="animation: fadeIn 1s ease;">
            <h1 style="color: #c43e6e; font-size: 2.5rem; margin-bottom: 30px;">Ты сделала меня самым счастливым на свете!</h1>
            <p style="font-size: 2.2rem; margin: 40px 0; animation: pulse 2s infinite;">Спасибо тебе большое за то, что ты у меня есть!</p>
            <h2 style="font-size: 2.5rem; color: #a5385b; margin-top: 30px;">Я люблю тебя котёнок ❤️</h2>
        </div>
    `;
    updateDeco(6);
}

// Салют
function launchHeartFireworks() {
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-emoji';
            const emojis = ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💖','💗','💘','💝','💞','💕','💓','💔','❣️','💜','💙'];
            heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = (1.8 + Math.random() * 3) + 'rem';
            heart.style.animationDuration = (1.8 + Math.random() * 2.2) + 's';
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2500);
        }, i * 30);
    }
}

// Добавляем анимации в CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);

// Старт
renderStart();