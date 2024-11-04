let darkmode = localStorage.getItem('darkmode');
const theme = document.querySelector('.theme');

const activerDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}
const desactiverDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode',null);
}
  
if(darkmode === 'active') {
    activerDarkMode();
}else{
    desactiverDarkmode();
}

theme.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    if(darkmode !== 'active'){
        activerDarkMode();
    }else {
        desactiverDarkmode();
    }
})

let currentRating = 0;

const etoiles = document.querySelectorAll(".nejma i");
const commentInput = document.getElementById('commentInput');
const btn = document.getElementById('btn');

etoiles.forEach((etoile, index) => {
    etoile.addEventListener('click', () => {
        currentRating = index + 1;
        updateStars();
    });
});

function updateStars() {
    etoiles.forEach((etoile, index) => {
        if (index < currentRating) {
            etoile.classList.add('selected');
        } else {
            etoile.classList.remove('selected');
        }
    });
}

function addReview() {
    const commentText = commentInput.value.trim();

    if (commentText === '' || currentRating === 0) {
        alert('Please enter a comment and select a star rating.');
        return;
    }

    const reviewElement = document.createElement('div');
    reviewElement.classList.add('comment');

    const starsElement = document.createElement('div');
    starsElement.classList.add('stars');
    starsElement.innerHTML = '★'.repeat(currentRating) + '☆'.repeat(5 - currentRating);
    reviewElement.appendChild(starsElement);

    const textElement = document.createElement('div');
    textElement.textContent = commentText;
    reviewElement.appendChild(textElement);

    const commentsSection = document.getElementById('comments-section');
    commentsSection.appendChild(reviewElement);

    commentInput.value = '';
    currentRating = 0;
    updateStars();
}

btn.addEventListener('click', addReview);