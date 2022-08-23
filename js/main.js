

const carousel = [
  {img:"../assets/imgs/carousel1.jpg"},
  {img:"../assets/imgs/carousel2.jpg"},
  {img:"../assets/imgs/carousel3.jpg"},
  {img:"../assets/imgs/carousel5.jpg"},
]

function carrousel(array){
   
    let X = 1
    
    for (const img of carousel)
    {    

        let carouselByID = document.getElementById(`carousel`)
        
        
            let div = document.createElement("div");
            if(X===1){
                div.setAttribute("class", "carousel-item active");
                X++
            }else{
                div.setAttribute("class", "carousel-item ");

            }
            div.innerHTML = `
               <img src="${img.img}" class="d-block w-100" alt="...">
            `;
            carouselByID.appendChild(div)
        
    }
}

carrousel()


