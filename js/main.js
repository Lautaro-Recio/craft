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
  {img:"../assets/imgs/carousel1.jpg"},
  {img:"../assets/imgs/carousel2.jpg"},
  {img:"../assets/imgs/niños8.jpg"},
  {img:"../assets/imgs/buzos.png"},

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


