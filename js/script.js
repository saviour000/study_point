// Example of simple JavaScript for interactivity (Optional)
document.addEventListener("DOMContentLoaded", function() {
    const subjectSections = document.querySelectorAll('.subject h2');

    subjectSections.forEach(section => {
        section.addEventListener('click', () => {
            const units = section.nextElementSibling;
            units.classList.toggle('hidden');
        });
    });
});
