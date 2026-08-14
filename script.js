
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navRight = document.querySelector('.nav-right');

    if (menuBtn) {

        menuBtn.addEventListener('click', function () {

            navMenu.classList.toggle('active');
            navRight.classList.toggle('active');
            menuBtn.classList.toggle('active');

        });


        /* Close menu when clicking a navigation link */

        const menuLinks = document.querySelectorAll('.nav-menu a');

        menuLinks.forEach(function (link) {

            link.addEventListener('click', function () {

                navMenu.classList.remove('active');
                navRight.classList.remove('active');
                menuBtn.classList.remove('active');

            });

        });


        /* Close menu when clicking Login */

        const loginBtn = document.querySelector('.login-btn');

        if (loginBtn) {

            loginBtn.addEventListener('click', function () {

                navMenu.classList.remove('active');
                navRight.classList.remove('active');
                menuBtn.classList.remove('active');

            });

        }


        /* Close menu when clicking Register */

        const registerBtn = document.querySelector('.register-btn');

        if (registerBtn) {

            registerBtn.addEventListener('click', function () {

                navMenu.classList.remove('active');
                navRight.classList.remove('active');
                menuBtn.classList.remove('active');

            });

        }

    }




//pop up start

    /* =========================
   UNDER CONSTRUCTION MODAL
========================= */

const constructionModal =
    document.getElementById("constructionModal");

const constructionClose =
    document.getElementById("constructionClose");

const constructionOverlay =
    document.querySelector(".construction-overlay");


/* =========================
   OPEN MODAL
========================= */

function openConstructionModal() {

    constructionModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================
   CLOSE MODAL
========================= */

function closeConstructionModal() {

    constructionModal.classList.remove("active");

    document.body.style.overflow = "";

}


 

/* =========================
   LOGIN / REGISTER MODAL
========================= */

document.addEventListener("click", function (event) {

    const button = event.target.closest(".construction-popup-btn");

    if (!button) return;

    event.preventDefault();

    openConstructionModal();

});

/* =========================
   CLOSE BUTTON
========================= */

if (constructionClose) {

    constructionClose.addEventListener(
        "click",
        closeConstructionModal
    );

}


/* =========================
   CLICK OUTSIDE
========================= */

if (constructionOverlay) {

    constructionOverlay.addEventListener(
        "click",
        closeConstructionModal
    );

}


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeConstructionModal();

    }

});


/* =========================
   10 DAY COUNTDOWN
========================= */

/*
   The deadline is saved in localStorage.
   Therefore refreshing the page will NOT
   restart the 10 days.
*/

let constructionDeadline =
    localStorage.getItem("mwiConstructionDeadline");


if (!constructionDeadline) {

    const deadline = new Date();

    deadline.setDate(deadline.getDate() + 10);

    constructionDeadline =
        deadline.getTime();

    localStorage.setItem(
        "mwiConstructionDeadline",
        constructionDeadline
    );

}


function updateConstructionCountdown() {

    const now = new Date().getTime();

    const distance =
        Number(constructionDeadline) - now;


    if (distance <= 0) {

        document.getElementById("countdownDays").textContent = "00";
        document.getElementById("countdownHours").textContent = "00";
        document.getElementById("countdownMinutes").textContent = "00";
        document.getElementById("countdownSeconds").textContent = "00";

        return;

    }


    const days =
        Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance / (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (distance / (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (distance / 1000) % 60
        );


    document.getElementById("countdownDays")
        .textContent = String(days).padStart(2, "0");

    document.getElementById("countdownHours")
        .textContent = String(hours).padStart(2, "0");

    document.getElementById("countdownMinutes")
        .textContent = String(minutes).padStart(2, "0");

    document.getElementById("countdownSeconds")
        .textContent = String(seconds).padStart(2, "0");

}


updateConstructionCountdown();

setInterval(
    updateConstructionCountdown,
    1000
);


// end popup