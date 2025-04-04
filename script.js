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

let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    document.getElementById('cartCount').innerText = cart.length;
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name} - ${item.price}₴`;
        cartItemsDiv.appendChild(itemDiv);
    });
    document.getElementById('totalPrice').innerText = total;
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

function checkout() {
    alert('Дякуємо за ваше замовлення! Загальна сума: ' + total + '₴');
    cart = [];
    total = 0;
    document.getElementById('cartCount').innerText = 0;
    updateCart();
    toggleCart();
}


window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
//knopka vgoru//
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none"; 
        }
    });
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});