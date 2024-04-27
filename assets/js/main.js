document.addEventListener("DOMContentLoaded", function() {
    setInterval(adjustMainMargin, 10);
    if ( document.querySelector(".hero-warpper") )
    {
        heroChange();
    }
});

function adjustMainMargin() {
    document.querySelector("main").style.marginTop = document.querySelector("header").offsetHeight + "px";
}

function heroChange() {
    const heroImages = document.querySelectorAll('.hero-image');
    let currentImageIndex = 0;

    // Function to fade images
    function fadeImages() {
        heroImages[currentImageIndex].style.opacity = 0;
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].style.opacity = 1;
    }

    // Call the fadeImages
    setInterval(fadeImages, 3000);
}

function ToggleMenu()
{
    document.querySelector(".mobile-navigation").style.top = document.querySelector("header").offsetHeight + "px";
    var mobileNav = document.querySelector(".mobile-navigation");

    if (mobileNav.style.display == "none")
    {
        mobileNav.style.display = "block";
    }
    else
    {
        mobileNav.style.display = "none";
    }
}