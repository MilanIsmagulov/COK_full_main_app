// Функция для рендеринга всех формул на странице
function renderMathInText() {
    // Получаем всё содержимое body
    let bodyContent = document.body.innerHTML;

    // Регулярные выражения для поиска формул в $...$ или $$...$$
    const inlineMathRegex = /\$(.+?)\$/g; // для формул в строке
    const blockMathRegex = /\$\$(.+?)\$\$/g; // для формул в блоке

    // Заменяем формулы в тексте на рендеренные элементы
    bodyContent = bodyContent.replace(blockMathRegex, (match, math) => {
        return `<span class="katex-block">${katex.renderToString(math, { displayMode: true })}</span>`;
    });

    bodyContent = bodyContent.replace(inlineMathRegex, (match, math) => {
        return `<span class="katex-inline">${katex.renderToString(math, { displayMode: false })}</span>`;
    });

    // Обновляем содержимое страницы
    document.body.innerHTML = bodyContent;
}