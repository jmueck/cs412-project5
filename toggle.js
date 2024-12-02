const toggleButton = document.getElementById('toggleButton');
const cssLink = document.getElementById('cssLink');

// Check if there's a stored style preference in Local Storage
const storedStyle = localStorage.getItem('stylePreference');
if (storedStyle === 'style2') {
    cssLink.href = 'Personal_Website_2.css';
}

toggleButton.addEventListener('click', () => {
    if (cssLink.href.endsWith('Personal_Website.css')) {
        cssLink.href = 'Personal_Website_2.css';
        localStorage.setItem('stylePreference', 'style2'); // Store the preference in Local Storage
    } else {
        cssLink.href = 'Personal_Website.css';
        localStorage.setItem('stylePreference', 'style1');
    }
});
