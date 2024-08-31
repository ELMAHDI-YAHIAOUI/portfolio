const serviceModels = document.querySelectorAll(".service-model"); 
const learnBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick) {
    serviceModels[modalClick].classList.add("active");
};

learnBtns.forEach((learnBtn, i) => {
    learnBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModels.forEach((modalView) =>
            modalView.classList.remove("active")
        );
    });
});



$('.toggle-bar').on('click', function () {
    $(this).toggleClass('open'); // Changed from 'this' to $(this)
    $('.navigation-bar').slideToggle(200); // Removed quotes from 200
});
