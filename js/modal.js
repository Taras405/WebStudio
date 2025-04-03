document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector("[data-modal]");
    const openModalBtn = document.querySelector("[data-modal-open]");
    const closeModalBtn = document.querySelector("[data-modal-close]");
    const backdrop = document.querySelector(".backdrop");

    // Функція відкриття
    function openModal() {
        modal.classList.remove("is_hidden");
        document.body.style.overflow = "hidden"; // Заборона прокрутки фону
    }

    // Функція закриття
    function closeModal() {
        modal.classList.add("is_hidden");
        document.body.style.overflow = ""; // Відновлення прокрутки
    }

    // Обробники подій
    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);

    // Закриття по кліку на фон
    backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) {
            closeModal();
        }
    });

    // Закриття по Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.classList.contains("is_hidden")) {
            closeModal();
        }
    });
});