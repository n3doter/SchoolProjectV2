document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    function showMenuItems() {
        const triggerBottom = window.innerHeight * 0.9;

        menuItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", showMenuItems);
    showMenuItems(); 

    const bookingModal = document.getElementById('bookingModal');
    const closeModalButton = document.getElementById('closeModal');
    const bookingButton = document.querySelector('.navbar-link');

    bookingButton.addEventListener('click', function() {
        bookingModal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        bookingModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === bookingModal) {
            bookingModal.style.display = 'none';
        }
    });

    
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) { 
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const userName = document.getElementById('userName').value;
            const userFeedback = document.getElementById('userFeedback').value;
            const review = document.createElement('div');
            review.classList.add('review'); 
            review.innerHTML = `<h3>${userName}</h3><p>${userFeedback}</p>`; 
            document.getElementById('reviewsContainer').appendChild(review);
            feedbackForm.reset();
        });
    }
});