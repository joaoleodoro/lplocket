const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

document.addEventListener("DOMContentLoaded", function() {

    gsap.fromTo("#navbar", {
        opacity: 0 }, {
            opacity: 1,
            duration: 1
        })

    gsap.fromTo("#heroTitle", {
        y: -40,
        opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 0.5
        })

    gsap.fromTo("#heroSubtitle", {
        y: -40,
        opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.2
        })

    gsap.fromTo("#heroBtn", {
        opacity: 0 }, {
            opacity: 1,
            duration: 0.5,
            delay: 0.4,
            onComplete: function () {
                gsap.fromTo("#widgets-l", {
                    x: -700,
                    opacity: 0 }, {
                        x: 0,
                        opacity: 1,
                        duration: 1
                    });
                
                gsap.fromTo("#widgets-r", {
                    x: 700,
                    opacity: 0 }, {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        onComplete: function () {
                            gsap.to("#discover", {
                                opacity: 1,
                                duration: 1
                            })
                        }
                    });
            }
        })

    gsap.fromTo("#mockup1", {
        x: -200,
        y: -600 }, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger:{
                trigger: "#mockups",
            }
        })
    
    gsap.fromTo("#mockup2", {
        y: -600 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            scrollTrigger:{
                trigger: "#mockups",
            }
        })

    gsap.fromTo("#mockup3", {
        x: 200,
        y: -600 }, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.6,
            scrollTrigger:{
                trigger: "#mockups",
            }
        })

    gsap.fromTo("#aboutTitle", {
        y: -40 }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger:{
                trigger: "#about"
            }
        })

    gsap.fromTo("#aboutSubtitle", 
        { y: -40, opacity: 0 }, 
        { 
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.2,
            onComplete: function () {
                gsap.fromTo("#creatorImg, #creatorText, #ideaText", 
                    { y: -40, opacity: 0 }, 
                    { y: 0, opacity: 1, duration: 0.5 }
                );

            },
            scrollTrigger: { 
                trigger: "#about",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        }
    );

    gsap.fromTo("#adTitle", 
        { y: -40 }, 
        { 
            y: 0,
            opacity: 1,
            duration: 0.5,
            onComplete: function () {
                gsap.to("#ad1, #ad2, #ad3, #ad4", 
                    { y: 0, opacity: 1, duration: 0.5 }
                );

            },
            scrollTrigger: { 
                trigger: "#advantages",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        }
    );
        
});



fetch("assets/svgs/mockup.svg")
.then(response => response.text())
.then(svgContent => {
    document.getElementById("svg-container").innerHTML = svgContent;

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo("#widget", {
    y: -600 }, {
        y: 0,
    scrollTrigger:{
        trigger: "#discover",
        start: "top 500px",
        end: "bottom 900px",
        scrub: true,
    }
    })

    gsap.fromTo("#mockup", {
        y: 200,
        opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger:{
                trigger: "#discover",
                start: "top 500px",
            },
            onComplete: function () {
                gsap.fromTo("#mockup-video", {
                    y: 200,
                    opacity: 0}, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        scrollTrigger:{
                            trigger: "#discover",
                            start: "top 300px",
                        }
                    })
            }
        })

})
.catch(error => console.error("Erro ao carregar o SVG:", error));
