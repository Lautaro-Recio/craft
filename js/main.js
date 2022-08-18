/* const carousel = [
    {img:["./assets/imgs/Primario.jpg","./assets/imgs/Primario.jpg","./assets/imgs/Primario.jpg"]},
    {img:["./assets/imgs/Primario.jpg","./assets/imgs/Primario.jpg",]},
    {img:["./assets/imgs/Primario.jpg","./assets/imgs/Primario.jpg"],},
]


const proyectos = document.getElementById("divCarousel")

const carouselContainer = ()=>{

    
    for (let i = 0; i < 6; i++)
    {   
        let div = document.createElement("div");
        div.setAttribute("class", "carousel slide");
        div.setAttribute("id", `carouselExampleIndicators${i+1}`);
        div.setAttribute("data-bs-ride", "true");

        div.innerHTML = `
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" id="carousel${i+1}">

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${i+1}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${i+1}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
                `;
            proyectos.appendChild(div)

    }
}
carouselContainer()

let i = 1

function carrousel(array){
   
    
    for (const img of carousel)
    {    
        let X = 1

        let carouselByID = document.getElementById(`carousel${i}`)
        
        for (const imgDir of img.img){
            let div = document.createElement("div");
            if(X===1){
                div.setAttribute("class", "carousel-item active");
                X++
            }else{
                div.setAttribute("class", "carousel-item ");

            }
            div.innerHTML = `
               <img src="${imgDir}" class="d-block w-100" alt="...">
            `;
            carouselByID.appendChild(div)
        }
        i++
    }
}

carrousel() */