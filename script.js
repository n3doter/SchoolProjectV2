document.addEventListener("DOMContentLoaded", function () {

    // scroll animation //
    let menuItems = document.querySelectorAll(".menu-item");

    function showMenuItems() {
        let screenHeight = window.innerHeight * 0.9;

        for (let i = 0; i < menuItems.length; i++) {
            let item = menuItems[i];
            let itemPosition = item.getBoundingClientRect().top;

            if (itemPosition < screenHeight) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        }
    }

    window.addEventListener("scroll", showMenuItems);
    showMenuItems(); 

    // modalnie okna(zakaz stolika i td) //
    let bookingModal = document.getElementById("bookingModal");
    let closeModalButton = document.getElementById("closeModal");
    let bookingButton = document.querySelector(".navbar-link");

    bookingButton.addEventListener("click", function () {
        bookingModal.style.display = "block";
    });

    closeModalButton.addEventListener("click", function () {
        bookingModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === bookingModal) {
            bookingModal.style.display = "none";
        }
    });

    // feedback //
    let feedbackForm = document.getElementById("feedbackForm");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let nameInput = document.getElementById("userName");
            let feedbackInput = document.getElementById("userFeedback");

            let name = nameInput.value;
            let feedback = feedbackInput.value;

            let reviewDiv = document.createElement("div");
            reviewDiv.classList.add("review");
            reviewDiv.innerHTML = "<h3>" + name + "</h3><p>" + feedback + "</p>";

            let container = document.getElementById("reviewsContainer");
            container.appendChild(reviewDiv);

            feedbackForm.reset();
        });
    }
});

// korzina //
let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;

    document.getElementById("cartCount").innerText = cart.length;
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let div = document.createElement("div");
        div.innerText = item.name + " - " + item.price + "₴";
        cartItems.appendChild(div);
    }

    document.getElementById("totalPrice").innerText = total;
}

function toggleCart() {
    let modal = document.getElementById("cartModal");
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

function checkout() {
    alert("Дякуємо за ваше замовлення! Загальна сума: " + total + "₴");

    cart = [];
    total = 0;
    document.getElementById("cartCount").innerText = 0;
    updateCart();
    toggleCart();
}

window.addEventListener("click", function (event) {
    let modal = document.getElementById("cartModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


function searchMenu() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const title = item.querySelector('h3').innerText.toLowerCase();
        const description = item.querySelector('p').innerText.toLowerCase();

        
        if (title.includes(searchInput) && description.includes(searchInput)) {
            item.style.display = ''; 
        } else {
            item.style.display = 'none'; 
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burgerIcon');
    const burgerMenu = document.getElementById('burgerMenu');
    
    
    if (!burgerIcon || !burgerMenu) {
        console.error('Не найдены элементы бургер-меню! Проверьте HTML');
        return;
    }

    burgerIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        burgerMenu.classList.toggle('open');
    });
});
document.addEventListener('click', function(e) {
    if (!burgerMenu.contains(e.target) && e.target !== burgerIcon) {
        burgerMenu.classList.remove('open');
    }
});