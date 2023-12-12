let currentPhotoIndex = 0;
    const photos = [
        "./img/horror/horror1.jpg",
        "./img/horror/horror2.png",
        "./img/horror/horror3.jpg"
    ];
    const selectedPhoto = document.getElementById("selectedPhoto");

    function changePhoto(direction) {
        currentPhotoIndex += direction;

        if (currentPhotoIndex < 0) {
            currentPhotoIndex = photos.length - 1;
        } else if (currentPhotoIndex >= photos.length) {
            currentPhotoIndex = 0;
        }

        // Update the source of the selected photo
        selectedPhoto.src = photos[currentPhotoIndex];
    }

    document.querySelector('.left-arrow').addEventListener('click', () => {
        changePhoto(-1);
    });
 
    document.querySelector('.right-arrow').addEventListener('click', () => {
        changePhoto(1);
    });