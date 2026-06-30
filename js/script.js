document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');

    if (!burger || !mobileMenu || !mobileClose) {
        return;
    }

    const mobileLinks =
        mobileMenu.querySelectorAll('a');

    function openMenu() {

        mobileMenu.classList.add('active');

        document.body.style.overflow = 'hidden';

    }

    function closeMenu() {

        mobileMenu.classList.remove('active');

        document.body.style.overflow = '';

    }

    burger.addEventListener(
        'click',
        openMenu
    );

    mobileClose.addEventListener(
        'click',
        closeMenu
    );

    mobileLinks.forEach(link => {

        link.addEventListener(
            'click',
            closeMenu
        );

    });

    document.addEventListener(
        'keydown',
        event => {

            if (
                event.key === 'Escape' &&
                mobileMenu.classList.contains('active')
            ) {

                closeMenu();

            }

        }
    );

});

document.addEventListener('DOMContentLoaded', () => {

    const videos = document.querySelectorAll('.autoplay-video');

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            const video = entry.target;

            if (entry.isIntersecting) {

                video.play().catch(() => {});

            } else {

                video.pause();

            }

        });

    }, {

        threshold: 0.5

    });

    videos.forEach(video => {

        observer.observe(video);

    });

});

document.addEventListener('contextmenu', event => {

    event.preventDefault();

});

document.querySelectorAll('img').forEach(img => {

    img.draggable = false;

});