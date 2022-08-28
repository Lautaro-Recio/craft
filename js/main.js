const h6= document.querySelectorAll(".contactoEscondido")
const contactDiv= document.getElementById("contactDiv")
    console.log(h6[1])
contactDiv.addEventListener("mouseover",()=>{
    h6[0].classList.add("contactoAparece")
    h6[1].classList.add("contactoAparece")
    h6[2].classList.add("contactoAparece")
    contactDiv.classList.add("contactDiv")
})
contactDiv.addEventListener("mouseleave",()=>{
    h6[0].classList.remove("contactoAparece")
    h6[1].classList.remove("contactoAparece")
    h6[2].classList.remove("contactoAparece")
    contactDiv.classList.remove("contactDiv")

})
const carousel = [
    {img:"./assets/imgs/buzos1.png"},
    {img:"./assets/imgs/buzos2.png"},
    {img:"./assets/imgs/buzos3.png"},
    {img:"./assets/imgs/buzos4.png"},
    {img:"./assets/imgs/buzos5.png"},
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
               <img loading="lazy"  src="${img.img}" class="d-block w-100" alt="...">
            `;
            carouselByID.appendChild(div)
        
    }
}

carrousel()


