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
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
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
    ];

    // Dupliquer les premières et dernières diapositives
    const firstSlide = slidesData[0];
    const lastSlide = slidesData[slidesData.length - 1];
    slidesData.unshift(lastSlide);
    slidesData.push(firstSlide);

    let currentSlideIndex = 1; // Commencez par la deuxième diapositive (la première diapositive dupliquée)

    // Mettre à jour le carrousel lors du clic sur la flèche droite
    arrowRight.addEventListener('click', function() {
        currentSlideIndex++;
        updateCarousel();
    });

    // Mettre à jour le carrousel lors du clic sur la flèche gauche
    arrowLeft.addEventListener('click', function() {
        currentSlideIndex--;
        updateCarousel();
    });

    // Fonction pour mettre à jour le carrousel
    function updateCarousel() {
        // Si l'indice actuel est au début du carrousel (diapositive dupliquée), passez à la dernière diapositive réelle
        if (currentSlideIndex === 0) {
            currentSlideIndex = slidesData.length - 2;
        }
        // Si l'indice actuel est à la fin du carrousel (diapositive dupliquée), passez à la première diapositive réelle
        else if (currentSlideIndex === slidesData.length - 1) {
            currentSlideIndex = 1;
        }

        // Mettre à jour le contenu du carrousel
        const slide = slidesData[currentSlideIndex];
        const imageElement = document.querySelector('.banner-img');
        const textElement = document.querySelector('p');
        imageElement.src = slide.imagePath;
        textElement.innerHTML = slide.text;

        // Mettre à jour le point sélectionné
        updateActiveBullet();
    }

    // Mettre à jour le point sélectionné
    function updateActiveBullet() {
        bullets.forEach(bullet => {
            bullet.classList.remove('dot_selected');
        });
        bullets[currentSlideIndex - 1].classList.add('dot_selected'); // Soustrayez 1 car l'indice commence à 0
    }

    // Démarrez le carrousel
    updateCarousel();
});