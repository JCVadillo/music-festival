document.addEventListener('DOMContentLoaded', function(){
    startApp();
});

function startApp(){
    fixedNav();
    createGallery();
    scrollNav();
}

function fixedNav(){
    const bar = document.querySelector('.header')
    const aboutFest = document.querySelector('.about-fest')

    // body element to fix the jumpy scroll when fixind the bar
    const body = document.querySelector('body')
    window.addEventListener('scroll', function(){
        
        if (aboutFest.getBoundingClientRect().top <= 300){
            bar.classList.add('fixed')
            body.classList.add('body-scroll')
        }else{
            bar.classList.remove('fixed')
            body.classList.remove('body-scroll')
        }
    })
}

function scrollNav(){
    
    const links = document.querySelectorAll('.main-nav a');

    links.forEach( link => {
        link.addEventListener('click', function(e){

            e.preventDefault();

            const sectionScroll = e.target.attributes.href.value;
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({ behavior: "smooth"});
        });
    });
}


function createGallery(){
    // getting the class where the image will be inserted
    const gallery = document.querySelector('.images-gallery');
    
    // looping in the range of the number of images will be displayed
    for(let i = 1; i <= 12; i++){

        // creating a new element for each iteration
        const image = document.createElement('picture');
        
        // Get the image to be insterted
        image.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" src="build/img/thumb/${i}.jpg" alt="Image gallery" width="200" height="300">
        `;

        // as callback to be able to pass the parms of the image is being click
        image.onclick = function(){
            showImage(i)
        }
        // append the image into the selected class to insert the image
        gallery.appendChild(image);
    }
};

function showImage(id){

    // create and getting the element
    const image = document.createElement('picture');
    // get the image into the element created
    image.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" src="build/img/grande/${id}.jpg" alt="Image gallery" width="200" height="300">
    `;

    // overlay div for the image
    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    // class to give it style
    overlay.classList.add('overlay')
    overlay.onclick = function(){
        const body = document.querySelector('body')
        // Removing the fix-body class from body when closing overlay
        body.classList.remove('fix-body')
        overlay.remove();
    }

    //Button to close the modal
    const closeModal = document.createElement('P');
    closeModal.textContent = 'X';
    closeModal.classList.add('btn-close');
    overlay.appendChild(closeModal)

    // callback to close the modal

    closeModal.onclick = function (){
        const body = document.querySelector('body')
        // Removing the fix-body class from body when closing overlay
        body.classList.remove('fix-body')
        overlay.remove();
    }
    // add the overlay in the body of the html
    const body = document.querySelector('body')
    body.appendChild(overlay);
    body.classList.add('fix-body')
}