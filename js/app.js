window.onload = function() {
    headerHover();
    burgerMenu()
    gallery();
    sizeList();
    changeNumber();
    modalAddToCart();
    photoHover();
    inputClear();
};

//open burger menu
function burgerMenu() {
    const burgerOpen = document.querySelector('.header__burger');
    const burgerClose = document.querySelector('.nav__close');
    const nav = document.querySelector('.nav');

    burgerOpen.addEventListener('click', () => {
        nav.classList.toggle('--open');
    });

    burgerClose.addEventListener('click', () => {
        nav.classList.remove('--open');
    })

    document.addEventListener('click', (e) => {
        if (e.target != nav && e.target != burgerOpen) {
            nav.classList.remove('--open');
        };
    });
};

//header hover 
function headerHover() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');

    if (screen.width >= 768) {
        header.addEventListener('mouseover', () => {
            nav.classList.add('--open');
        });
        header.addEventListener('mouseout', () => {
            nav.classList.remove('--open');
        });

        nav.addEventListener('mouseover', () => {
            nav.classList.add('--open');
        });
        nav.addEventListener('mouseout', () => {
            nav.classList.remove('--open');
        });
    };
    let oldPos = 0;
    //header visible/hidden
    window.addEventListener('scroll', (e) => {
        let newPos = window.pageYOffset;
        if (oldPos - newPos > 0){
            header.classList.remove('--hidden');
        } else if (oldPos - newPos < 0){
            header.classList.add('--hidden');
            nav.classList.remove('--open');        
        };
        oldPos = newPos;
    });
};

//gallery slider
function gallery() {
    const mainPhotoContainer = document.querySelector('.main__photo-wrapper');
    const mainPhoto = document.querySelector('.main__photo');
    const photo = document.querySelectorAll('.main__item-img');

    photo.forEach(item => {
        item.addEventListener('click', () => {
            let url = item.getAttribute('alt');
            mainPhoto.classList.add('--hidden');
            mainPhotoContainer.setAttribute('style', 'background-image: url(' + url + ');')
            console.log(url)
        })
    })
};
//open size list
function sizeList() {
    const list = document.querySelector('.main__size-list');
    const select = document.querySelector('.main__select');
    const item = document.querySelectorAll('.main__size-item');

    select.addEventListener('click', (e) => {
        $(list).slideToggle(300);
    });

    item.forEach(item => {
        item.addEventListener('click', (e) => {
            select.innerText = e.target.innerText;
        });
    });
    document.addEventListener('click', (e) => {
        if (e.target != list && e.target != select) {
            $(list).slideUp(300);
        };
    });
};

//change number of product
function changeNumber() {
    const plus = document.getElementById('plus');
    const minus = document.getElementById('minus');
    const counter = document.querySelector('.main__counter');

    let count = 1;
    plus.addEventListener('click', () => {
        count++;
        counter.innerText = count;
    });

    minus.addEventListener('click', () => {
        if (count > 1) {
            count--;
            counter.innerText = count;
        };
    });
};

//buttons addToCard and addToFavorite
function modalAddToCart() {
    const addToCartBtn = document.querySelector('.main__add-to-cart');
    const addToFavoriteBtn = document.querySelector('.main__add-to-favorite');

    const modalAddToCart = document.getElementById('modal__add-to-cart');
    const modalAddToFavorite = document.getElementById('modal__add-to-favorite');

    const title = document.querySelector('.main__title');
    const counter = document.querySelector('.main__counter');
    
    let addToFavoriteBtnCount = 0;

    addToCartBtn.addEventListener('click', () => {
        modalAddToCart.innerText = 'Товар "' + title.innerText +'" в количестве ' + counter.innerText + ' единиц добавлен в корзину';
        modalAddToCart.classList.add('--open');
        modalAddToFavorite.classList.remove('--open');
        setTimeout(() => {
            modalAddToCart.classList.remove('--open');
        }, 2000);
    });

    

    addToFavoriteBtn.addEventListener('click', () => {        
        if (addToFavoriteBtnCount === 0) {
            modalAddToFavorite.innerText = 'Товар "' + title.innerText + '" добавлен в избранное';
            addToFavoriteBtnCount++;
        } else if (addToFavoriteBtnCount === 1) {
            modalAddToFavorite.innerText = 'Товар "' + title.innerText +'" удален из избранного';
            addToFavoriteBtnCount = 0;
        };
        modalAddToFavorite.classList.add('--open');
        modalAddToCart.classList.remove('--open');
        addToFavoriteBtn.classList.toggle('--liked');
        setTimeout(() => {
            modalAddToFavorite.classList.remove('--open');
        }, 2000)
    });
};

//hover on photos in styles
function photoHover() {
    const photo = document.querySelectorAll('.styles__photo');
    const hover = document.querySelectorAll('.styles__hover-block');
    let arrPhoto = [];

    hover.forEach(function(item) {
        arrPhoto.push(item);
    });

    photo.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            arrPhoto[i].classList.add('--hover')
        });

        item.addEventListener('mouseout', () => {
            hover.forEach((item) => {
                arrPhoto[i].classList.remove('--hover');
            });
        });
    });
        
    const favorite = document.querySelectorAll('.styles__favorite-block');
    const favoriteIcon = document.querySelectorAll('.styles__favorite');
    let arrFavorite = [];
    
    favoriteIcon.forEach(function(item) {
        arrFavorite.push(item);
    });

    favorite.forEach((item, i) => {
        let count = 0;
        item.addEventListener('click', () => {
            if (count === 0){
                favoriteIcon[i].classList.add('--like')
                count++
            } else {
                favoriteIcon[i].classList.remove('--like')
                count = 0;
            };
        });
    });
};

//clear input text
function inputClear() {
    const btn = document.querySelector('.footer__input-btn');
    const input = document.querySelector('.footer__email');

    btn.addEventListener('click', () => {
        input.value = '';
    });
};