      submitButton.addEventListener("click", function (event){
         event.preventDefault()

      let distance = document.querySelector("#distance")
      let age = document.querySelector("#age")
      let submitButton = document.querySelector("#submitButton")
      let price = document.querySelector("#price")
      let ticket = 0.21 * Number(distance.value)
      let finalPrice = price.innerHTML = `Il prezzo del biglietto è: ${ticket.toFixed(2).replace(`.`, `,`)}€`
      //loading
      const spinnerEl = document.querySelector("#spinner")
      const statusSpan = document.querySelector(".status")
      const orginalText = statusSpan.innerHTML

      submitButton.disabled = true
      spinnerEl.classList.toggle(`d-none`)
      statusSpan.innerHTML = `Loading....`
      
      let loading = setTimeout(function(){
      submitButton.disabled = false
      spinnerEl.classList.toggle(`d-none`)
      statusSpan.innerHTML = orginalText
      }, 3000);
      
         if(age.value >= 65){
            ticket -= (ticket*0.4)
            finalPrice
         }else if (age.value <= 18){
             ticket -= (ticket*0.2)
             finalPrice
         }else{
            finalPrice
         }
         })
         
         
        