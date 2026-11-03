// 1. Music Toggle Logic
const music = document.getElementById("bgMusic");
const icon = document.getElementById("music-icon");

function toggleMusic() {
    if (music.paused) {
        music.play();
        icon.classList.replace("fa-play", "fa-pause");
    } else {
        music.pause();
        icon.classList.replace("fa-pause", "fa-play");
    }
}

// 2. RSVP Functionality
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

// Flower Petal Generator Logic
const petalContainer = document.getElementById('petal-container');

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // මල් පෙත්තේ පිහිටීම සහ ප්‍රමාණය Random ලෙස තෝරාගැනීම
    petal.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 15 + 10 + 'px';
    petal.style.width = size;
    petal.style.height = size;
    
    // වැටෙන වේගය (Duration) වෙනස් කිරීම
    petal.style.animationDuration = Math.random() * 3 + 4 + 's'; 
    
    petalContainer.appendChild(petal);

    // ඇනිමේෂන් එක ඉවර වුණාම පෙත්ත ඉවත් කිරීම
    setTimeout(() => {
        petal.remove();
    }, 7000);
}

// හැම මිලි තත්පර 400කට වරක්ම අලුත් පෙත්තක් සාදයි
setInterval(createPetal, 400);

const particleContainer = document.getElementById('petal-container'); // කලින් තිබ්බ container එකම පාවිච්චි කරන්න පුළුවන්

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size and position
    const size = Math.random() * 5 + 2 + 'px';
    particle.style.width = size;
    particle.style.height = size;
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.bottom = "-5vh"; // යට ඉඳන් උඩට යන්නේ
    
    // Random speed
    particle.style.animationDuration = Math.random() * 5 + 5 + 's';
    
    particleContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 8000);
}

// තත්පරයකට කිහිපයක් ජනනය කරන්න
setInterval(createParticle, 200);

window.addEventListener('load', () => {
    // තත්පර 4.5කින් overlay එක අයින් වෙලා ඇත්ත ඉන්විටේෂන් එක පේන්න
    setTimeout(() => {
        document.getElementById('entrance-overlay').classList.add('fade-out-overlay');
        
        // පේජ් එකේ මියුසික් එක ප්ලේ කරන්න
        const music = document.getElementById("bgMusic");
        if(music) music.play();
    }, 4500);
});

window.addEventListener('load', () => {
    const sparkleContainer = document.getElementById('sparkles');

    // තරු (Sparkles) නිර්මාණය කිරීම
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = Math.random() * 200 - 100 + 'px';
        sparkle.style.top = Math.random() * 100 + 'px';
        sparkleContainer.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1500);
    }

    // තරු වැටෙන්න පටන් ගන්න කාලය
    const sparkleInterval = setInterval(createSparkle, 150);

    setTimeout(() => {
        clearInterval(sparkleInterval);
        document.getElementById('entrance-overlay').classList.add('fade-out-overlay');
        
        const music = document.getElementById("bgMusic");
        if(music) music.play();
    }, 5500); // පොඩ්ඩක් වෙලාව වැඩි කරා ඇනිමේෂන් ටික ලස්සනට පේන්න
});