//Accordion menu for Gallery

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

//Try creating a function for the below code to make this more efficient in the future. 

// Reading image gallery for BEFORE Rennovations and Remodels folder 
const beforeRennoGallery = document.getElementById('before-rennovation-and-remodels-gallery');

let beforeRennovationImageIndexes = [];
let beforeRennoLowEnd = 1;
let beforeRennoHighEnd = 33;
for (let rennoIndex = beforeRennoLowEnd; rennoIndex <= beforeRennoHighEnd; rennoIndex++) {
    beforeRennovationImageIndexes.push(rennoIndex);
}

beforeRennovationImageIndexes.forEach(i => {
    var anchor = document.createElement('a');
    //anchor.href =`assets/images/IMG_${i}.jpg`; // //' data-lightbox = "GalleryName" data-title = "ImageCaption1"';
    anchor.setAttribute('href',`assets/images/rennovation-and-remodels/renno-before/rennovations-and-remodels-before-${i}.jpg` );
    anchor.setAttribute('data-lightbox', 'BeforeRennovationGallery');
    anchor.setAttribute('data-title', `rennovations-and-remodels-before-${i}`)
    var image = document.createElement('IMG');
    image.setAttribute('src',`assets/images/rennovation-and-remodels/renno-before/rennovations-and-remodels-before-${i}.jpg`);
        image.setAttribute('loading',`lazy`);
    anchor.appendChild(image);
    beforeRennoGallery.appendChild(anchor);
})

// Reading image Gallery for AFTER Renno and remodels folder

const afterRennoGallery = document.getElementById('after-rennovation-and-remodels-gallery');

let rennovationImageIndexes = [];
let rennoLowEnd = 1;
let rennoHighEnd = 50;
for (let rennoIndex = rennoLowEnd; rennoIndex <= rennoHighEnd; rennoIndex++) {
    rennovationImageIndexes.push(rennoIndex);
}

rennovationImageIndexes.forEach(i => {
    var anchor = document.createElement('a');
    //anchor.href =`assets/images/IMG_${i}.jpg`; // //' data-lightbox = "GalleryName" data-title = "ImageCaption1"';
    anchor.setAttribute('href',`assets/images/rennovation-and-remodels/renno-after/rennovations-and-remodels-after-${i}.jpg` );
    anchor.setAttribute('data-lightbox', 'AfterRennovationGallery');
    anchor.setAttribute('data-title', `rennovations-and-remodels-after-${i}`)
    var image = document.createElement('IMG');
    image.setAttribute('src',`assets/images/rennovation-and-remodels/renno-after/rennovations-and-remodels-after-${i}.jpg`);
        image.setAttribute('loading',`lazy`);
    anchor.appendChild(image);
    afterRennoGallery.appendChild(anchor);
})

// Reading image gallery for Coatings before folder 
const beforeCoatGallery = document.getElementById('before-coatings-gallery');

let beforeCoatImageIndexes = [];
let beforeCoatLowEnd = 1;
let beforeCoatHighEnd = 28;
for (let coatIndex = beforeCoatLowEnd; coatIndex <= beforeCoatHighEnd; coatIndex++) {
    beforeCoatImageIndexes.push(coatIndex);
}


beforeCoatImageIndexes.forEach(i => {
    var anchor = document.createElement('a');
    anchor.setAttribute('href',`assets/images/coatings/coatings-before/coatings-before-${i}.jpg` );
    anchor.setAttribute('data-lightbox', 'BeforeCoatingGallery');
    anchor.setAttribute('data-title', `coatings-before-${i}`)
    var image = document.createElement('IMG');
    image.setAttribute('src',`assets/images/coatings/coatings-before/coatings-before-${i}.jpg`);
    image.setAttribute('loading',`lazy`);
    anchor.appendChild(image);
    beforeCoatGallery.appendChild(anchor);
})

// Reading image gallery for Coatings after folder 
const afterCoatGallery = document.getElementById('after-coatings-gallery');

let afterCoatImageIndexes = [];
let afterCoatLowEnd = 1;
let afterCoatHighEnd = 32;
for (let coatIndex = afterCoatLowEnd; coatIndex <= afterCoatHighEnd; coatIndex++) {
    afterCoatImageIndexes.push(coatIndex);
}


afterCoatImageIndexes.forEach(i => {
    var anchor = document.createElement('a');
    anchor.setAttribute('href',`assets/images/coatings/coatings-after/coatings-after-${i}.jpg` );
    anchor.setAttribute('data-lightbox', 'AfterCoatingGallery');
    anchor.setAttribute('data-title', `coatings-after-${i}`)
    var image = document.createElement('IMG');
    image.setAttribute('src',`assets/images/coatings/coatings-after/coatings-after-${i}.jpg`);
    image.setAttribute('loading',`lazy`);
    anchor.appendChild(image);
    afterCoatGallery.appendChild(anchor);
})

// Reading image gallery for before Gutters folder 
const beforeGutGallery = document.getElementById('before-gutters-gallery');

let beforeGutImageIndexes = [];
let beforeGutLowEnd = 1;
let beforeGutHighEnd = 17;
for (let gutIndex = beforeGutLowEnd; gutIndex <= beforeGutHighEnd; gutIndex++) {
    beforeGutImageIndexes.push(gutIndex);
}


beforeGutImageIndexes.forEach(i => {
    var anchor = document.createElement('a');
    anchor.setAttribute('href',`assets/images/gutters/gut-before/gutters-before-${i}.jpg` );
    anchor.setAttribute('data-lightbox', 'BeforeGutters-Gallery');
    anchor.setAttribute('data-title', `gutters-before-${i}`)
    var image = document.createElement('IMG');
    image.setAttribute('src',`assets/images/gutters/gut-before/gutters-before-${i}.jpg`);
    image.setAttribute('loading',`lazy`);
    anchor.appendChild(image);
    beforeGutGallery.appendChild(anchor);
})

////////////////////////////////////////

// Reading image gallery for after Gutters folder 
const afterGutGallery = document.getElementById('after-gutters-gallery');

let afterGutImageIndexes = [];
let afterGutLowEnd = 1; 
let afterGutHighEnd = 21;
for (let gutIndex = afterGutLowEnd; gutIndex <= afterGutHighEnd; gutIndex++) {
    afterGutImageIndexes.push(gutIndex);
}


afterGutImageIndexes.forEach(i => {
    var anchor = document.createElement('a');
    anchor.setAttribute('href',`assets/images/gutters/gut-after/gutters-after-${i}.jpg` );
    anchor.setAttribute('data-lightbox', 'AfterGutters-Gallery');
    anchor.setAttribute('data-title', `gutters-after-${i}`)
    var image = document.createElement('IMG');
    image.setAttribute('src',`assets/images/gutters/gut-after/gutters-after-${i}.jpg`);
    image.setAttribute('loading',`lazy`);
    anchor.appendChild(image);
    afterGutGallery.appendChild(anchor);
})

