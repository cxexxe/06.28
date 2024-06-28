const initSlider = (sliderElement) => {
    const imageList = sliderElement.querySelector(".card_wrapper");
    const slideButtons = sliderElement.querySelectorAll(".slide-prev, .slide-next");
    
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.classList.contains("slide-prev") ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener("resize", () => {
    document.querySelectorAll(".slider-wrapper").forEach(sliderElement => {
        initSlider(sliderElement);
    });
});

window.addEventListener("load", () => {
    document.querySelectorAll(".slider-wrapper").forEach(sliderElement => {
        initSlider(sliderElement);
    });
});
