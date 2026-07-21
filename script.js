// Search Function
const search = document.getElementById("search");
const images = document.querySelectorAll(".gallery img");

search.addEventListener("keyup", function () {
    let value = search.value.toLowerCase();

    images.forEach(function (img) {
        let text = img.alt.toLowerCase();

        if (text.includes(value)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
});

// Filter Buttons
function filterImages(category) {
    images.forEach(function (img) {
        if (category === "all") {
            img.style.display = "block";
        } else if (img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {

    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    galleryImages.forEach(function (img) {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

});