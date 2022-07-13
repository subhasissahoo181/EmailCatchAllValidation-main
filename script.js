
  window.onload = () => {
    const submitButton = document.getElementById('submitButton')
    const mailidsField = document.getElementById('mailIds')
    const emailField = document.getElementById('email')
    const promptDiv = document.getElementById("prompt-message")

    submitButton.addEventListener("click", (e) => {
              e.preventDefault()
              const mailids = mailidsField.value
              const email = emailField.value
              console.log(mailids)
              google.script.run
                  .withSuccessHandler(()=>{
                    promptDiv.innerHTML = `<label style="color:green">Your request has been submitted. Please check back later</label>`
                  })
                  .withFailureHandler((error) => {
                    promptDiv.innerHTML = `<label style="color:red">There was some error. Make sure you enter email ids separated by ';'</label>`
                  })
                  .handleSubmit({mailids, email})
              })
    refreshButton.addEventListener("click", (e) => {
        //clear right table
        // const text = [['iampasdf@x.com','23/09/25','None'],['iampasdf@x.com','23/09/25','None'],['iampasdf@x.com','23/09/25','None']]
        

    }, 

    function settingsMenuToggle(){
      settingsmenu.classList.toggle("right-container").reset();
  
  },



  