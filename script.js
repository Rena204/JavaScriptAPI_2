document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider-image img");
    const dots = document.querySelectorAll(".dot");
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
        updateActiveDot(index);
    }

    function updateActiveDot(index) {
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    document.getElementById("nextBtn").addEventListener("click", showNextImage);
    document.getElementById("prevBtn").addEventListener("click", showPrevImage);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            showImage(index);
            currentImageIndex = index;
        });
    });

    // Показываем первое изображение
    showImage(currentImageIndex);
});



