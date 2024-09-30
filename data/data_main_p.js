// Тема ЦОК отображается во многих элементах
const themeOfDEC = 'Тема ЦОК к примеру она находится в black header и title dadadasdad'
// Номер ФГОС и Тескт ФГОС
const numFgos = '234234234'
const numFgosTxt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptatum.'
// Номер МДК и Текст МДК
const numMDK = '234244564'
const numMDKTxt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptatum.'
// Массив с рекомендациями
const textOfMethodMaterials = [
    `1 Ознакомьтесь с теоретическими материалами по теме «Эксплуатация и ремонт силового электрооборудования»
    Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.
    При необходимости прослушайте/просмотрите материал еще раз. Возвращайтесь к наиболее сложным аспектам темы.
    Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз`,
    `2 Ознакомьтесь с теоретическими материалами по теме «Эксплуатация и ремонт силового электрооборудования».
    Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.
    При необходимости прослушайте/просмотрите материал еще раз. Возвращайтесь к наиболее сложным аспектам темы.
    Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз`,
    `3 Ознакомьтесь с теоретическими материалами по теме «Эксплуатация и ремонт силового электрооборудования».
    Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.
    При необходимости прослушайте/просмотрите материал еще раз. Возвращайтесь к наиболее сложным аспектам темы.
    Соблюдайте здоровьесберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз`
];
// Ключевые слова
const keyWords = `Lorem ipsum \n dolor sit, amet consectetur adipisicing elit. Rerum, numquam maiores iure est quas aliquam! Labore beatae et repellat voluptas ullam natus dolorum fuga possimus!
Lorem ipsum dolor sit amet consectetur \n adipisicing elit. Quod error doloremque recusandae magni, natus magnam modi rem cum animi odit eaque aut fugiat est iusto, maiores dolor illum ipsa. Architecto sunt mollitia beatae veritatis eum. Sed omnis reiciendis maiores vero error perspiciatis similique. Provident nostrum tempora temporibus veniam, asperiores omnis?
Lorem ipsum \n dolor sit, amet consectetur adipisicing elit. Rerum, numquam maiores iure est quas aliquam! Labore beatae et repellat voluptas ullam natus dolorum fuga possimus!
Lorem ipsum \n dolor sit, amet consectetur adipisicing elit. Rerum, numquam maiores iure est quas aliquam! Labore beatae et repellat voluptas ullam natus dolorum fuga possimus!
Lorem ipsum dolor sit amet consectetur \n adipisicing elit. Quod error doloremque recusandae magni, natus magnam modi rem cum animi odit eaque aut fugiat est iusto, maiores dolor illum ipsa. Architecto sunt mollitia beatae veritatis eum. Sed omnis reiciendis maiores vero error perspiciatis similique. Provident nostrum tempora temporibus veniam, asperiores omnis?
Lorem ipsum \n dolor sit, amet consectetur adipisicing elit. Rerum, numquam maiores iure est quas aliquam! Labore beatae et repellat voluptas ullam natus dolorum fuga possimus!`
/* 1) ФГОС СПО
2) ПООП Профессионалитета
3) Профессиональный модуль
4) МДК
5) Раздел
6) Тема*/
const infoContent = 
`08.02.09 Монтаж, наладка и эксплуатация электрооборудования промышленных и гражданских зданий 
08.02.09 Монтаж, наладка и эксплуатация электрооборудования промышленных и гражданских зданий»
01 Организация и выполнение работ по эксплуатации и ремонту электроустановок
01.03 Эксплуатация и ремонт электрооборудования промышленных и гражданских зданий
Эксплуатация и ремонт электрооборудования промышленных и гражданских зданий
${themeOfDEC}`
const blockButtonEOM2 = 1; // "Это для разработки и отладки удобно, блокирует кнопки назад и далее в ЭОМ_2 1 true 0 false"
const typeOfEOM3 = 1; // Если 1 то это тест если что то иное то мини-игра
