const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

document.addEventListener("DOMContentLoaded", function() {
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    const dots = document.querySelector('.dots')
    slides.forEach(()=> {
        const dot = document.createElement('span')
        dot.classList.add('dot')
        dots.appendChild(dot)
    })
    const bullets = document.querySelectorAll('.dots .dot');

    const slidesData = slides.map(slide => ({
        imagePath: `./assets/images/slideshow/${slide.image}`,
        text: slide.tagLine
    }));

    // Dupliquer les premières et dernières diapositives
    const firstSlide = slidesData[0];
    const lastSlide = slidesData[slidesData.length - 1];
    // slidesData.unshift(lastSlide);
    // slidesData.push(firstSlide);

    let currentSlideIndex = 0; // Commencez par la deuxième diapositive (la première diapositive dupliquée)

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

    function updateCarousel() {
        // Si l'indice actuel est au début du carrousel (diapositive dupliquée), passez à la dernière diapositive réelle
        if (currentSlideIndex === -1) {
            currentSlideIndex = slidesData.length -1;
        }
        // Si l'indice actuel est à la fin du carrousel (diapositive dupliquée), passez à la première diapositive réelle
        if (currentSlideIndex === slidesData.length) {
            currentSlideIndex = 0;
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
        bullets[currentSlideIndex].classList.add('dot_selected'); // Soustrayez 1 car l'indice commence à 0
    }

    // Démarrez le carrousel
    updateCarousel();
    bullets.forEach((bullet, index) => {
        console.log(index)
        bullet.addEventListener('click', function() {
            currentSlideIndex = index;
            updateCarousel();
        });
    });
});