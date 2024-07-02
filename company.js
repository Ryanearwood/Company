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