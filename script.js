
// DOCUMENT READY
$(function() {
   
   // user clicks button that scrolls them further down the page to set of inputs
   $('.scroll').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
         scrollTop: $(`#userInputs`).offset().top
      },
      'slow');
   })
   
   $('.create').on('click', function(e){
      e.preventDefault();

      // getting the user inputted value of adjectiveOne and storing it in the variable adOne
      let userAdOne = $('#adjectiveOne').val();
      let userAdTwo = $('#adjectiveTwo').val();
      let userNoun = $('#noun').val();
      let userVerb = $('#verb').val();
      let userAdverb = $('#adverb').val();

      // creating an array called adjArray to store all user inputted adjective values
      adjArray = new Array();

      // pushing the stored value from the variable adOne (that has adjectiveOne's inputted value) into the adjArray
      adjArray.push(adOne, adTwo);


   })



   

   // store information in a variable
   // input user information in a string
   // display string on page
   


});

