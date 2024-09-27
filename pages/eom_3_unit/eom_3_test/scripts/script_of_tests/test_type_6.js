var testObj = data[`index_${currentPageIndex}`].test; // 
var anwserArr2 = testObj.find(item => item.anwserArr2).anwserArr2; //Ответы в правильном порядке
var correctAnswers = testObj.find(item => item.answersInCol).answersInCol; //Ответы в правильном порядке
if (blockButtonEOM2 === 1){
    backWardBtn.classList.add('gray_dis');
    backWardBtn.disabled = true;
    nextBtn.classList.add('gray_dis');
    nextBtn.disabled = true;
}
document.getElementById('control_button_3').style.display = 'none';
document.getElementById('control_button_2').style.display = 'inline-block';
// Объект для хранения правильных ответов
var answerToColumn = {};
correctAnswers.forEach((answers, columnIndex) => {
    answers.forEach(answer => {
        answerToColumn[answer] = columnIndex + 1;
    });
});
var mainDiv = document.querySelector('#content');
var columnsContainer = document.createElement('div');
columnsContainer.id = 'colmuns';
var rowContainer = document.createElement('div');
rowContainer.id = 'rows';
mainDiv.appendChild(columnsContainer);
mainDiv.appendChild(rowContainer);
var data2 = {};
var dragElem = null;
init();
function init() {
    createColumns(testObj.find(item => item.columns).columns); // Можно добавить любое количество колонок
    loadOrCreateList();
    initializeSortable(); // Инициализация библиотеки Sortable
}
function createColumns(headers) {
    headers.forEach((header, index) => {
        var col = document.createElement('div');
        col.classList.add('col');
        var colHeader = document.createElement('h3');
        if (index % 2 !== 0) {
            colHeader.classList.add('odd_header');  // Добавляем класс если индекс нечетный
        }
        colHeader.textContent = header;
        col.appendChild(colHeader);
        var colList = document.createElement('ul');
        colList.classList.add('col-ul');
        colList.id = `col${index + 1}`;
        colList.setAttribute('index', index);
        col.appendChild(colList);
        columnsContainer.appendChild(col);
        data2[index] = [];
    });
}
function loadOrCreateList() {
    if (localStorage.getItem('data2')) {
        loadList();
    } else {
        createList();
    }
}
// Функция для перемешивания массива
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Меняем местами элементы
    }
}
var divId = document.querySelector('#rows');
// Функция для создания списка с перемешиванием
function createList() {
    shuffleArray(anwserArr2);  // Перемешиваем ответы
    anwserArr2.forEach((item, index) => {
        var listItem = document.createElement('li');  // Создаем элемент списка
        listItem.id = index;  // Задаем ID элементу
        listItem.classList.add('item7');  // Добавляем класс
        listItem.draggable = true;  // Делаем элемент перетаскиваемым
        listItem.textContent = item;  // Устанавливаем текстовое содержимое
        rowContainer.appendChild(listItem);  // Добавляем элемент в контейнер для строк
        data2['row'] = data2['row'] || [];  // Создаем массив строк, если его еще нет
        data2['row'].push(item);  // Добавляем элемент в массив строк
    });
    // Функция для проверки, пустой ли элемент
    function checkIfEmpty(divId) {
        var div = document.getElementById(divId);
        // Проверяем, есть ли в div дочерние элементы или текст
        if (!div.hasChildNodes() || div.textContent.trim() === "") {
            answerButton.classList.remove('gray_dis');
            answerButton.disabled = false;
            restartButton.classList.add('hidden');
            restartButton.disabled = false;
            // Вставьте здесь нужное действие
            div.style.backgroundColor = 'red';  // Например, меняем цвет фона
        }
    }
    // Используем MutationObserver для отслеживания изменений в DOM
    function observeDiv(divId) {
        var targetDiv = document.getElementById(divId);
        // Проверяем, существует ли элемент в DOM
        if (targetDiv) {
            // Настройки наблюдения за изменениями в элементе
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    checkIfEmpty(divId);  // Проверяем, пустой ли div после изменений
                });
            });
            // Запуск наблюдения за добавлением или удалением дочерних элементов
            observer.observe(targetDiv, { childList: true, subtree: true });
        } else {
            console.error(`Элемент с id "${divId}" не найден.`);
        }
    }
    saveToLocalStorage();  // Сохраняем данные в localStorage
    addEventListeners();  // Добавляем обработчики событий
    // Пример вызова для div с id 'myDiv'
    observeDiv('rows');
    // Можно также вручную вызвать проверку на пустоту в любой момент
    checkIfEmpty('rows');
}
function loadList() {
    data2 = JSON.parse(localStorage.getItem('data2'));
    shuffleArray(anwserArr2);  // Перемешиваем ответы
    anwserArr2.forEach((item, index) => {
        var listItem = document.createElement('div');
        listItem.id = index;
        listItem.classList.add('item7');
        listItem.draggable = true;
        listItem.textContent = item;
        if (data2['row'].includes(item)) {
            rowContainer.appendChild(listItem);
        } else {
            var colIndex = answerToColumn[item] - 1;
            document.getElementById(`col${colIndex + 1}`).appendChild(listItem);
        }
    });
    addEventListeners();
}
function saveToLocalStorage() {
    localStorage.setItem('data2', JSON.stringify(data2));
}
function addEventListeners() {
    var items = document.querySelectorAll('.item7');
    items.forEach(item => {
        item.addEventListener('dragstart', startDrag);
        item.addEventListener('dragend', endDrag);
    });
    var columns = document.querySelectorAll('.col-ul');
    columns.forEach(column => {
        column.addEventListener('dragover', dragOver);
        column.addEventListener('drop', dropItem);
    });
    rowContainer.addEventListener('dragover', dragOver);
    rowContainer.addEventListener('drop', dropItem);
}
function startDrag(e) {
    dragElem = this;
    setTimeout(() => this.classList.add('hide'), 0);
}
function endDrag() {
    dragElem.classList.remove('hide');
    dragElem = null;
}
function dragOver(e) {
    e.preventDefault();
}
function dropItem(e) {
    if (e.target.classList.contains('col-ul') || e.target === rowContainer) {
        e.target.appendChild(dragElem);
        var startIndex = dragElem.parentElement.getAttribute('index') || 'row';
        var endIndex = e.target.getAttribute('index') || 'row';
        data2[startIndex] = data2[startIndex].filter(item => item !== dragElem.textContent);
        data2[endIndex] = data2[endIndex] || [];
        data2[endIndex].push(dragElem.textContent);
        saveToLocalStorage();
    }
}
// Функция для проверки правильности ответов
function checkAnswer7() {
    var incorrectCount = 0;
    isCorrect = true;
    // Проходим по каждой колонке
    for (var i = 1; i <= correctAnswers.length; i++) {
        var column = document.getElementById(`col${i}`);
        var items = column.querySelectorAll('.item7');  // Все элементы списка внутри колонки
        // Проверяем каждый элемент
        items.forEach(item => {
            var itemValue = item.textContent || item.innerText;
            // Проверка правильности элемента с использованием объекта answerToColumn
            if (answerToColumn[itemValue] === i) {
                // Правильный ответ — зеленый цвет
                item.style.backgroundColor = 'rgb(189, 255, 189)';
            } else {
                // Неправильный ответ — красный цвет
                isCorrect = false;
                item.style.backgroundColor = 'rgb(255, 185, 185)';
                incorrectCount++;  // Увеличиваем счетчик неверных ответов
            }
            localStorage.setItem(`answer_from_index_${currentPageIndex}`, JSON.stringify({questionPlace: isCorrect}));
        });
    }
}
answerButton.onclick = function() {
    backWardBtn.classList.remove('gray_dis');
    backWardBtn.disabled = false;
    nextBtn.classList.remove('gray_dis');
    nextBtn.disabled = false;
    checkAnswer7();
    answerButton.classList.add('hidden');
    restartButton.classList.remove('hidden');
    document.getElementById('control_button_2').style.display = 'none';
    document.getElementById('control_button_3').style.display = 'inline-block';
};
// Инициализация Sortable.js
function initializeSortable() {
    // Для области с ответами
    new Sortable(rowContainer, {
        group: 'shared',
        swap: true,
        swapClass: "highlight",
        animation: 150,
    });
    // Для колонок
    var columns = document.querySelectorAll('.col-ul');
    columns.forEach((col) => {
        new Sortable(col, {
            group: 'shared',
            animation: 150,
        });
    });
}
