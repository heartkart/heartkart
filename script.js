document.addEventListener("DOMContentLoaded", function () {
    let filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            let category = this.dataset.category;
            filterProducts(category);
        });
    });
});

function filterProducts(category) {
    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        if (category === "all" || product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function openModal(title, description, image) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-img").src = image;
    document.getElementById("product-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("product-modal").style.display = "none";
}
