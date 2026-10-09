const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const feedback = document.getElementById("formFeedback");
        const preview = document.getElementById("formPreview");

        preview.hidden = true;

        if (!name || !email || !message) {
            feedback.textContent = "Please fill in all fields.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            feedback.textContent = "Please enter a valid email address.";
            return;
        }

        document.getElementById("previewName").textContent =
            "Name: " + name;

        document.getElementById("previewEmail").textContent =
            "Email: " + email;

        document.getElementById("previewMessage").textContent =
            "Message: " + message;

        feedback.textContent = "Your data was validated successfully.";
        preview.hidden = false;
    });
}
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Switch to Light Mode";
        } else {
            themeToggle.textContent = "Switch to Dark Mode";
        }
    });
}const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}const galleryImages = [
    {
        src: "images/football.jpg",
        caption: "My Football Picture"
    },
    {
        src: "images/gaming.jpg",
        caption: "My Gaming Picture"
    },
    {
        src: "images/student.jpg",
        caption: "My Student Picture"
    }
];
function updateDateTime() {
    const now = new Date();

    document.getElementById("currentDate").textContent =
        "Date: " + now.toLocaleDateString();

    document.getElementById("currentTime").textContent =
        "Time: " + now.toLocaleTimeString();
}

updateDateTime();
setInterval(updateDateTime, 1000);
function updateGreeting() {
    const greeting = document.getElementById("greeting");

    if (!greeting) {
        return;
    }

    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good Morning! ☀️";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon! 🌤️";
    } else {
        greeting.textContent = "Good Evening! 🌙";
    }
}

updateGreeting();
setInterval(updateGreeting, 60000);
