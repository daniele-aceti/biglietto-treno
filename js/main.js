      submitButton.addEventListener(`click`, function (event){

      let distance = document.querySelector("#distance")
      let age = document.querySelector("#age")
      let submitButton = document.querySelector("#submitButton")
      let price = document.querySelector("#price")
      let ticket = 0.21 * Number(distance.value)
        

         if(age.value >= 65){
            ticket -= (ticket*0.4)
            console.log(ticket.typeOf)
         }else if (age.value <= 18){
             ticket -= (ticket*0.2)
             console.log(ticket.typeOf)
         }else{
            console.log(ticket.typeOf)
            //price.innerHTML = `Il prezzo del biglietto è: ${ticket.value}`
         }
         })
         
         
        