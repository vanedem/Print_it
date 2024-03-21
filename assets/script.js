const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les flèches gauche et droite
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    
    // Ajouter un écouteur d'événements "click" à la flèche gauche
    arrowLeft.addEventListener('click', function() {
        // Afficher un message dans la console pour le clic sur la flèche gauche
        console.log("Clic sur la flèche gauche !");
    });
    
    // Ajouter un écouteur d'événements "click" à la flèche droite
    arrowRight.addEventListener('click', function() {
        // Afficher un message dans la console pour le clic sur la flèche droite
        console.log("Clic sur la flèche droite !");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const arrowRight = document.querySelector('.arrow_right');
    const arrowLeft = document.querySelector('.arrow_left');
    const bullets = document.querySelectorAll('.dots .dot');
    const slidesData = [
        {
            imagePath: "./assets/images/slideshow/slide1.jpg",
            text: "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            imagePath: "./assets/images/slideshow/slide2.jpg",
            text: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            imagePath: "./assets/images/slideshow/slide3.jpg",
            text: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            imagePath: "./assets/images/slideshow/slide4.png",
            text: "Autocollants <span>avec découpe laser sur mesure</span>"
        }
        // Ajoutez d'autres données pour les slides suivants ici
    ];

    let currentSlideIndex = 0;

    // Ajouter un écouteur d'événements "click" à la flèche droite
    arrowRight.addEventListener('click', function() {
        // Passer au slide suivant
        currentSlideIndex = (currentSlideIndex + 1) % slidesData.length;

        // Mettre à jour le bullet point actif, l'image et le texte correspondant
        updateSlide();
    });

    // Ajouter un écouteur d'événements "click" à la flèche gauche
    arrowLeft.addEventListener('click', function() {
        // Passer au slide précédent
        currentSlideIndex = (currentSlideIndex - 1 + slidesData.length) % slidesData.length;

        // Mettre à jour le bullet point actif, l'image et le texte correspondant
        updateSlide();
    });

    // Fonction pour mettre à jour le bullet point actif, l'image et le texte correspondant
    function updateSlide() {
        const slide = slidesData[currentSlideIndex];
        const imageElement = document.querySelector('.banner-img');
        const textElement = document.querySelector('p');

        // Mettre à jour l'image
        imageElement.src = slide.imagePath;

        // Mettre à jour le texte
        textElement.innerHTML = slide.text;

        // Mettre à jour le bullet point actif
        updateActiveBullet();
    }

    // Fonction pour mettre à jour le bullet point actif
    function updateActiveBullet() {
        // Retirer la classe 'dot_selected' de tous les bullets
        bullets.forEach(bullet => {
            bullet.classList.remove('dot_selected');
        });

        // Ajouter la classe 'dot_selected' au bullet correspondant au slide actif
        bullets[currentSlideIndex].classList.add('dot_selected');
    }
});