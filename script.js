// 1. Scroll reveal animation for sections using data-aos
const revealElements = document.querySelectorAll('[data-aos]');

if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('aos-animate'));
}

const attendingButtons = document.querySelectorAll('.choice-btn');
const attendingStatusField = document.getElementById('attendingStatus');

attendingButtons.forEach((button) => {
    button.addEventListener('click', () => {
        attendingButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        if (attendingStatusField) {
            attendingStatusField.value = button.dataset.attending || 'Joyfully Accept';
        }
    });
});

function sendRSVP() {
    const name = document.getElementById("guestName").value.trim();
    const emailInput = document.getElementById("guestEmail");
    const email = emailInput ? emailInput.value.trim() : "";
    const attending = document.getElementById("attendingStatus")?.value || "Joyfully Accept";
    const count = document.getElementById("guestCount").value.trim() || "1";

    if (!name) {
        alert("Please enter your name to confirm.");
        return;
    }

    const phoneNumber = "94741512692"; // Replace with the correct WhatsApp number
    const lines = [
        "*Wedding RSVP Confirmation*",
        "",
        "Name: " + name,
        "Attending: " + attending,
        "Guests: " + count
    ];

    if (email) {
        lines.push("Email: " + email);
    }

    lines.push("", "Thank you for celebrating with us!");

    const rawMessage = lines.join("\n");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(rawMessage)}`;
    window.open(whatsappURL, '_blank');
}

// 3. Modern Countdown Timer
const targetDate = new Date("2026-12-10T20:30:00").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");

const formatTwoDigits = (value) => String(Math.max(0, value)).padStart(2, '0');

const updateTimer = () => {
    if (!daysEl || !hoursEl || !minsEl) return;

    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minsEl.textContent = "00";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    daysEl.textContent = formatTwoDigits(days);
    hoursEl.textContent = formatTwoDigits(hours);
    minsEl.textContent = formatTwoDigits(minutes);
};

setInterval(updateTimer, 1000);
updateTimer();

