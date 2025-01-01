submitButton.addEventListener("click", function (event){
      event.preventDefault()

let distance = document.querySelector("#distance")
let age = document.querySelector("#age")
let submitButton = document.querySelector("#submitButton")
let price = document.querySelector("#price")
      
      //load text

const spinnerText = document.querySelector(".spinnerT")
spinnerText.classList.toggle("d-none")
price.classList.toggle("d-none")
      
//load Button
const spinnerEl = document.querySelector("#spinner")
const statusSpan = document.querySelector(".status")
const orginalText = statusSpan.innerHTML

spinnerEl.classList.toggle("d-none")
statusSpan.innerHTML = `Loading....`

      
      // three seconds

let loading = setTimeout(function(){

      //load text

    spinnerText.classList.toggle("d-none")
    price.classList.toggle("d-none")

         
      //load button
    submitButton.disabled = false
    spinnerEl.classList.toggle("d-none")
    statusSpan.innerHTML = orginalText

      //load price

    let ticket = 0.21 * Number(distance.value)
    
   
      if(Number(age.value) >= 65){
            ticket *= 0.4
            return price.innerHTML = `Il prezzo del biglietto è: ${ticket.toFixed(2).replace(`.`, `,`)}€`
      }else if (Number(age.value) <= 18){
             ticket -= (ticket*0.2)
             return price.innerHTML = `Il prezzo del biglietto è: ${ticket.toFixed(2).replace(`.`, `,`)}€`
      }else{
            return price.innerHTML = `Il prezzo del biglietto è: ${ticket.toFixed(2).replace(`.`, `,`)}€`
      }

      }, 3000);   
         })
         
         
        