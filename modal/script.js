const watchBtn = document.getElementById('watch-btn');
const modalContainer = document.getElementById('modal-hidden');
const container = document.querySelector('.container');
const popularMovies = document.querySelector('.popular-movies');
const collection = document.querySelector('.bottom-container');

watchBtn.addEventListener('click', opened);
popularMovies.addEventListener('click', opened);
collection.addEventListener('click', opened)

function opened() {
    modalContainer.style.display = 'block';
    container.classList.add('blurred');
};

const closeModal = document.querySelector('.modal-close');
const secCloseModal = document.querySelector('.secondary-btn');
closeModal.addEventListener('click', closed);
secCloseModal.addEventListener('click', closed);

function closed() {
    modalContainer.style.display = 'none';
    container.classList.remove('blurred');
}