const guideArticles = [
    {
        id: 1,
        category: "Рельеф и природа",
        readTime: "2 мин чтения",
        title: "Килиманджаро и Восточно-Африканский рифт",
        text: "Африка — материк преимущественно равнин и плоскогорий, но на востоке протянулась гигантская зона разломов — Восточно-Африканский рифт. Именно здесь возвышается высочайшая точка континента — спящий вулкан Килиманджаро (5895 м), где у самого экватора сохраняются ледники и снежные шапки.",
        highlights: ["Высшая точка: 5895 м", "Танзания", "Рифтовая долина"]
    },
    {
        id: 2,
        category: "Реки и озёра",
        readTime: "3 мин чтения",
        title: "Нил, Конго и великие озёра Африки",
        text: "Нил — одна из длиннейших рек мира (около 6650 км), несущая воды в Средиземное море. Река Конго — самая полноводная в Африке и самая глубокая река планеты (до 220 м), дважды пересекающая экватор. Среди озёр выделяются Виктория (крупнейшее по площади в Африке) и Танганьика (самое длинное пресноводное и второе по глубине после Байкала).",
        highlights: ["Нил — ~6650 км", "Конго — дважды у экватора", "Танганьика — глубина 1470 м"]
    },
    {
        id: 3,
        category: "Пустыни и климат",
        readTime: "2 мин чтения",
        title: "Сахара и древняя пустыня Намиб",
        text: "Африка — самый жаркий материк Земли. На севере раскинулась Сахара — крупнейшая жаркая пустыня мира площадью около 9,2 млн км². На юго-западе у берегов Атлантического океана лежит Намиб — одна из древнейших пустынь планеты, где холодное Бенгельское течение создаёт частые прибрежные туманы.",
        highlights: ["Сахара — ~9,2 млн км²", "Намиб — у Атлантики", "Самый жаркий материк"]
    },
    {
        id: 4,
        category: "Природные зоны",
        readTime: "2 мин чтения",
        title: "Саванны, баобабы и остров Мадагаскар",
        text: "Около 40% территории Африки занимают саванны и редколесья с высокими травами, акациями и баобабами — мир крупных травоядных и хищников. К юго-востоку от материка расположен остров Мадагаскар, который давно отделился от суши, поэтому большинство его видов растений и животных (например, лемуров) больше нигде не встречаются.",
        highlights: ["Саванны — ~40% площади", "Национальный парк Серенгети", "Эндемики Мадагаскара"]
    },
    {
        id: 5,
        category: "Страны и крайние точки",
        readTime: "3 мин чтения",
        title: "Крайние точки, Нигерия и три столицы ЮАР",
        text: "Самая южная точка Африки — мыс Игольный (а не мыс Доброй Надежды). От Евразии материк отделяет Суэцкий канал. Самая густонаселённая страна континента — Нигерия (более 220 млн жителей), а ЮАР выделяется тем, что имеет сразу три официальные столицы: Преторию, Кейптаун и Блумфонтейн.",
        highlights: ["Мыс Игольный — южная точка", "Нигерия — лидер по населению", "ЮАР — 3 столицы"]
    }
];

const questions = [
    {
        category: "Реки и водоёмы",
        question: "Какая река в Африке является самой длинной на материке и одной из длиннейших в мире?",
        options: ["Конго", "Нил", "Замбези", "Нигер"],
        correct: 1,
        fact: "Длина Нила составляет около 6650 км. Он протекает через 11 стран и впадает в Средиземное море."
    },
    {
        category: "Пустыни и климат",
        question: "Как называется крупнейшая жаркая пустыня в мире, занимающая около 30% площади Африки?",
        options: ["Намиб", "Калахари", "Сахара", "Ливийская пустыня"],
        correct: 2,
        fact: "Площадь Сахары составляет около 9,2 млн км² — это почти равно площади всей территории США или Китая."
    },
    {
        category: "Рельеф и горы",
        question: "Какая горная вершина является высочайшей точкой Африки (5895 м)?",
        options: ["Гора Кения", "Вулкан Килиманджаро", "Пик Маргерита", "Гора Тубкаль"],
        correct: 1,
        fact: "Килиманджаро — это спящий стратовулкан в Танзании, вершина которого покрыта снегами даже у экватора."
    },
    {
        category: "Крайние точки",
        question: "Какой мыс является самой южной точкой Африканского континента?",
        options: ["Мыс Доброй Надежды", "Мыс Игольный", "Мыс Рас-Хафун", "Мыс Альмади"],
        correct: 1,
        fact: "Самая южная точка континента — мыс Игольный, где встречаются Атлантический и Индийский океаны."
    },
    {
        category: "Озёра",
        question: "Какое озеро является самым большим по площади в Африке и вторым пресноводным озером в мире?",
        options: ["Танганьика", "Ньяса", "Виктория", "Чад"],
        correct: 2,
        fact: "Озеро Виктория расположено на территории Танзании, Уганды и Кении. Именно из него берёт начало Белый Нил."
    },
    {
        category: "Реки и водоёмы",
        question: "Какая африканская река дважды пересекает экватор и является самой полноводной на материке?",
        options: ["Конго (Заир)", "Лимпопо", "Оранжевая", "Сенегал"],
        correct: 0,
        fact: "Конго — единственная крупная река в мире, которая дважды пересекает экватор, а также самая глубокая река планеты (до 220 м)."
    },
    {
        category: "Острова",
        question: "Какой крупный остров у юго-восточного побережья Африки славится своими уникальными лемурами и баобабами?",
        options: ["Занзибар", "Мадагаскар", "Сокотра", "Маврикий"],
        correct: 1,
        fact: "Мадагаскар отделился от Африки около 160 миллионов лет назад, поэтому большинство его видов растений и животных — эндемики."
    },
    {
        category: "Природные чудеса",
        question: "На какой реке расположен знаменитый водопад Виктория, который местные жители называют «Гремящий дым»?",
        options: ["Замбези", "Нил", "Конго", "Вольта"],
        correct: 0,
        fact: "Водопад Виктория находится на границе Замбии и Зимбабве. Его ширина составляет около 1800 метров, а высота — 108 метров."
    },
    {
        category: "Озёра",
        question: "Какое озеро в Африке является самым длинным пресноводным озером в мире (676 км) и вторым по глубине после Байкала?",
        options: ["Виктория", "Танганьика", "Тана", "Рудольф (Туркана)"],
        correct: 1,
        fact: "Максимальная глубина озера Танганьика достигает 1470 метров."
    },
    {
        category: "Страны и столицы",
        question: "Какое государство Африки является самым большим по численности населения?",
        options: ["Египет", "Эфиопия", "Нигерия", "ЮАР"],
        correct: 2,
        fact: "Население Нигерии превышает 220 миллионов человек, а её крупнейший город Лагос — один из самых быстрорастущих мегаполисов мира."
    },
    {
        category: "География материка",
        question: "Какой искусственный канал отделяет Африку от Евразии и соединяет Средиземное море с Красным?",
        options: ["Панамский канал", "Суэцкий канал", "Коринфский канал", "Мозамбикский пролив"],
        correct: 1,
        fact: "Суэцкий канал был открыт в 1869 году. Его длина составляет 160 км, и он позволяет судам не огибать всю Африку."
    },
    {
        category: "Природные зоны",
        question: "Какая природная зона занимает около 40% территории Африки и характеризуется высокой травой, баобабами и обилием копытных?",
        options: ["Гилея (влажные леса)", "Саванны и редколесья", "Жестколистные леса", "Полупустыни"],
        correct: 1,
        fact: "Знаменитый национальный парк Серенгети в Танзании — классический пример африканской саванны."
    },
    {
        category: "Пустыни и климат",
        question: "Какая пустыня на юго-западе Африки считается самой древней на Земле (возраст около 55–80 млн лет)?",
        options: ["Сахара", "Калахари", "Намиб", "Нубийская"],
        correct: 2,
        fact: "Пустыня Намиб тянется вдоль побережья Атлантического океана, где холодное Бенгельское течение вызывает густые туманы."
    },
    {
        category: "Рельеф и разломы",
        question: "Как называется гигантская система разломов земной коры на востоке Африки, где в будущем может образоваться новый океан?",
        options: ["Атласские горы", "Восточно-Африканская рифтовая долина", "Драконовы горы", "Эфиопское нагорье"],
        correct: 1,
        fact: "Восточно-Африканский рифт протянулся на 6000 км от Сирии до Мозамбика."
    },
    {
        category: "Страны и география",
        question: "Какая страна Африки уникальна тем, что имеет сразу три официальные столицы (Претория, Кейптаун, Блумфонтейн)?",
        options: ["Марокко", "Кения", "Южно-Африканская Республика (ЮАР)", "Алжир"],
        correct: 2,
        fact: "В ЮАР разделены ветви власти: в Претории находится правительство, в Кейптауне — парламент, а в Блумфонтейне — Верховный суд."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let timeLeft = 20;
let timerInterval;
let fiftyFiftyUsed = false;
let selectedGuideCategory = "Все";

// Навигация между окнами
const navQuizBtn = document.getElementById('nav-quiz-btn');
const navGuideBtn = document.getElementById('nav-guide-btn');
const quizModule = document.getElementById('quiz-module');
const guideModule = document.getElementById('guide-module');
const goToGuideBtn = document.getElementById('go-to-guide-btn');
const backToQuizBtn = document.getElementById('back-to-quiz-btn');

function switchModule(target) {
    if (target === 'guide') {
        navGuideBtn.classList.add('active');
        navQuizBtn.classList.remove('active');
        guideModule.classList.add('active');
        quizModule.classList.remove('active');
    } else {
        navQuizBtn.classList.add('active');
        navGuideBtn.classList.remove('active');
        quizModule.classList.add('active');
        guideModule.classList.remove('active');
    }
}

navQuizBtn.addEventListener('click', () => switchModule('quiz'));
navGuideBtn.addEventListener('click', () => switchModule('guide'));
goToGuideBtn.addEventListener('click', () => switchModule('guide'));
backToQuizBtn.addEventListener('click', () => switchModule('quiz'));

// Справочник (поиск и фильтры)
const guideSearch = document.getElementById('guide-search');
const guideFiltersContainer = document.getElementById('guide-filters');
const articlesList = document.getElementById('articles-list');

function initGuide() {
    const categories = ["Все", ...new Set(guideArticles.map(item => item.category))];
    guideFiltersContainer.innerHTML = '';

    categories.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = 'filter-chip' + (cat === selectedGuideCategory ? ' active' : '');
        chip.textContent = cat;
        chip.addEventListener('click', () => {
            selectedGuideCategory = cat;
            document.querySelectorAll('.filter-chip').forEach(el => el.classList.remove('active'));
            chip.classList.add('active');
            renderArticles();
        });
        guideFiltersContainer.appendChild(chip);
    });

    renderArticles();
}

function renderArticles() {
    const query = guideSearch.value.trim().toLowerCase();

    const filtered = guideArticles.filter(article => {
        const matchesCategory = selectedGuideCategory === "Все" || article.category === selectedGuideCategory;
        const matchesQuery =
            !query ||
            article.title.toLowerCase().includes(query) ||
            article.text.toLowerCase().includes(query) ||
            article.category.toLowerCase().includes(query) ||
            article.highlights.some(h => h.toLowerCase().includes(query));
        return matchesCategory && matchesQuery;
    });

    if (filtered.length === 0) {
        articlesList.innerHTML = `<div class="article-card"><p style="margin:0; text-align:center;">По вашему запросу ничего не найдено. Попробуйте изменить фильтр или поисковое слово.</p></div>`;
        return;
    }

    articlesList.innerHTML = filtered.map(article => `
        <article class="article-card">
            <div class="article-meta">
                <span>${article.category}</span>
                <span>${article.readTime}</span>
            </div>
            <h3>${article.title}</h3>
            <p>${article.text}</p>
            <ul class="article-highlights">
                ${article.highlights.map(tag => `<li>✓ ${tag}</li>`).join('')}
            </ul>
        </article>
    `).join('');
}

guideSearch.addEventListener('input', renderArticles);

// Элементы викторины
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const fiftyFiftyBtn = document.getElementById('fifty-fifty-btn');

const questionText = document.getElementById('question-text');
const categoryTag = document.getElementById('category-tag');
const optionsContainer = document.getElementById('options-container');
const currentQuestionNum = document.getElementById('current-question-num');
const totalQuestionsNum = document.getElementById('total-questions-num');
const scoreDisplay = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const timerDisplay = document.getElementById('timer');
const timerCircle = document.querySelector('.timer-circle');
const factBox = document.getElementById('fact-box');
const factText = document.getElementById('fact-text');
const bestScoreDisplay = document.getElementById('best-score-display');

let bestScore = localStorage.getItem('africaQuizBestScore') || 0;
bestScoreDisplay.textContent = bestScore;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});
restartBtn.addEventListener('click', startGame);
fiftyFiftyBtn.addEventListener('click', useFiftyFifty);

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    fiftyFiftyUsed = false;

    scoreDisplay.textContent = '0';
    totalQuestionsNum.textContent = questions.length;
    fiftyFiftyBtn.disabled = false;

    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');

    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQ = questions[currentQuestionIndex];

    currentQuestionNum.textContent = currentQuestionIndex + 1;
    categoryTag.textContent = currentQ.category;
    questionText.textContent = currentQ.question;

    const progressPercent = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    const letters = ['A', 'B', 'C', 'D'];
    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.innerHTML = `<span style="color: #f59e0b;">${letters[index]}.</span> ${option}`;
        button.addEventListener('click', () => selectAnswer(index, button));
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function resetState() {
    clearInterval(timerInterval);
    timeLeft = 20;
    timerDisplay.textContent = timeLeft;
    timerCircle.classList.remove('warning');
    optionsContainer.innerHTML = '';
    nextBtn.classList.add('hidden');
    factBox.classList.add('hidden');
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 5) {
            timerCircle.classList.add('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    const currentQ = questions[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll('.option-btn');

    allButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === currentQ.correct) {
            btn.classList.add('correct');
        }
    });

    showFact(currentQ.fact);
    nextBtn.classList.remove('hidden');
}

function selectAnswer(selectedIndex, selectedButton) {
    clearInterval(timerInterval);
    const currentQ = questions[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll('.option-btn');

    allButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQ.correct) {
        selectedButton.classList.add('correct');
        const timeBonus = timeLeft * 5;
        score += 100 + timeBonus;
        correctCount++;
        scoreDisplay.textContent = score;
    } else {
        selectedButton.classList.add('wrong');
        allButtons[currentQ.correct].classList.add('correct');
    }

    showFact(currentQ.fact);
    nextBtn.classList.remove('hidden');
}

function showFact(fact) {
    factText.textContent = fact;
    factBox.classList.remove('hidden');
}

function useFiftyFifty() {
    if (fiftyFiftyUsed) return;
    fiftyFiftyUsed = true;
    fiftyFiftyBtn.disabled = true;

    const currentQ = questions[currentQuestionIndex];
    const allButtons = Array.from(optionsContainer.querySelectorAll('.option-btn'));
    const wrongButtons = allButtons.filter((_, idx) => idx !== currentQ.correct);

    wrongButtons.sort(() => Math.random() - 0.5);
    wrongButtons[0].classList.add('hidden-option');
    wrongButtons[1].classList.add('hidden-option');
}

function showResults() {
    progressBar.style.width = '100%';
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('africaQuizBestScore', bestScore);
    }

    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-answers-count').textContent = `${correctCount} / ${questions.length}`;
    document.getElementById('final-best-score').textContent = bestScore;
    bestScoreDisplay.textContent = bestScore;

    const titleEl = document.getElementById('result-title');
    const subtitleEl = document.getElementById('result-subtitle');
    const emojiEl = document.getElementById('result-emoji');

    const percentage = (correctCount / questions.length) * 100;
    if (percentage >= 80) {
        emojiEl.textContent = '';
        titleEl.textContent = 'Блестящий результат!';
        subtitleEl.textContent = 'Вы настоящий эксперт по географии Африки!';
    } else if (percentage >= 50) {
        emojiEl.textContent = '';
        titleEl.textContent = 'Хорошая работа!';
        subtitleEl.textContent = 'Вы отлично ориентируетесь на карте чёрного континента.';
    } else {
        emojiEl.textContent = '';
        titleEl.textContent = 'Есть куда стремиться!';
        subtitleEl.textContent = 'Попробуйте пройти викторину ещё раз или загляните в справочник.';
    }
}

// Инициализация справочника при загрузке
initGuide();