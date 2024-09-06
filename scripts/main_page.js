const fgosPlc = document.querySelector('#fgos_number');
const fgosTxtPlc = document.querySelector('#fgos_text_place');

const mdkPlc = document.querySelector('#mdk_number');
const mdkTxtPlc = document.querySelector('#mdk_text_place');

const titlePlc = document.querySelector('#title_text_place');
const mainContentName = document.querySelector('.main_content_name');


const popupContentInfo = document.querySelectorAll('.popup_tex_content');
const popupKeyWords = document.querySelector('#popup_text_2');

fgosPlc.innerHTML = numFgos
fgosTxtPlc.innerHTML = numFgosTxt
mdkPlc.innerHTML = numMDK
mdkTxtPlc.innerHTML = numMDKTxt
mainContentName.innerHTML = themeOfDEC
titlePlc.innerHTML = themeOfDEC


const popupMethodsWindow = document.querySelectorAll('.methods');

// Проходим по каждому окну и добавляем соответствующий текст
popupMethodsWindow.forEach((popup, index) => {
    let popUpTextArr = textOfMethodMaterials[index].split('\n');

    let popUpElemUl = document.createElement('ul');
    popUpElemUl.classList.add('popup_method_list');

    popUpTextArr.forEach(item => {
        let popUpElemLi = document.createElement('li');
        popUpElemLi.innerHTML = item.trim(); // убираем лишние пробелы в строках
        popUpElemUl.appendChild(popUpElemLi);
    });

    popup.appendChild(popUpElemUl);
});

let popUpKeyWordsArr = keyWords.split('\n');

popUpKeyWordsArr.forEach(function (index){
    let paragraph = document.createElement('p')
    let a = popUpKeyWordsArr.filter((index) =>{if (index %2 === 0){
        return true;
    }})
    let b = popUpKeyWordsArr.filter((index) =>{if (index %2 !== 0){
        return true;
    }})

    if (a[index] === undefined || b[index] === undefined ){
        return 0;
    } else {
        paragraph.innerHTML = `<span>${a[index]}</span><br> ${b[index]}`
    }
    
    paragraph.classList.add('popup_tex_content', 'key_word_text')
    popupKeyWords.appendChild(paragraph)

})

let infoPopUpPlc = document.querySelectorAll('.popup_tex_content');
let infoContentText = infoContent.split('\n');
infoContentText.forEach(function(item, index){
    if(infoPopUpPlc[index]) { // Проверяем, существует ли элемент с данным индексом
        infoPopUpPlc[index].innerHTML = item.trim(); // Удаляем лишние пробелы и записываем текст
    }
});