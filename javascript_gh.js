const accessCodeInput = document.getElementById('access-code-input');
const accessCodeSubmit = document.getElementById('access-code-submit');
const allergiesSection = document.getElementById('allergies-section');
const goodreadsLink = document.getElementById('goodreads-link');

accessCodeSubmit.addEventListener('click', () => {
    if (accessCodeInput.value.trim().toLowerCase() === 'allergies') {
        allergiesSection.classList.remove('hidden-section');
        allergiesSection.classList.add('show-section');
        goodreadsLink.classList.remove('hidden-section');
        goodreadsLink.classList.add('show-section');

    } else {
        alert('Incorrect access code. Please try again.');
        accessCodeInput.value = '';
        accessCodeInput.focus();
    }
});