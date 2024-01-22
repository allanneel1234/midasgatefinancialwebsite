document.addEventListener('DOMContentLoaded', function () {
    var backgroundImage = document.querySelector('.back_ground-image');
    var images = ['bees.jpg', 'walk.jpg']; // Add more image URLs as needed
    var currentIndex = 0;

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        backgroundImage.classList.toggle('bees.jpg');
        backgroundImage.classList.toggle('walk.jpg');
        setTimeout(changeBackgroundImage, 5000); // Change image every 5 seconds
    
    }

    changeBackgroundImage();
});
