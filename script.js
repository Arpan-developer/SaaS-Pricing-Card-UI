/* =========================
   MOBILE NAVBAR
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });

}


/* =========================
   PRICING TOGGLE
========================= */

const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

const priceNumbers =
    document.querySelectorAll(".price-number");


if (monthlyBtn && yearlyBtn) {

    monthlyBtn.addEventListener("click", function () {

        monthlyBtn.classList.add("active");

        yearlyBtn.classList.remove("active");

        priceNumbers.forEach(function (price) {

            price.textContent =
                price.dataset.monthly;

        });

    });


    yearlyBtn.addEventListener("click", function () {

        yearlyBtn.classList.add("active");

        monthlyBtn.classList.remove("active");

        priceNumbers.forEach(function (price) {

            price.textContent =
                price.dataset.yearly;

        });

    });

}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const formMessage =
            document.getElementById("formMessage");

        formMessage.textContent =
            "Message sent successfully!";

        contactForm.reset();

    });

}