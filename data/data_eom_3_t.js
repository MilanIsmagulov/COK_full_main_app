window.dataLoaded = false;
let title_of_eom = themeOfDEC;
const data = {
    "index_1":{
        "subtitle": "subtitle 2 <p class='black_sub'>dgdgdgdgdfgdg</p>",
        "step_of_popup": "step 2",
        "test":[
            {"type": 1},
            {"answers": [
                "First ",
                "<img class='answer_image' src='./content/test_image.png' alt='sfsf'>",
                "Third Answer",
                "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores consequatur temporibus pariatur voluptatem eius ea asperiores, fugit est ducimus dolor possimus officiis reiciendis nesciunt perferendis facilis?</p><p class='math_equation'>$$\\def\\d{\\mathrm{d}}\\oint_C \\vec{B}\\circ \\d\\vec{l} = \\mu_0 \\left( I_{\\text{enc}} + \\varepsilon_0 \\frac{\\d}{\\d t} \\int_S {\\vec{E} \\circ \\hat{n}}\\; \\d a \\right)$$</p>"
            ]},
            {"correct_answer": [1]},
            {"image": true, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_2":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 1},
            {"answers": [
                "First dfgdgdgdgdg Answer",
                "Second ываыаыываываыаыа Answer",
                "Third Answer",
                "<img class='answer_image' src='./content/test_image.png' alt='sfsf'>",
                "Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? Error illo earum laudantium facilis."
            ]},
            {"correct_answer": [0, 1]},
            {"image": true, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_3":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 2},
            {"description": "<b>Lorem ipsum dolor sit amet</b> consectetur adipisicing elit. Recusandae dolores consequatur temporibus pariatur voluptatem eius ea asperiores, fugit est ducimus dolor possimus officiis reiciendis nesciunt perferendis facilis? Beatae ea culpa a modi! Harum ex inventore laborum officiis ipsa. Soluta voluptate consequuntur a ex est qui. Earum dignissimos exercitationem aperiam dolore veniam deserunt beatae, blanditiis vero ea natus illum ipsum aliquid asperiores ab vel architecto iure aliquam error iusto? "},
            {"test_with_text": "{=Бубльгум, =Баблгам, =бубльгум, =баблгам}"},
            {"image": true, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_4":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 2},
            {"description": "Тут пишем описание задания"},
            {"test_with_text_2": "Россия {=священная} наша {=держава}. Россия {=священная} наша {=держава}. Россия {=священная} наша {=держава}.Россия {=священная} наша {=держава}.Россия {=священная} наша {=держава}"},
            {"image": true, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_5":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 3},
            {"image": true, "image_path": "./content/video/test_video.mp4"},
            {"answers": [
                "First Answer",
                "Second Answer",
                "Third dfgdfgdg Answer",
                "Thirdwqwqw Answer",
                "Thirdhgghghh Answer",
                "Four Answer"
            ]}
        ],
    },
    "index_6":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 3},
            {"image": true, "image_path": "./content/test_image.png"},
            {"answers": [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores consequatur temporibus pariatur voluptatem eius ea asperiores?",
                "First Answer",
                "Second Answer",
                "Third Answer",
                "Four Answer"
            ]}
        ],
    },
    "index_7":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 4},
            {"image": "['./content/tests_content/03_01.png', './content/tests_content/03_02.png', './content/tests_content/03_03.png', './content/tests_content/03_03.png', './content/tests_content/03_03.png']"},
            {"answers": [
                "Шибер",
                "Клин",
                "Диск",
                "ДисВАЫВААЫВк",
                "КлиВЫАЫАЫАВФЫФн",
            ]}
        ],
    },
    "index_8":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 5},
            {"leftColumn": 2},
            {"rightColumn": 4},
            {"image": "./content/tests_content/03_01_0002.png"},
            {"answers": [
            'регулировочная рукоятка',
            'лицевая панель',
            'панель со шкалой',
            'ползунок',
            'обмотка',
            'защитный кожух']}
        ],
    },
    "index_9":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 6},
            {"image": "./content/tests_content/03_01_0002.png"},
            {"answers": [
            ['двум лицам, одно должно иметь квалификационную группу по электробезопасности ІІІ, второе – группу IV или V старшее по должности'],
            ['двум лицам, одно должно иметь квалификационную группу по электробезопасности не ниже IV'],
            ['двум лицам, одно должно иметь квалификационную группу по электробезопасности не ниже ІІІ'],
            ['двум лицам, одно должно иметь квалификационную группу по электробезопасности не ниже ІІІfsdfsfsfsfsfssfsd']
            ]},
            {"columns": ["до 1000 В","до 380 В","выше 1000 В","выше 1000 dgdgdgdfgdgdgd"]}
        ],
    },
    "index_10":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 7},
            {"anwserArr2": ['Вы случайно включили канал...', 'Старуха из «Сказки о рыбаке...»', 'Успешный художник...', 'Вы стараетесь хорошо учиться...', 'Вам нравится перед засыпанием...','Вы остались после работы...', 'Сотруднику пообещали премию...', 'Внезапно начавшийся дождик...', 'Некоторым детям родители...','Вы сегодня не выспались...', 'Чтобы избежать угона...', 'Ваш сын-школьник читает книгу...']},
            {"answersInCol": [
                ['Вы случайно включили канал...', 'Старуха из «Сказки о рыбаке...»', 'Успешный художник...', 'Вы стараетесь хорошо учиться...', 'Вам нравится перед засыпанием...'],
                ['Вы остались после работы...', 'Сотруднику пообещали премию...', 'Внезапно начавшийся дождик...', 'Некоторым детям родители...'],
                ['Вы сегодня не выспались...', 'Чтобы избежать угона...', 'Ваш сын-школьник читает книгу...']
            ]},
            {"columns": ['Внешняя', 'Внутренняя', 'Черешня']}
        ],
    },
    "index_11":{
        "subtitle": "subtitle 3333",
        "step_of_popup": "step 2",
        "test":[
            {"type": 8},
            {"description": "Тут пишем описание задания"},
            {"test_with_text_3": "Россия {=1} наша {=2} Россия - любимая наша страна Могучая {=3} великая {=4} Твое {=5} на все {=6}"},
            {"options_test_with_text_3": {
                "1": ["священная", "земля", "родина"],
                "2": ["держава", "страна", "родина"],
                "3": ["воля", "доброта", "сила"],
                "4": ["слава", "доброта", "сила"],
                "5": ["достоянье", "награда", "трофей"],
                "6": ["времена", "годы", "столетия"]
            }},
            {"correctAnswers_test_with_text_3": {
                "1": "священная",
                "2": "держава",
                "3": "воля",
                "4": "слава",
                "5": "достоянье",
                "6": "времена"
            }},
            {"image": true, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_12":{
        "subtitle": "Тут типа результаты",
        "step_of_popup": "Тут типа результаты",
        "result":[]
    },
}
window.dataLoaded = true;