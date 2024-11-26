const lastModified = new Date(document.lastModified);

// Format the date as desired (e.g., "Month Day, Year")
const formattedDate = lastModified.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
});

// Update the content of the element with the ID "lastModified" with the formatted date
document.getElementById("lastModified").textContent = formattedDate;

function activateButton(checkbox) {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = !checkbox.checked;
}

// Hamburger menu functionality
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.toggle('show');
});

// JavaScript to enhance the animated banner
document.querySelectorAll('.banner-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        document.querySelector('.banner-content').style.animationPlayState = 'paused';
    });

    item.addEventListener('mouseout', () => {
        document.querySelector('.banner-content').style.animationPlayState = 'running';
    });
});

