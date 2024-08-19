window.addEventListener('load', function() {
    animateImages();
});

function animateImages() {
    const images = document.querySelectorAll('.imgsection img');
    let delay = 0;

    images.forEach((img, index) => {
        img.style.transitionDelay = `${delay}s`; // Apply delay for each image
        img.style.transform = 'translateX(0)'; // Move images back to initial position
        delay += 0.1; // Increase delay for each image to stagger animation
    });
}
