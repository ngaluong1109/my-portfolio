// document.addEventListener('DOMContentLoaded', () => {
//     // console.log('DOM content loaded');
//     // const openBtn = document.querySelector('#shopping');
//     // const closeBtn = document.querySelector('#closeOverlay');
//     // const overlay = document.querySelector('.overlay');
//     const mainContent = document.querySelector('.main-content');
//     // const selectedPhoto = document.getElementById('selectedPhoto');
//     // let currentPhotoIndex = 0; 

//     const openBtns = document.querySelectorAll('.project-box');
//     const closeBtns = document.querySelectorAll('.close-btn');
//     const overlays = document.querySelectorAll('.overlay');

  

//     // openBtn.addEventListener('click', () => {
//     // console.log('Open button clicked');
//     // overlay.style.display = 'block';
//     // document.body.classList.add('overlay-visible'); 
//     // mainContent.classList.add('no-scroll'); 
//     // updatePhoto();
//     // });

//     openBtns.forEach((openBtn) => {
//         openBtn.addEventListener('click', () => {
//             const targetOverlay = openBtn.getAttribute('data-target');
//             openOverlay(targetOverlay);
//             mainContent.classList.add('no-scroll'); 
//         });
//     });

//     closeBtns.forEach((closeBtn) => {
//         closeBtn.addEventListener('click', () => {
//             closeOverlay();
//             mainContent.classList.remove('no-scroll');
//         });
//     });

//     function openOverlay(targetOverlay) {
//         const overlay = document.getElementById(targetOverlay);
//         const selectedPhotoSrc = overlay.getAttribute('data-photo-src');
//         const selectedTitle = overlay.getAttribute('data-title');
//         const selectedDescription = overlay.getAttribute('data-description');

//         // Update content with retrieved data
//         const selectedPhoto = overlay.querySelector('.photo-container img');
//         const projectTitle = overlay.querySelector('#projectTitle');
//         const projectDescription = overlay.querySelector('.text-container p');

//         selectedPhoto.src = selectedPhotoSrc;
//         projectTitle.textContent = selectedTitle;
//         projectDescription.textContent = selectedDescription;

//         overlay.style.display = 'block';
//         document.body.classList.add('overlay-visible'); 
//     }

//     function closeOverlay() {
//         overlays.forEach((overlay) => {
//             overlay.style.display = 'none';
//         });
//         document.body.classList.remove('overlay-visible'); 
//     }

//     // closeBtn.addEventListener('click', () => {
//     // console.log('Close button clicked');
//     // overlay.style.display = 'none';
//     // document.body.classList.remove('overlay-visible');
//     // mainContent.classList.remove('no-scroll');
//     // });

//     // function updatePhoto() {
//     //     selectedPhoto.style.transition = 'opacity 0.5s';
//     //     selectedPhoto.style.opacity = 0;

//     //     selectedPhoto.offsetWidth;

//     //     selectedPhoto.style.opacity = 1;

//     //     selectedPhoto.src = photoUrls[currentPhotoIndex];
//     // }
    
//     // function changePhoto(step) {
//     //     currentPhotoIndex += step;

//     //     if (currentPhotoIndex >= photoUrls.length) {
//     //         currentPhotoIndex = 0;
//     //     }
//     //     if (currentPhotoIndex < 0) {
//     //         currentPhotoIndex = photoUrls.length - 1;
//     //     }

//     //     updatePhoto();
//     // }

//     document.querySelector('.left-arrow').addEventListener('click', () => {
//         changePhoto(-1);
//     });

//     document.querySelector('.right-arrow').addEventListener('click', () => {
//         changePhoto(1);
//     });

//     function changePhoto(direction) {
//         console.log('Changing photo:', direction);
//     }


// });


document.addEventListener('DOMContentLoaded', () => {
    const projectBoxes = document.querySelectorAll('.project-box');
    const closeBtns = document.querySelectorAll('.close-btn');
    const overlays = document.querySelectorAll('.overlay');
    // const mainContent = document.querySelector('.main-content');


    projectBoxes.forEach((projectBox) => {
        projectBox.addEventListener('click', () => {
            const targetOverlay = projectBox.getAttribute('data-target');
            openOverlay(targetOverlay);
            // mainContent.classList.add('no-scroll'); 
        });
    });

    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener('click', closeOverlay);
        // mainContent.classList.remove('no-scroll');
    });

    function openOverlay(targetOverlay) {
        const overlay = document.getElementById(targetOverlay);
        const photoContainer = overlay.querySelector('.photo-container');
        const selectedTitle = overlay.getAttribute('data-title');
        const selectedDescription = overlay.getAttribute('data-description');
        const photoUrls = JSON.parse(overlay.getAttribute('data-photo-urls'));

        let currentPhotoIndex = 0;

        // Update content with retrieved data
        const selectedPhoto = overlay.querySelector('#selectedPhoto');
        const projectTitle = overlay.querySelector('#projectTitle');
        const projectDescription = overlay.querySelector('.text-container p');

        function changePhoto(delta) {
            currentPhotoIndex = (currentPhotoIndex + delta + photoUrls.length) % photoUrls.length;
            selectedPhoto.src = photoUrls[currentPhotoIndex];
        }

        // Initialize content
        selectedPhoto.src = photoUrls[currentPhotoIndex];
        projectTitle.textContent = selectedTitle;
        projectDescription.textContent = selectedDescription;

        // Add event listeners for arrow navigation
        photoContainer.querySelector('.left-arrow').addEventListener('click', () => {
            changePhoto(-1);
        });

        photoContainer.querySelector('.right-arrow').addEventListener('click', () => {
            changePhoto(1);
        });

        overlay.style.display = 'block';
        document.body.classList.add('overlay-visible');
    }

    function closeOverlay() {
        overlays.forEach((overlay) => {
            overlay.style.display = 'none';
        });
        document.body.classList.remove('overlay-visible');
    }
});