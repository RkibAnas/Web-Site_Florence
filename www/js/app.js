const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});

function initCarousel(images, carouselClass) {
    // Index de l'image actuellement affichée.
    let currentIndex = 0;

    // Sélectionne le conteneur du carrousel en utilisant la classe passée en paramètre.
    const container = document.querySelector(`.${carouselClass}`);
    console.log(container)

    // Sélectionne l'élément <img> dans le conteneur du carrousel.
    const imgElement = container.querySelector('#carouselImg');

    // Sélectionne les boutons précédent et suivant dans le conteneur du carrousel.
    const prevButton = container.querySelector('#prevBtn');
    const nextButton = container.querySelector('#nextBtn');

    // Initialise le carrousel avec la première image du tableau.
    imgElement.src = images[currentIndex];

    // Ajoute un événement d'écoute au bouton précédent.
    prevButton.addEventListener('click', function () {
        // Diminue l'index pour montrer l'image précédente.
        currentIndex--;

        // Si on est à la première image, passe à la dernière.
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        // Met à jour l'élément <img> pour afficher la nouvelle image.
        imgElement.src = images[currentIndex];
    });

    // Ajoute un événement d'écoute au bouton suivant.
    nextButton.addEventListener('click', function () {
        // Augmente l'index pour montrer l'image suivante.
        currentIndex++;

        // Si on est à la dernière image, revient à la première.
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        // Met à jour l'élément <img> pour afficher la nouvelle image.
        imgElement.src = images[currentIndex];
    });
}


const images1 = [
    'images/section-1/image-1.jpg',
    'images/section-1/image-2.jpg',
    'images/section-1/image-3.jpg',
    'images/section-1/image-4.jpg',
];

const images2 = [
    'images/section-2/image-1.jpg',
    'images/section-2/image-2.jpg',
    'images/section-2/image-3.jpg',
    'images/section-2/image-4.jpg',
];

const images3 = [
    'images/section-3/image-1.jpg',
    'images/section-3/image-2.jpg',
    'images/section-3/image-3.jpg',
    'images/section-3/image-4.jpg',
];

const images4 = [
    'images/section-4/image-1.jpg',
    'images/section-4/image-2.jpg',
    'images/section-4/image-3.jpg',
    'images/section-4/image-4.jpg',
];


initCarousel(images1, 'carousel1');
initCarousel(images2, 'carousel2');
initCarousel(images3, 'carousel3');
initCarousel(images4, 'carousel4');
