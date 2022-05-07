// Load In Animation
gsap.from(".big-text", { opacity: 0, duration: 1, x: -50, delay: 0.3 });
gsap.from(".small-text", { opacity: 0, duration: 1, x: -50, delay: 0.6 });
gsap.from(".about-me-btn", { opacity: 0, duration: 1.75, delay: 0.1, y: 30 });
gsap.from("header .background", {
    opacity: 0,
    duration: 1.25,
    x: 100,
});
gsap.from(".navbar", { opacity: 0, duration: 1, y: -50 });

// Scroll Triggered Animations
gsap.from(".about-img", {
    opacity: 0,
    duration: 0.75,
    x: -50,
    scrollTrigger: ".about-img",
});

gsap.from(".about-anim", {
    opacity: 0,
    duration: 0.75,
    stagger: 0.2,
    y: -50,
    scrollTrigger: ".about-img",
});

// Navbar transition
const navbar = document.querySelector(".navbar");
const mobileNav = document.querySelector(".mobile-nav");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 10) {
        navbar.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
    }
});

// Project Data
const projectData = [
    {
        title: "Bug Tracker",
        description:
            "A full stack web application with various features like creating projects, authentication, user roles, creating tickets for individual projects and more. This application is hosted on Heroku so it will take a second to spin up.",
        skills: ["MERN Stack", "TypeScript", "Sass", "MobX"],
        image: "bug_tracker.jpg",
        liveProject: "https://blake-bug-tracker.herokuapp.com/",
        sourceCode: "https://github.com/Blake-K-Yeboah/bug-tracker",
        category: "Personal",
    },
    {
        title: "Financial Portal",
        description:
            "A full stack application built with the MERN stack and Chakra UI for design that allows users to register, create bank accounts and manage transactions. This application is hosted on Heroku so it will take a second to spin up.",
        skills: ["MERN Stack", "ChakraUI", "Redux"],
        image: "financial_portal.jpg",
        liveProject: "https://blake-financial-portal.herokuapp.com/",
        sourceCode: "https://github.com/Blake-K-Yeboah/financial-portal",
        category: "Personal",
    },
    {
        title: "SLS Concrete Coatings",
        description:
            "A front end website for a client called “SLS Concrete Coatings” with an attractive design. Built using React (via next.js), Sass for styling, as well as TypeScript. Animations were also implemented using the GSAP library.",
        skills: ["React", "Next.js", "TypeScript", "Sass", "GSAP"],
        image: "sls_concrete_coatings.jpg",
        liveProject: "https://www.slsconcretecoatings.com.au/",
        sourceCode: "https://github.com/Blake-K-Yeboah/sls-concrete-coatings",
        category: "Freelance",
    },
    {
        title: "PicByAdam",
        description:
            "A front end static website for a client called 'PicByAdam' with a clean, effective design. Built using HTML, CSS, Sass and JavaScript. Animations were also implemented using the GSAP library to improve the aestistics of the website.",
        skills: ["HTML", "Sass", "JavaScript", "GSAP"],
        image: "picbyadam.jpg",
        liveProject: "https://sleepy-davinci-67d2f0.netlify.app/",
        sourceCode: "https://github.com/Blake-K-Yeboah/pic-by-adam",
        category: "Freelance",
    },
    {
        title: "Code Network",
        description:
            "An open-source web app made for a hackathon hosted by Hashnode. Built with React, MongoDB and Netlify Functions (similar to AWS Lambda Functions). It was styled with the Tailwind CSS library as well as framer motion for animations.",
        skills: ["React", "Netlify Functions", "MongoDB", "Tailwind CSS"],
        image: "code_network.jpg",
        liveProject: "https://codenetwork.netlify.app/",
        sourceCode: "https://github.com/Blake-K-Yeboah/code-network",
        category: "Open Source",
    },
];

// Project Modal Functionality
const projects = document.querySelectorAll(".project");
const modal = document.querySelector(".project-modal");
const overlay = document.querySelector("#project-overlay");

const updateModalContent = (index) => {
    const details = projectData[index];

    // Project Category
    document.querySelector("#project-category").textContent = details.category;
    // Title
    document.querySelector("#project-title").textContent = details.title;

    // Description
    document.querySelector("#project-description").textContent =
        details.description;

    // Background Image
    document.querySelector(
        "#project-image"
    ).style.backgroundImage = `url("../img/work-screenshots/${details.image}")`;

    // Skills
    document.querySelector("#skill-list").innerHTML = "";
    details.skills.forEach(
        (skill) =>
            (document.querySelector(
                "#skill-list"
            ).innerHTML += `<li class="skill">${skill}</li>`)
    );

    // Links
    document
        .querySelector("#view-code-btn")
        .setAttribute("href", details.sourceCode);
    document
        .querySelector("#view-project-btn")
        .setAttribute("href", details.liveProject);
};

projects.forEach((project) => {
    project.addEventListener("click", () => {
        updateModalContent(project.getAttribute("data-project-index"));
        overlay.style.display = "block";

        gsap.to("#project-overlay", { opacity: 1, duration: 0.5 });

        modal.style.display = "grid";
        gsap.to(".project-modal", { opacity: 1, duration: 0.5 });
    });
});

const closeModal = () => {
    gsap.to("#project-overlay", { opacity: 0, duration: 0.5 });
    gsap.to(".project-modal", { opacity: 0, duration: 0.5 });

    setTimeout(() => {
        overlay.style.display = "none";
        modal.style.display = "none";
    }, 500);
};

document.querySelector(".close-icon").addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Mobile Navigation
const menuIcon = document.querySelector(".menu-icon");
let mobileNavOpen = false;

const openMobileNav = () => {
    mobileNav.style.display = "block";
    gsap.to(".mobile-nav", { opacity: 1, height: 232.5, duration: 1 });
};

const closeMobileNav = () => {
    gsap.to(".mobile-nav", { opacity: 0, height: 0, duration: 1 });
    setTimeout(() => {
        mobileNav.style.display = "none";
    }, 750);
};

menuIcon.addEventListener("click", () => {
    if (!mobileNavOpen) {
        menuIcon.classList.add("change");
        openMobileNav();
    } else {
        menuIcon.classList.remove("change");
        closeMobileNav();
    }
    mobileNavOpen = !mobileNavOpen;
});

// Contact Form Validation
document.querySelector(".contact-form").addEventListener("submit", (e) => {
    const name = document.querySelector("#name").value,
        email = document.querySelector("#email").value,
        message = document.querySelector("#email").value,
        alert = document.querySelector("#form-alert");

    if (!name || !email || !message) {
        e.preventDefault();
        alert.style.display = "block";
    }
});
