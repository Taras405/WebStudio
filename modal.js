const modalOpenButton = document.querySelector('[data-modal-open]');
const modalCloseButton = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.backdrop');

modalOpenButton.addEventListener('click', () => {
    backdrop.classList.remove('is-hidden', 'is-closing');
    backdrop.classList.add('is-visible');
});

modalCloseButton.addEventListener('click', () => {
    backdrop.classList.add('is-closing');

    // Очікуємо закінчення анімації, потім приховуємо модальне вікно
    backdrop.addEventListener('animationend', () => {
        backdrop.classList.remove('is-visible', 'is-closing');
        backdrop.classList.add('is-hidden');
    }, { once: true });
});