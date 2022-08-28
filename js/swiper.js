const services = [
    {img:"./assets/imgs/niños11.jpg", name:"sesion craft"},
    {img:"./assets/imgs/niños1.jpg", name:"sesion craft"},
    {img:"./assets/imgs/niños2.jpg", name:"sesion craft"},
    {img:"./assets/imgs/niños5.jpg", name:"sesion craft"},
    {img:"./assets/imgs/niños10.jpg", name:"sesion craft"},
    {img:"./assets/imgs/niños6.jpg", name:"sesion craft"},

]

const serviceContainer = document.getElementById("slides")

function servicios(){ 
    for (const serv of services)
    {    
        let div = document.createElement("div");
        div.setAttribute("class", "swiper-slide");
        div.innerHTML = 
                `
                    <img loading="lazy"  src="${serv.img}" alt="${serv.name}">
                `;
        serviceContainer.appendChild(div)
    }
}
servicios()

/* Swipper */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        577: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        },

        800: {
            slidesPerView: 3,
            spaceBetween: 40
        },

        960: {
            slidesPerView: 4 ,
            spaceBetween: 80
        },

        1120: {
            slidesPerView: 5,
            spaceBetween: 120
        },

        1440: {
            spaceBetween: 170,
            slidesPerView: 5,
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });