/* ==========================================
   MOBILE MENU
========================================== */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


if (mobileMenuButton && mobileMenu) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle("open");

        }
    );


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove("open");

            }
        );

    });

}


/* ==========================================
   NAVBAR SCROLL
========================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.style.background =
                "rgba(5, 6, 13, 0.92)";

            navbar.style.boxShadow =
                "0 10px 40px rgba(0, 0, 0, 0.18)";

        } else {

            navbar.style.background =
                "rgba(7, 8, 16, 0.78)";

            navbar.style.boxShadow =
                "none";

        }

    },
    {
        passive: true
    }
);


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        ".nav-link[href^='#']"
    );


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");


        if (
            href === "#" + currentSection ||
            (
                currentSection === "accueil" &&
                href === "#accueil"
            )
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);

updateActiveNavigation();


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(
        ".server-main-card, .server-card, .feature-card, .section-heading, .cta-content"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

        revealObserver.observe(
            element
        );

    }
);


/* ==========================================
   SMOOTH ANCHOR
========================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    !targetId
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* ==========================================
   HERO CARD PARALLAX
========================================== */

const heroVisual =
    document.querySelector(".hero-visual");

const visualCard =
    document.querySelector(".visual-card");


if (
    heroVisual &&
    visualCard &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    heroVisual.addEventListener(
        "mousemove",
        event => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 8;

            const rotateX =
                ((y / rect.height) - 0.5) * -8;

            visualCard.style.transform =
                `
                perspective(1000px)
                rotateY(${rotateY}deg)
                rotateX(${rotateX}deg)
                translateY(-5px)
                `;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            visualCard.style.transform =
                `
                perspective(1000px)
                rotateY(-7deg)
                rotateX(3deg)
                translateY(0)
                `;

        }
    );

}


/* ==========================================
   YEAR
========================================== */

const currentYear =
    new Date().getFullYear();

const yearElements =
    document.querySelectorAll(
        "[data-year]"
    );

yearElements.forEach(
    element => {

        element.textContent =
            currentYear;

    }
);