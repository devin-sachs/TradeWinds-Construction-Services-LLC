/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY = 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 


// Reading image gallery for Rennovations and Remodels folder 
const rennoGallery = document.getElementById('rennovation-and-remodels-gallery');

let rennovationImageIndexes = [];
let rennoLowEnd = 1;
let rennoHighEnd = 52;
for (let rennoIndex = rennoLowEnd; rennoIndex <= rennoHighEnd; rennoIndex++) {
    rennovationImageIndexes.push(rennoIndex);
}

//const selectedIndex = null; 

rennovationImageIndexes.forEach(i => {
    var anchor = document.createElement('a');
    //anchor.href =`assets/images/IMG_${i}.jpg`; // //' data-lightbox = "GalleryName" data-title = "ImageCaption1"';
    anchor.setAttribute('href',`assets/images/rennovation-and-remodels/renno-after/rennovations-and-remodels-after-${i}.jpg` );
    anchor.setAttribute('data-lightbox', 'RennovationGallery');
    anchor.setAttribute('data-title', 'ImageCaption1')
    var image = document.createElement('IMG');
    image.setAttribute('src',`assets/images/rennovation-and-remodels/renno-after/rennovations-and-remodels-after-${i}.jpg`);
        image.setAttribute('loading',`lazy`);
    anchor.appendChild(image);
    rennoGallery.appendChild(anchor);
})

// Reading image gallery for Coatings folder 
const coatGallery = document.getElementById('coatings-gallery');

let coatImageIndexes = [];
let coatLowEnd = 1;
let coatHighEnd = 39;
for (let coatIndex = coatLowEnd; coatIndex <= coatHighEnd; coatIndex++) {
    coatImageIndexes.push(coatIndex);
}

//const selectedIndex = null; 

coatImageIndexes.forEach(i => {
    var anchor = document.createElement('a');
    anchor.setAttribute('href',`assets/images/coatings/coatings-after/coatings-after-${i}.jpg` );
    anchor.setAttribute('data-lightbox', 'CoatingGallery');
    anchor.setAttribute('data-title', 'ImageCaption1')
    var image = document.createElement('IMG');
    image.setAttribute('src',`assets/images/coatings/coatings-after/coatings-after-${i}.jpg`);
    image.setAttribute('loading',`lazy`);
    anchor.appendChild(image);
    coatGallery.appendChild(anchor);
})

// Reading image gallery for Gutters folder 
const gutGallery = document.getElementById('gutters-gallery');

let gutImageIndexes = [];
let gutLowEnd = 1;
let gutHighEnd = 13;
for (let gutIndex = gutLowEnd; gutIndex <= gutHighEnd; gutIndex++) {
    gutImageIndexes.push(gutIndex);
}


gutImageIndexes.forEach(i => {
    var anchor = document.createElement('a');
    anchor.setAttribute('href',`assets/images/gutters/gutters-${i}.jpg` );
    anchor.setAttribute('data-lightbox', 'Gutters-Gallery');
    anchor.setAttribute('data-title', 'ImageCaption1')
    var image = document.createElement('IMG');
    image.setAttribute('src',`assets/images/gutters/gutters-${i}.jpg`);
    image.setAttribute('loading',`lazy`);
    anchor.appendChild(image);
    gutGallery.appendChild(anchor);
})