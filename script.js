
const sliderImages = document.querySelectorAll('.slider_img'),
    sliderLine = document.querySelector('.slider-line'),
    sliderDots = document.querySelectorAll('.slider-dot'),
    sliderBtnNext = document.querySelector('.slider-next'),
    sliderBtnPrev = document.querySelector('.slider-prev');

let sliderCount = 0,
    sliderWidth;

//адаптивность слайдера
window.addEventListener('resize', showSlide);

function showSlide() {
    sliderWidth = document.querySelector('.background-slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlider();
}
showSlide();


//задает шаг перемещения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function nextSlider() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;
    thisSlider(sliderCount);
    rollSlider();

}

function prevSlider() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1;
    thisSlider(sliderCount);
    rollSlider();
}

//кнопка переключения
sliderBtnNext.addEventListener('click', nextSlider);
//кнопка переключения
sliderBtnPrev.addEventListener('click', prevSlider);

// //указывает какой слайд по счету активен
function thisSlider(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlider(sliderCount)
    })
})

var timer = 0;
makeTimer(); //Создаем интервал 
function makeTimer() {
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function () {
        sliderCount++;
        if (sliderCount >= sliderImages.length) sliderCount = 0;
        showSlide(sliderCount);
        thisSlider(sliderCount)
    }, 5000);
}



//продукция
const listProduct = document.querySelectorAll('.product-list')
const innovationBlock = document.querySelector('.innovation')
//добавление плашки инновации
function showInnovation() {
    listProduct.forEach(element => {
        if (element.classList.contains('innovation-block')) {
            element.querySelector('.innovation').classList.remove('display')
        }
    })
}
showInnovation()
//добавлние плашки разработки
function showDevelopment() {
    listProduct.forEach(element => {
        if (element.classList.contains('development-block')) {
            element.querySelector('.development').classList.remove('display')
        }
    })
}
showDevelopment()
// изменение величины контейнера
function wideContainer() {
    listProduct.forEach(element => {
        if (element.classList.contains('wide-container')) {
            const widthElement = element.clientWidth;
            let newWidth = widthElement * 2;
            element.style.cssText = ` width: ${newWidth}px`;
        }
    })
}
wideContainer()

//слайдер лого
const images = ['5.png', '6.png', '2.png', '3.png', '4.png', '1.png']
let activeImg = 0;
const sliderPlace = document.querySelector('.slider-line-logo')
const widthOffset = document.querySelector('.slider-logo').clientWidth;
const heightOffset = document.querySelector('.slider-logo').clientHeight;


const initSlider = () => {
    for (let i = 0; i <= 5; i++) {
        const div = document.createElement('div');
        div.classList.add('background-logo')
        sliderPlace.append(div);
        const link = document.createElement('a');
        link.href = '#';
        div.append(link);
        const img = document.createElement('img');
        img.alt = 'Логотип'
        img.src = '/img/customers/' + images[activeImg + i]
        link.append(img);
    }
}



const nextImageGenerate = () => {
    let nextImg = activeImg - 1;
    if (document.documentElement.clientWidth < 1250) {
        const div = document.createElement('div');
        div.classList.add('background-logo')
        sliderPlace.append(div);
        const link = document.createElement('a');
        link.href = '#';
        div.append(link);
        const img = document.createElement('img');
        img.alt = 'Логотип'
        if (document.documentElement.clientWidth < 381) {
            img.src = '/img/customers/' + images[nextImg + 1]
            link.append(img);
        }
        if (document.documentElement.clientWidth < 560 && document.documentElement.clientWidth >= 381) {
            if (nextImg <= 3) {
                img.src = '/img/customers/' + images[nextImg + 2]
                link.append(img)
            }
            else {
                img.src = '/img/customers/' + images[0]
                link.append(img)
            }
        }
        if (document.documentElement.clientWidth < 750 && document.documentElement.clientWidth >= 560) {
            if (nextImg <= 2) {
                img.src = '/img/customers/' + images[nextImg + 3]
                link.append(img)
            }
            else {
                img.src = '/img/customers/' + images[nextImg - 3]
                link.append(img)
            }
        }
        if (document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth >= 750) {
            if (nextImg <= 1) {
                img.src = '/img/customers/' + images[nextImg + 4]
                link.append(img)
            }
            else {
                img.src = '/img/customers/' + images[nextImg - 2]
                link.append(img)
            }
        }
        if (document.documentElement.clientWidth < 1250 && document.documentElement.clientWidth >= 1000) {
            if (nextImg <= 0) {
                img.src = '/img/customers/' + images[nextImg + 5]
                link.append(img)
            }
            else {
                img.src = '/img/customers/' + images[nextImg - 1]
                link.append(img)
            }
        }
    }
    else {
        if (activeImg === 0) {
            const lastindex = nextImg + images.length;
            const div = document.createElement('div');
            div.classList.add('background-logo')
            sliderPlace.append(div);
            const link = document.createElement('a');
            link.href = '#';
            div.append(link);
            const img = document.createElement('img');
            img.alt = 'Логотип'
            img.src = '/img/customers/' + images[lastindex]
            link.append(img);
        }
        else {
            if (nextImg >= images.length) { nextImg = 0; }
            const div = document.createElement('div');
            div.classList.add('background-logo')
            sliderPlace.append(div);
            const link = document.createElement('a');
            link.href = '#';
            div.append(link);
            const img = document.createElement('img');
            img.alt = 'Логотип'
            img.src = '/img/customers/' + images[nextImg]
            link.append(img)
        }

    }
}

const prevImageGenerate = () => {
    let prevImg = activeImg;
    if (prevImg < 0) prevImg = images.length - 1;
    const div = document.createElement('div');
    div.classList.add('background-logo')
    sliderPlace.prepend(div);
    const link = document.createElement('a');
    link.href = '#';
    div.append(link);
    const img = document.createElement('img');
    img.alt = 'Логотип'
    img.src = '/img/customers/' + images[prevImg]

    link.prepend(img);
}

const nextSlide = () => {
    activeImg++;
    if (activeImg >= images.length) activeImg = 0;
    document.querySelector('.slider-line-logo .background-logo').remove()
    nextImageGenerate();
}
const prevSlide = () => {
    activeImg--;
    if (activeImg < 0) activeImg = images.length - 1;
    document.querySelector('.slider-line-logo .background-logo:last-child').remove()
    prevImageGenerate();
}
const Adapt = () => {
    if (document.documentElement.clientWidth >= 1250) {
        sliderPlace.style.width = 6 * (widthOffset + 35) + 'px'
        initSlider();
    }
    if (document.documentElement.clientWidth < 1250 && document.documentElement.clientWidth >= 1000) {
        sliderPlace.style.width = 5 * (widthOffset + 30) + 'px'
        for (let i = 0; i <= 4; i++) {
            const div = document.createElement('div');
            div.classList.add('background-logo')
            sliderPlace.append(div);
            const link = document.createElement('a');
            link.href = '#';
            div.append(link);
            const img = document.createElement('img');
            img.alt = 'Логотип'
            img.src = '/img/customers/' + images[activeImg + i]
            link.append(img);
        }
    }
    if (document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth >= 750) {
        sliderPlace.style.width = 4 * (widthOffset + 20) + 'px'
        for (let i = 0; i <= 3; i++) {
            const div = document.createElement('div');
            div.classList.add('background-logo')
            sliderPlace.append(div);
            const link = document.createElement('a');
            link.href = '#';
            div.append(link);
            const img = document.createElement('img');
            img.alt = 'Логотип'
            img.src = '/img/customers/' + images[activeImg + i]
            link.append(img);
        }
    }
    if (document.documentElement.clientWidth < 750 && document.documentElement.clientWidth >= 560) {
        sliderPlace.style.width = 3 * (widthOffset + 15) + 'px'
        for (let i = 0; i <= 2; i++) {
            const div = document.createElement('div');
            div.classList.add('background-logo')
            sliderPlace.append(div);
            const link = document.createElement('a');
            link.href = '#';
            div.append(link);
            const img = document.createElement('img');
            img.alt = 'Логотип'
            img.src = '/img/customers/' + images[activeImg + i]
            link.append(img);
        }
    }
    if (document.documentElement.clientWidth < 560 && document.documentElement.clientWidth >= 381) {
        sliderPlace.style.width = 2 * (widthOffset + 10) + 'px'
        for (let i = 0; i <= 1; i++) {
            const div = document.createElement('div');
            div.classList.add('background-logo')
            sliderPlace.append(div);
            const link = document.createElement('a');
            link.href = '#';
            div.append(link);
            const img = document.createElement('img');
            img.alt = 'Логотип'
            img.src = '/img/customers/' + images[activeImg + i]
            link.append(img);
        }
    }
    if (document.documentElement.clientWidth < 381) {
        sliderPlace.style.width = (widthOffset + 10) + 'px'

        const div = document.createElement('div');
        div.classList.add('background-logo')
        sliderPlace.append(div);
        const link = document.createElement('a');
        link.href = '#';
        div.append(link);
        const img = document.createElement('img');
        img.alt = 'Логотип'
        img.src = '/img/customers/' + images[activeImg]
        link.append(img);

    }

}
Adapt()


document.querySelector('.next-button').addEventListener('click', nextSlide)
document.querySelector('.prev-button').addEventListener('click', prevSlide)


//
const gamburger = document.querySelector('.main-nav-toggle')
const mainNav = document.querySelector('.main-nav')

const menu = document.querySelector('.site-navigation')
function interaction_nav() {
    if (mainNav.classList.contains('main-nav-opened')) {
        mainNav.classList.remove('main-nav-opened');
        mainNav.classList.add('main-nav-closed');
        menu.classList.remove('opened');
        menu.classList.add('closed')
        gamburger.classList.remove('toggle-opened');
        gamburger.classList.add('toggle-closed')
    }
    else {
        mainNav.classList.remove('main-nav-closed')
        mainNav.classList.add('main-nav-opened')
        menu.classList.add('opened');
        menu.classList.remove('closed')
        gamburger.classList.add('toggle-opened');
        gamburger.classList.remove('toggle-closed')
    }
}
gamburger.addEventListener('click', interaction_nav);