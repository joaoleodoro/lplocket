const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        document.addEventListener("DOMContentLoaded", function() {
            gsap.to("#widget", {
                opacity: 1,
                duration: 2,
                ease: "power3.out"
            });
        });
        