// Display current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Smooth scrolling
document.querySelectorAll('nav a, .hero .btn').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// Welcome message in console
console.log("Welcome to Dharaneedharan's Portfolio!");
