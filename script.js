
// DOCUMENT READY
$(function() {
   
   // user begins by clicking button that scrolls them further down the page to set of inputs
   $('.scroll').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
         scrollTop: $(`#userInputs`).offset().top
      },
      'slow');
   })
   
   $('.create').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
         scrollTop: $(`#end`).offset().top
      },
         'slow');

      // getting the user inputted value using input id's and storing it in variables with .val

      // Adjectives
      let userAdOne = $('#adOne').val();
      let userAdTwo = $('#adTwo').val();
      let userAdThree = $('#adThree').val();
      // Nouns
      let userNounOne = $('#noun').val();
      let userNounTwo = $('#nounOne').val();
      let userNounThree = $('#nounTwo').val();
      let userPNounOne = $('#pNounOne').val();
      let userPNounTwo = $('#pNounTwo').val();
      let userPNounThree = $('#pNounThree').val();
      let userPNounFour = $('#pNounFour').val();
      // Verbs
      let userVerbingOne = $('#verbingOne').val();
      let userVerbingTwo = $('#verbingTwo').val();
      let userVerbingThree = $('#verbingThree').val();
      let userVerbingFour = $('#verbingFour').val();
      // Other
      let userGame = $('#game').val();
      let userPlace = $('#place').val();
      let userPlant = $('#plant').val();
      let userBodyPart = $('#bodyPart').val();
      let userNumber = $('#number').val();
      
      // clears user inputted text on submit
      $('#clear').each(function () {
         this.reset();
      });

      // input user information in a string
      const story = `A vacation is when you take a trip to some ${userAdOne} place with your ${userAdTwo} family. Usually you go to some place that is near a/an ${userNounOne} or up to a/an ${userNounTwo}. A good vacation place is one where you can ride ${userPNounOne} or play ${userGame} or go hunting for ${userPNounTwo}. I like to spend my time ${userVerbingOne} or ${userVerbingTwo}. When parents go on a vacation, they spend their time eating three ${userPNounThree} a day, and father play golf, and mothers sit around ${userVerbingThree}. Last summer, my little brother fell in a/an ${userNounThree} and got poison ${userPlant} all over his ${userBodyPart}. My family is going to go to (the) ${userPlace}, and I will practice ${userVerbingFour}. Parents need vacations more than kids because parents are always very ${userAdThree} and because they have to work ${userNumber} hours every day all years making enough ${userPNounFour} to pay for the vacation.`;
      
      // display string on page
      $('#storyText').text(story);
   
   })
});