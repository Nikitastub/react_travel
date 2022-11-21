const headerPlace = () => {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        window.pageYOffset > 50 ? header.classList.add('header_active') : header.classList.remove('header_active');
    };
}

headerPlace();