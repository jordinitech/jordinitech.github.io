

document.querySelectorAll('main').forEach((Element) => {
    Element.addEventListener('click', () => {
        const nav = document.getElementById('nav');
        const isDisplay = () => {
            return nav.style.display !== 'none';
        };

        if (window.screen.width >= 1024) {
            return;
        }
        if (isDisplay()) {
            $(nav).slideUp()
        }
    })
})