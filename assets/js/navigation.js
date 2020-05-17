let links = document.querySelectorAll('.header-link');
let offset = 100;

/*if(links) {
    links.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            let targetElement = document.querySelector(e.target.hash);
            if (targetElement) {
                let offsetPosition = targetElement.offsetTop - offset;

                window.scroll({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}*/