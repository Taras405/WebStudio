document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector("[data-modal]");
    const openModalBtn = document.querySelector("[data-modal-open]");
    const closeModalBtn = document.querySelector("[data-modal-close]");
    const backdrop = document.querySelector(".backdrop");

    function openModal() {
        modal.classList.remove("is_hidden");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.add("is_hidden");
        document.body.style.overflow = "";
    }

    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);

    backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.classList.contains("is_hidden")) {
            closeModal();
        }
    });
});