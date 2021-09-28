
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

headerScroll = () => {
    const headerNavbar = $('.header-navbar');
    const headerSearch = $('.header-search');
    const headerScroll = $('.header-scroll');
    const headerContent = $('.header-content');

    const windowScroll = window.scrollY;
    console.log(windowScroll);

    if (windowScroll > 58) {
        headerNavbar.classList.add('hidden');
        headerSearch.classList.add('hidden');
        headerContent.classList.add('fix-top__header-scroll');

        headerScroll.classList.remove('hidden');
    } else {
        headerNavbar.classList.remove('hidden');
        headerSearch.classList.remove('hidden');
        headerContent.classList.remove('fix-top__header-scroll');

        headerScroll.classList.add('hidden');
    }
    
}

window.addEventListener('scroll', headerScroll);