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

// //Accordion menu for Gallery

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// } 


// //Try creating a function for the below code to make this more efficient in the future. 

// // Reading image gallery for BEFORE Rennovations and Remodels folder 
// const beforeRennoGallery = document.getElementById('before-rennovation-and-remodels-gallery');

// let beforeRennovationImageIndexes = [];
// let beforeRennoLowEnd = 1;
// let beforeRennoHighEnd = 31;
// for (let rennoIndex = beforeRennoLowEnd; rennoIndex <= beforeRennoHighEnd; rennoIndex++) {
//     beforeRennovationImageIndexes.push(rennoIndex);
// }

// beforeRennovationImageIndexes.forEach(i => {
//     var anchor = document.createElement('a');
//     //anchor.href =`assets/images/IMG_${i}.jpg`; // //' data-lightbox = "GalleryName" data-title = "ImageCaption1"';
//     anchor.setAttribute('href',`assets/images/rennovation-and-remodels/renno-before/rennovations-and-remodels-before-${i}.jpg` );
//     anchor.setAttribute('data-lightbox', 'BeforeRennovationGallery');
//     anchor.setAttribute('data-title', 'ImageCaption1')
//     var image = document.createElement('IMG');
//     image.setAttribute('src',`assets/images/rennovation-and-remodels/renno-before/rennovations-and-remodels-before-${i}.jpg`);
//         image.setAttribute('loading',`lazy`);
//     anchor.appendChild(image);
//     beforeRennoGallery.appendChild(anchor);
// })

// // // Reading image Gallery for AFTER Renno and remodels folder

// // const afterRennoGallery = document.getElementById('after-rennovation-and-remodels-gallery');

// // let rennovationImageIndexes = [];
// // let rennoLowEnd = 1;
// // let rennoHighEnd = 52;
// // for (let rennoIndex = rennoLowEnd; rennoIndex <= rennoHighEnd; rennoIndex++) {
// //     rennovationImageIndexes.push(rennoIndex);
// // }

// // rennovationImageIndexes.forEach(i => {
// //     var anchor = document.createElement('a');
// //     //anchor.href =`assets/images/IMG_${i}.jpg`; // //' data-lightbox = "GalleryName" data-title = "ImageCaption1"';
// //     anchor.setAttribute('href',`assets/images/rennovation-and-remodels/renno-after/rennovations-and-remodels-after-${i}.jpg` );
// //     anchor.setAttribute('data-lightbox', 'AfterRennovationGallery');
// //     anchor.setAttribute('data-title', 'ImageCaption1')
// //     var image = document.createElement('IMG');
// //     image.setAttribute('src',`assets/images/rennovation-and-remodels/renno-after/rennovations-and-remodels-after-${i}.jpg`);
// //         image.setAttribute('loading',`lazy`);
// //     anchor.appendChild(image);
// //     afterRennoGallery.appendChild(anchor);
// // })

// // // Reading image gallery for Coatings before folder 
// // const beforeCoatGallery = document.getElementById('before-coatings-gallery');

// // let beforeCoatImageIndexes = [];
// // let beforeCoatLowEnd = 1;
// // let beforeCoatHighEnd = 21;
// // for (let coatIndex = beforeCoatLowEnd; coatIndex <= beforeCoatHighEnd; coatIndex++) {
// //     beforeCoatImageIndexes.push(coatIndex);
// // }


// // beforeCoatImageIndexes.forEach(i => {
// //     var anchor = document.createElement('a');
// //     anchor.setAttribute('href',`assets/images/coatings/coatings-after/coatings-after-${i}.jpg` );
// //     anchor.setAttribute('data-lightbox', 'CoatingGallery');
// //     anchor.setAttribute('data-title', 'ImageCaption1')
// //     var image = document.createElement('IMG');
// //     image.setAttribute('src',`assets/images/coatings/coatings-after/coatings-after-${i}.jpg`);
// //     image.setAttribute('loading',`lazy`);
// //     anchor.appendChild(image);
// //     beforeCoatGallery.appendChild(anchor);
// // })

// // // Reading image gallery for Coatings after folder 
// // const afterCoatGallery = document.getElementById('after-coatings-gallery');

// // let afterCoatImageIndexes = [];
// // let afterCoatLowEnd = 1;
// // let afterCoatHighEnd = 21;
// // for (let coatIndex = afterCoatLowEnd; coatIndex <= afterCoatHighEnd; coatIndex++) {
// //     afterCoatImageIndexes.push(coatIndex);
// // }


// // afterCoatImageIndexes.forEach(i => {
// //     var anchor = document.createElement('a');
// //     anchor.setAttribute('href',`assets/images/coatings/coatings-after/coatings-after-${i}.jpg` );
// //     anchor.setAttribute('data-lightbox', 'CoatingGallery');
// //     anchor.setAttribute('data-title', 'ImageCaption1')
// //     var image = document.createElement('IMG');
// //     image.setAttribute('src',`assets/images/coatings/coatings-after/coatings-after-${i}.jpg`);
// //     image.setAttribute('loading',`lazy`);
// //     anchor.appendChild(image);
// //     afterCoatGallery.appendChild(anchor);
// // })

// // // Reading image gallery for before Gutters folder 
// // const beforeGutGallery = document.getElementById('before-gutters-gallery');

// // let beforeGutImageIndexes = [];
// // let beforeGutLowEnd = 1;
// // let beforeGutHighEnd = 13;
// // for (let gutIndex = beforeGutLowEnd; gutIndex <= beforeGutHighEnd; gutIndex++) {
// //     beforeGutImageIndexes.push(gutIndex);
// // }


// // beforeGutImageIndexes.forEach(i => {
// //     var anchor = document.createElement('a');
// //     anchor.setAttribute('href',`assets/images/gutters/gutters-${i}.jpg` );
// //     anchor.setAttribute('data-lightbox', 'Gutters-Gallery');
// //     anchor.setAttribute('data-title', 'ImageCaption1')
// //     var image = document.createElement('IMG');
// //     image.setAttribute('src',`assets/images/gutters/gutters-${i}.jpg`);
// //     image.setAttribute('loading',`lazy`);
// //     anchor.appendChild(image);
// //     beforeGutGallery.appendChild(anchor);
// // })

// // ////////////////////////////////////////

// // // Reading image gallery for after Gutters folder 
// // const afterGutGallery = document.getElementById('after-gutters-gallery');

// // let afterGutImageIndexes = [];
// // let afterGutLowEnd = 1;
// // let afterGutHighEnd = 13;
// // for (let gutIndex = afterGutLowEnd; gutIndex <= afterGutHighEnd; gutIndex++) {
// //     afterGutImageIndexes.push(gutIndex);
// // }


// // afterGutImageIndexes.forEach(i => {
// //     var anchor = document.createElement('a');
// //     anchor.setAttribute('href',`assets/images/gutters/gutters-${i}.jpg` );
// //     anchor.setAttribute('data-lightbox', 'Gutters-Gallery');
// //     anchor.setAttribute('data-title', 'ImageCaption1')
// //     var image = document.createElement('IMG');
// //     image.setAttribute('src',`assets/images/gutters/gutters-${i}.jpg`);
// //     image.setAttribute('loading',`lazy`);
// //     anchor.appendChild(image);
// //     afterGutGallery.appendChild(anchor);
// // })

