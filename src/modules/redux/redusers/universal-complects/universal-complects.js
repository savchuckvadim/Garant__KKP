const SET_CURRENT_UNIVERSAL_COMPLECT = 'SET_CURRENT_UNIVERSAL_COMPLECT'

const initialState = {
    currentComplect: null,
    complects: [
        {
            name: 'Классик',
            weight: 1,
            'className': 'btn__universal',
            number: 8
        },
        {
            name: 'Классик+',
            weight: 1.5,
            'className': 'btn__universal',
            number: 9
        },
        {
            name: 'Универсал',
            weight: 2,
            'className': 'btn__universal',
            number: 10
        },
        {
            name: 'Универсал+',
            weight: 3,
            className: 'btn__universal',
            number: 11
        },
        {
            name: 'Профессионал',
            weight: 4,
            className: 'btn__universal',
            number: 12
        },
        {
            name: 'Мастер',
            weight: 6,
            className: 'btn__universal',
            number: 13
        },
        {
            name: 'Аналитик',
            weight: 9,
            className: 'btn__universal',
            number: 14
        },
        {
            name: 'Аналитик+',
            weight: 12,
            className: 'btn__universal',
            number: 15
        },
        {
            name: 'Максимум',
            weight: 24,
            className: 'btn__universal',
            number: 16,
            currentFilling: '' , //в текущее наполнение вставляет наполнение по-умолчанию из allComplects[idx]
            filling:[
                'Законодательство России',
                'Региональное законодательство',
                'Отраслевое законодательство',
                'Проекты законов',
                'Международное право',
                
                'Решения Федеральной антимонопольной службы',
                'Справочник промышленника',
                'Практика высших судебных органов',
                'Практика арбитражных судов округов',
                'Практика арбитражных апелляционных судов округов',
                'Практика судов общей юрисдикции',
                'Энциклопедия судебной практики. Правовые позиции судов',
                'Большая библиотека юриста',
                'Большая библиотека бухгалтера и кадрового работника',
                'Энциклопедия. Формы правовых документов',
                'Энциклопедия решений.Проверки организаций и предпринимателей',
                'Энциклопедия решений.Хозяйственные ситуации',
                'Энциклопедия решений.Госзакупки',
                'Энциклопедия решений.Трудовые отношения, кадры',
                'Энциклопедия решений.Договоры и иные сделки',
                'Энциклопедия решений.Корпоративное право',
                'Энциклопедия решений.Налоги и взносы',
                'Конструктор правовых документов',
                'Интернет-Семинары',
                'Судебная практика: приложение к консультационным блокам',
                'Онлайн-архив «Практика арбитражных судов первой инстанции»',
                'Большая домашняя правовая энциклопедия',
                'Архивы ГАРАНТа. Россия',
                'Правовой консалтинг. Премиум: База знаний службы Правового консалтинга',
                'ГАРАНТ Консалтинг: нормативные акты и судебная практика',
                
            ],
            fillingInfoblocksIndexes: [
                {
                    'regulations': [0, 1, 2]
                },
                {
                    'court': [0, 1, 2, 3, 4]
                },
                {
                    'libraries': [0, 1]
                },
                {
                    'specials': [2]
                },
                {
                    'newBlocks': [0]
                },
            ],
            fillingPaketsERIndexes: [],
            fillingEncyclopediasIndexes: [0, 2, 3, 4, 5, 6, 7],
            fillingLTIndexes: [],
            fillingPaketLT: [],
            currentStatusInputComplectName: true,
            freeBlocks: [0,1,2,3,4,5,6,7,8],
            consalting: []
        },

    ],
    universalComplectObj:{
        'name': 'Универсальный комплект',
        'tag': 'universalComplect',
        'className': 'btn__universal',

        'number': 8,
        'color': 'rgb(104, 54, 153)',
        'backgroundColor': 'white',
        'weight': 0,
        'filling': [ ],
        'currentFilling': '',
        'fillingInfoblocksIndexes': [{
                'regulations': [0, 1]
            },
            {
                'court': []
            },
            {
                'libraries': []
            },
            {
                'specials': [2]
            },
            {
                'newBlocks': []
            },
        ],
        'fillingEncyclopediasIndexes': [],
        'fillingPaketsERIndexes': [],
        'fillingLTIndexes': [],

        'fillingPaketsER': '',
        'fillingER': [],
        'fillingPaketLT': [],
        'fillingLTblocks': '',
        'freeBlocks':[0,1,2,3,4,5,6,7,8],
        'consalting':[]
    },
}
//AC
export const setCurrentUniversalComplect = (currentComplectIndex) => ({ type: SET_CURRENT_UNIVERSAL_COMPLECT, currentComplectIndex })


//REDUCER
const universalComplects = (state = initialState, action) => {

    switch (action.type) {

        case SET_CURRENT_UNIVERSAL_COMPLECT:
            return { ...state, currentComplect: state.complects[action.currentComplectIndex] };

        default:
            return state;
    }
}

export default universalComplects
