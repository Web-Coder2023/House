const reproductionsData = {
    'Франция': [
        {
            author: 'Марсель Руссо',
            title: 'Охота Амура',
            tags: 'Холст, масло (50х80)',
            price: '14 500',
            image: './images/reproductions/francia/product1.webp'
        },
        {
            author: 'Анри Селин',
            title: 'Дама с собачкой',
            tags: 'Акрил, бумага (50х80)',
            price: '16 500',
            image: './images/reproductions/francia/product2.webp'
        },
        {
            author: 'Франсуа Дюпон',
            title: 'Процедура',
            tags: 'Цветная литография (40х60)',
            price: '20 000',
            image: './images/reproductions/francia/product3.webp'
        },
        {
            author: 'Луи Детуш',
            title: 'Роза',
            tags: 'Бумага, акрил (50х80)',
            price: '12 000',
            image: './images/reproductions/francia/product4.webp'
        },
        {
            author: 'Франсуа Дюпон',
            title: 'Птичья трапеза',
            tags: 'Цветная литография (40х60)',
            price: '22 500',
            image: './images/reproductions/francia/product5.webp'
        },
        {
            author: 'Пьер Моранж',
            title: 'Пейзаж с рыбой',
            tags: 'Цветная литография (40х60)',
            price: '20 000',
            image: './images/reproductions/francia/product6.webp'
        },
    ],
    'Германия': [
        {
            author: 'Курт Вернер',
            title: 'Над городом',
            tags: 'Цветная литография (40х60) ',
            price: '16 000',
            image: './images/reproductions/germany/product7.webp'
        },
        {
            author: 'Макс Рихтер',
            title: 'Птенцы',
            tags: 'Холст, масло (50х80)',
            price: '14 500',
            image: './images/reproductions/germany/product8.webp'
        },
        {
            author: 'Мартин Майер',
            title: 'Среди листьев',
            tags: 'Цветная литография (40х60)',
            price: '20 000',
            image: './images/reproductions/germany/product9.webp'
        },
        {
            author: 'Герман Беккер',
            title: 'Яркая птица',
            tags: 'Цветная литография (40х60)',
            price: '13 000',
            image: './images/reproductions/germany/product10.webp'
        },
        {
            author: 'Вульф Бауэр',
            title: 'Дятлы',
            tags: 'Бумага, акрил (50х80)',
            price: '20 000',
            image: './images/reproductions/germany/product11.webp'
        },
        {
            author: 'Вальтер Хартманн',
            title: 'Большие воды',
            tags: 'Бумага, акрил (50х80) ',
            price: '23 000',
            image: './images/reproductions/germany/product12.webp'
        },
    ],
    'Англия': [
        {
            author: 'Пол Смит',
            title: 'Дикий зверь',
            tags: 'Акварель, бумага (50х80) ',
            price: '19 500',
            image: './images/reproductions/england/product13.webp'
        },
        {
            author: 'Джон Уайт',
            title: 'Скалистый берег',
            tags: 'Цветная литография (40х60) ',
            price: '17 500',
            image: './images/reproductions/england/product14.webp'
        },
        {
            author: 'Джим Уотсон',
            title: 'Река и горы',
            tags: 'Акварель, бумага (50х80) ',
            price: '20 500',
            image: './images/reproductions/england/product15.webp'
        },
        {
            author: 'Юджин Зиллион',
            title: 'Белый попугай',
            tags: 'Цветная литография (40х60) ',
            price: '15 500',
            image: './images/reproductions/england/product16.webp'
        },
        {
            author: 'Эрик Гиллман',
            title: 'Ночная рыба',
            tags: 'Бумага, акрил (50х80) ',
            price: '12 500',
            image: './images/reproductions/england/product17.webp'
        },
        {
            author: 'Альфред Барр',
            title: 'Рыжий кот',
            tags: 'Цветная литография (40х60) ',
            price: '21 000',
            image: './images/reproductions/england/product18.webp'
        },
    ]
};

// Получаем ссылки на табы и элементы списка
const tabItems = document.querySelectorAll('.reproductions__tab-item');
const listItems = document.querySelectorAll('.reproductions__list-item');

// Добавляем обработчик событий для каждого таба
tabItems.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Удаляем класс _active у всех табов и добавляем выбранному
        tabItems.forEach(t => t.classList.remove('_active'));
        tab.classList.add('_active');

        // Получаем информацию о репродукциях для выбранной страны
        const country = tab.textContent.trim();
        const reproductions = reproductionsData[country];

        // Изменяем содержимое reproductions__list-item в соответствии с выбранным табом
        listItems.forEach((item, i) => {
            const reproduction = reproductions[i];
            if (reproduction) {
                // Если есть информация о репродукции, обновляем элемент списка с анимацией
                item.classList.remove('hide'); // Показываем элемент
                requestAnimationFrame(() => {
                    item.querySelector('.reproductions__list-item_img img').src = reproduction.image;
                    item.querySelector('.reproductions__list-item_author').textContent = reproduction.author;
                    item.querySelector('.reproductions__list-item_title').textContent = reproduction.title;
                    item.querySelector('.reproductions__list-item_tags').textContent = reproduction.tags;
                    item.querySelector('.reproductions__list-item_pay span').textContent = reproduction.price;
                });
            } else {
                // Скрываем элемент с анимацией
                item.classList.add('hide');
            }
        });
    });
});
