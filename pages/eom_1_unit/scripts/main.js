let titleUpper = document.querySelector('#upper_title');
let blackHeader  = document.querySelector('#header_text');
let miniHead  = document.querySelector('#title_of_eom_1');
let windowWidth  = window.innerWidth;
let originalTitle = title_of_eom;
let mainBody = document.getElementById('main_window_eom_one');
let backgroundColor = document.createElement('div');
let backgroundImage = document.createElement('div');
backgroundColor.classList = 'background_color';
mainBody.appendChild(backgroundColor);
backgroundImage.classList = 'background_image';
mainBody.appendChild(backgroundImage);
blackHeader.innerHTML = originalTitle;

var typeOfDrop = `<img width="100%" src="./content/background_${background_type}.jpg" alt="background">`;

backgroundImage.innerHTML = typeOfDrop;

function waitForData() {
    if (window.dataLoaded){
        miniHead.innerHTML = originalTitle;
    if (window.dataLoaded) {
        window.addEventListener('load',() => {
            let windowWidth  = window.innerWidth;
            if (windowWidth  <=  650){
                shortenTitle(blackHeader, 30);
            } else {
                restoreTitle(blackHeader, originalTitle);
            }
        });

        window.addEventListener('resize',() => {
            let windowWidth  = window.innerWidth;
            if (windowWidth  <=  650) {
                shortenTitle(blackHeader, 30);
            } else {
                restoreTitle(blackHeader, originalTitle);
            }
        });

        function restoreTitle(element, originalTitle) {
            element.innerText = originalTitle;  // Восстанавливаем оригинальный заголовок
        }
        restoreTitle(blackHeader, originalTitle);
        function shortenTitle(element, maxLength) {
            let title = element.innerHTML;  // Получаем заголовок элемента
            if (title.length > maxLength) {
                let shortenedTitle = title.substring(0, maxLength - 3) + '...';  // Обрезаем и добавляем многоточие
                element.innerHTML = shortenedTitle;  // Обновляем заголовок элемента
            }
        }

        function adjustContentWrapper() {
            const headerHeight = document.getElementById('header').offsetHeight;
            const contentWrapper = document.getElementById('contentWrapper');

            contentWrapper.style.paddingTop = headerHeight + 0 + 'px';
        }

        window.addEventListener('load', adjustContentWrapper);
        window.addEventListener('resize', adjustContentWrapper);

        const isMainWindow = document.getElementById('content');
        const contentWindow = document.createElement('div');
        contentWindow.classList.add('content__div');
        isMainWindow.appendChild(contentWindow);
    
        const contentWindowLeft = document.createElement('div');
        contentWindowLeft.classList.add('content__div_left');
        contentWindowLeft.innerHTML = `${methodRecomendation}`;
        contentWindow.appendChild(contentWindowLeft);
    
        const literaBtn = document.createElement('button');
        literaBtn.classList.add('content__litera_btn');
        literaBtn.id = 'content__litera_btn_1';
        literaBtn.innerHTML = 'Список использованной литературы';
        contentWindowLeft.appendChild(literaBtn);
    
        const contentWindowCenter = document.createElement('div');
        contentWindowCenter.classList.add('content__div_center');
        contentWindow.appendChild(contentWindowCenter);
    
        const contentWindowRight = document.createElement('div');
        contentWindowRight.classList.add('content__div_right');
        contentWindowRight.innerHTML = `<img src="./content/drop_logo_${dropType}.png" alt="drop_logo">`;
        contentWindow.appendChild(contentWindowRight);

        const themesNameArr = themesOfEOM1.split('\n');
        
        if (typeOfButtons === 'hexagon') {
            let numberOfColumns, numberOfRows;
        
            function changeRowsAndColumns() {
                if (window.innerWidth > 1175) {
                    if (themesNameArr.length === 12) {
                        numberOfColumns = 4;
                        numberOfRows = 3;
                    } else if (themesNameArr.length <= 9) {
                        numberOfColumns = 4;
                        numberOfRows = Math.ceil(themesNameArr.length / numberOfColumns);
                    } else if (themesNameArr.length <= 15) {
                        numberOfColumns = 5;
                        numberOfRows = 3;
                    } else if (themesNameArr.length <= 20) {
                        numberOfColumns = 5;
                        numberOfRows = 4;
                    } else {
                        numberOfColumns = 4;
                        numberOfRows = Math.ceil(themesNameArr.length / numberOfColumns);
                    }
                } else if (window.innerWidth > 720 && window.innerWidth <= 1175) {
                    numberOfColumns = 3;
                    numberOfRows = Math.ceil(themesNameArr.length / numberOfColumns);
                } else if (window.innerWidth <= 720) {
                    numberOfColumns = 2;
                    numberOfRows = Math.ceil(themesNameArr.length / numberOfColumns);
                }

            }
        
            function createHexagons() {
                // Очищаем контейнер перед добавлением новых колонок и кнопок
                contentWindowCenter.innerHTML = ''; 
        
                // Создаем сетку гексагонов
                for (let i = 0; i < numberOfColumns; i++) {
                    let columnsOfHexagon = document.createElement('div');
                    columnsOfHexagon.classList.add('columns__hexagon', 'col_' + i);
                    contentWindowCenter.appendChild(columnsOfHexagon);
        
                    for (let j = 0; j < numberOfRows; j++) {
                        let hexagonBtn = document.createElement('button');
                        hexagonBtn.classList.add('button__hexagon_type', 'themes_button');
                        columnsOfHexagon.appendChild(hexagonBtn);
                    }
                }
        
                let allHexagoneBtn = document.querySelectorAll('.button__hexagon_type');
                allHexagoneBtn.forEach(function(item, index) {
                    if (index < themesNameArr.length) {
                        item.innerHTML = (index + 1) + '. ' + themesNameArr[index];
                    } else {
                        item.classList.add('hidden_block');
                    }
                });
        
                adjustHexagonFieldHeight();
            }
            let hexagonField = document.querySelector('.content__div_center');
            console.log(hexagonField.clientHeigh);
            function adjustHexagonFieldHeight() {
                // Изменение высоты контейнера в зависимости от количества строк

                let hexagonHeight = hexagonField.clientHeigh * 250; // Высчитываем нужную высоту
                
                hexagonField.style.height = `${hexagonHeight}px`; // Применяем новую высоту
            
            }
        
            // Первичная инициализация сетки
            changeRowsAndColumns();
            createHexagons();
        
            // Добавляем обработчик изменения размеров окна
            window.addEventListener('resize', () => {
                changeRowsAndColumns();
                createHexagons(); // Пересоздаем сетку при изменении размера окна
            });

        } else if (typeOfButtons === 'lightning') {
            contentWindowCenter.classList.add('lightning');
            let leftColumn = document.createElement('div');
            leftColumn.classList = 'left_column';
            contentWindowCenter.appendChild(leftColumn);
            let rightColumn = document.createElement('div');
            rightColumn.classList = 'right_column';
            contentWindowCenter.appendChild(rightColumn);

            // Подсчитываем количество элементов в массиве
            const totalThemes = themesNameArr.length;
            // Определяем количество элементов, которые должны попасть в левую колонку
            const leftColumnCount = Math.floor(totalThemes / 2);

            // Проходим по массиву и создаем кнопки
            themesNameArr.forEach((theme, index) => {
                // Создаем кнопку
                let button = document.createElement('button');
                button.classList = 'lightning_button themes_button';
                // Добавляем обработчик клика для кнопки
                button.onclick = function() {
                    // location.href = '#'; // Здесь нужный URL
                };
                button.innerHTML = `<p class="themes_lightning">${index + 1}. ${theme}</p>`;

                // Распределяем по колонкам
                if (index < leftColumnCount) {
                    leftColumn.appendChild(button);
                } else {
                    rightColumn.appendChild(button);
                }
            });

            // Если количество элементов нечетное, последний элемент добавляется в правую колонку
            if (totalThemes % 2 !== 0) {
                rightColumn.appendChild(rightColumn.removeChild(rightColumn.lastChild));
            }

            if (themesNameArr.length <= 10){
                let lightningButton = document.querySelectorAll('.lightning_button');
                lightningButton.forEach((item) => {
                    item.classList.add('big');
                });
            } else if (themesNameArr.length <= 15) {
                let lightningButton = document.querySelectorAll('.lightning_button');
                lightningButton.forEach((item) => {
                    item.classList.add('medium');
                });
            } else if (themesNameArr.length >= 18) {
                let lightningButton = document.querySelectorAll('.lightning_button');
                lightningButton.forEach((item) => {
                    item.classList.add('small');
                });
            } 
            let contentDivTiles = document.querySelector('.content__div');
            contentDivTiles.style.height = (window.innerHeight + (document.querySelector('#header').clientHeight) - 280) + 'px';
            let tilesField = document.querySelector('.content__div_center');
            // Увеличиваем высоту на 100 пикселей
            let newHeight = tilesField.clientHeight + 30;
            // Применяем новую высоту
            tilesField.style.height = newHeight + 'px';

        } else if (typeOfButtons === 'tiles') {
            const themesNameArr = themesOfEOM1.split('\n');
            let numberOfColumns, numberOfRows, centralRowIndex;
            // Определение количества строк и колонок
            if (themesNameArr.length === 12) {
                numberOfColumns = 4;
                numberOfRows = 4;
            } else if (themesNameArr.length <= 9) {
                numberOfColumns = Math.ceil(themesNameArr.length / 4);
                numberOfRows = Math.ceil(themesNameArr.length / numberOfColumns);
            } else if (themesNameArr.length <= 15) {
                numberOfColumns = 5;
                numberOfRows = 3;  // Увеличиваем количество строк
            } else if (themesNameArr.length <= 18) {
                numberOfColumns = 5;
                numberOfRows = 4;  // Увеличиваем количество строк
            } else if (themesNameArr.length <= 20) {
                numberOfColumns = 5;
                numberOfRows = 4;  // Увеличиваем количество строк
            } else {
                numberOfColumns = Math.ceil(themesNameArr.length / 4);
                numberOfRows = Math.ceil(themesNameArr.length / numberOfColumns);
            }


            // Определение индекса центральной строки
            centralRowIndex = Math.floor(numberOfRows / 3);
            if (themesNameArr.length >= 11) {
                centralRowIndex = Math.floor(numberOfRows / 1);
            }
            let contentWindowCenter = document.querySelector('.content__div_center');
            contentWindowCenter.classList.add('tiles');

            // Создание строк и кнопок
            for (let i = 0; i < numberOfRows; i++) {
                let rowOfTiles = document.createElement('div');
                rowOfTiles.classList.add('rows__tiles');
                contentWindowCenter.appendChild(rowOfTiles);

                let buttonsInRow = numberOfColumns;
                
                // Увеличиваем количество кнопок в центральной строке
                if (i === centralRowIndex) {
                    buttonsInRow = numberOfColumns + 2; // Добавляем 2 кнопки больше, чем в других строках
                } 
                
                for (let j = 0; j < buttonsInRow; j++) {
                    let tileBtn = document.createElement('button');
                    tileBtn.classList.add('button__tiles_type');
                    if (themesNameArr.length >= 15) {
                        tileBtn.classList.add('small_tile');
                        rowOfTiles.classList.add('small_tile_center');
                    }
                    if (themesNameArr.length === 12){
                        contentWindow.classList.add('big_left_side');
                    }
                    tileBtn.classList.add('themes_button');
                    rowOfTiles.appendChild(tileBtn);
                }
            }
            // Обновление кнопок с темами
            let allTilesBtn = document.querySelectorAll('.button__tiles_type');
            


            allTilesBtn.forEach(function(item, index) {
                if (index < themesNameArr.length) {
                    item.innerHTML = (index + 1) + '. ' + themesNameArr[index];
                    // item.setAttribute('onclick', `location.href='#'`);
                } else {
                    item.classList.add('hidden_block');
                }
            });

            console.log(window.innerHeight)
            
            let contentDivTiles = document.querySelector('.content__div');
            contentDivTiles.style.height = (window.innerHeight - document.querySelector('#header').clientHeight - 100) + 'px';
            let tilesField = document.querySelector('.content__div_center');
            // Увеличиваем высоту на 100 пикселей
            let newHeight = tilesField.clientHeight - 30;
            // Применяем новую высоту
            tilesField.style.height = newHeight + 'px';

        } else if (typeOfButtons === 'video') {
            let contentDiv = document.querySelector('#content');
            
            contentDiv.innerHTML = '';
            contentDiv.innerHTML = `<div class="video_title">${videoTitle}</div>`;
            contentDiv.classList.add('video_div');
            let videoDiv = document.createElement('div');
            videoDiv.classList = 'video_content';
            videoDiv.innerHTML = `<video id="video_content_0" src="${pathToVideo}" controls="controls" controlslist="nodownload"></video>`;
            contentDiv.appendChild(videoDiv);

            let timingDiv = document.createElement('div');
            timingDiv.classList = 'video_timing';
            contentDiv.appendChild(timingDiv);

            let viewportHeight = window.innerHeight;
            let blackHeaderHeight = document.querySelector('#header').clientHeight;
            document.querySelector('#content').style.height = (viewportHeight - blackHeaderHeight*2 + 100) + 'px';
            let buttonsHTML = timings.map((item, index) => 
                `<button class="timing_buttons" value="${item.time}" id="timing0${index+1}">${item.name}</button>`
            ).join('');
            let timingStructure = 
            `<div class="timing_menu">
                <div class="timing_button">
                    <details id="timing_menu" open="">
                        <summary><img src="./content/logo_player.png" alt="Timing"></summary>
                        <div class="content_details">
                            ${buttonsHTML}
                        </div>
                    </details>
                </div>
            </div>`
            timingDiv.innerHTML = timingStructure;
        }

        let mainDivContent = document.querySelector('#contentWrapper');
        let popUpStructure = 
        `<div id="popup_litera_1" class="popup disabled">
                <div class="popup_body">
                    <div class="popup_content">
                        <div class="popup_header">
                            <h3>Список литературы</h3>
                            <button class="close_popup litera" onclick="document.querySelector('#popup_litera_1').classList.add('disabled')"><img src="./content/close.svg" alt="close"></button>
                        </div>
                    <div class="popup_text" id="popup_text_2">
                        <ol>
                            ${literaListEOM1.split('\n').map(item => `<li>${item}</li>`).join('')}
                        </ol>
                    </div>
                </div>
            </div>
        </div>`;
        mainDivContent.innerHTML += popUpStructure;
        if (typeOfButtons != 'video'){
            let literaBtnOn = document.querySelector('.content__litera_btn');
            literaBtnOn.onclick = function() {
                let popupWindow = document.querySelector('#popup_litera_1');
                popupWindow.classList.remove('disabled');
            };
        }

        const video = document.querySelector('#video_content_0');
        const timingButtons = document.querySelectorAll('.timing_buttons');
        timingButtons.forEach((item) => {
            item.onclick = () => {
                const offset = parseFloat(item.value); // Получаем значение тайминга из атрибута value кнопки
                const videoDuration = video.duration; // Получаем общую длину видео в секундах
                const newTime = videoDuration * (offset / 100); // Рассчитываем новое время видео
                video.pause(); // Останавливаем видео
                video.currentTime = newTime; // Устанавливаем новое время
            };
        });

    } else {
        // Если данные ещё не загружены, ждем и проверяем снова
        setTimeout(waitForData, location.reload(),  50);
    }

    let viewportHeight = window.innerHeight;
    let blackHeaderHeight = document.querySelector('#header').clientHeight;
    
    window.addEventListener('resize', function(){
        if (typeOfButtons === 'video') { // Проверьте правильность переменной
            if (window.innerWidth <= 1100){
                let videoContentDiv = document.querySelector('.video_div');
                videoContentDiv.style.setProperty('height', 'initial', 'important'); // Устанавливаем важное свойство стиля
                
            }
        }
    });

    window.addEventListener('resize', function(){
        if (typeOfButtons === 'lightning') { // Проверьте правильность переменной
            let videoContentDiv = document.querySelector('.content__div');
            if (window.innerWidth <= 1100){
                videoContentDiv.style.height = (viewportHeight - blackHeaderHeight * 2 + 225 + 10) + 'px'; // Устанавливаем важное свойство стиля
            } else {
                videoContentDiv.style.height = (viewportHeight - blackHeaderHeight * 2 + 10) + 'px';
            }
        }
    });

    let resizeTimeout;

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const width = window.innerWidth;
            if (width >= 1090 && width <= 1110) {
                window.location.reload();
            } else if (width >= 1190 && width <= 1210) {
                window.location.reload();
            }
        }, 2); // Adjust debounce time as needed
    });

    }
}

let toMenuBtn = document.querySelector('#backward_button');
toMenuBtn.onclick = () => {
    if (document.getElementById('content__litera_btn_1')) {
        // Элемент с id 'myElement' существует
        location.href='../../index.html';
    } else {
        // Элемент с id 'myElement' не существует
        window.location.reload();
    }
    //
};

waitForData();

