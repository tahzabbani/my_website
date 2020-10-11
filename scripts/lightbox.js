var isOpen = false;

function openLightbox() {
    $("#lightbox").css({
        "display": "block",
    });
    $(".overlay").css({
        "opacity": "0.5"
    });
    $("#lightbox").fadeTo(10, 1);
    isOpen = true;
}

function closeLightbox() {
    $("#lightbox").css({
        "display": "none",
        "opacity": "0"
    });
    $(".overlay").css({
        "opacity": "1"
    })
    isOpen = false;
}

$(document).keydown(function(e) {
    if (isOpen == true) {
        if (e.which == 37) {
            $(".back").click();
        } else if (e.which == 39) {
            $(".next").click();
        }
    }
});

var slideIndex = 1;
showLightbox(slideIndex);

function currentSlide(x) {
    slideIndex = x;
    console.log("current" + x);
    showLightbox(slideIndex);
}

function changeSlides(num) {
    slideIndex += num;
    console.log("change:" + slideIndex);
    showLightbox(slideIndex);
}

function showLightbox(n) {
    var slides = $(".slide");
    var count;
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (count = 0; count < slides.length; count++) {
        slides[count].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}