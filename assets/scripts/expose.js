// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  // TODO
  //when click/value of option is wtv
  //get image and change src accordingly
  document.getElementById("horn-select").addEventListener('change', function(event) {
    if (event.target.value === 'car-horn'){
      document.querySelector('img').src = "assets/images/car-horn.svg";
      document.getElementsByClassName('hidden')[0].src = "assets/audio/car-horn.mp3";
    }
    else if (event.target.value === 'air-horn'){
      document.querySelector('img').src = "assets/images/air-horn.svg";
      document.getElementsByClassName('hidden')[0].src = "assets/audio/air-horn.mp3";
    } else if (event.target.value === 'party-horn'){
      document.querySelector('img').src = "assets/images/party-horn.svg";
      document.getElementsByClassName('hidden')[0].src = "assets/audio/party-horn.mp3";
      console.log(document.getElementsByClassName('hidden').src);
    }

    document.querySelector('button').addEventListener('click', function() {
      if(event.target.value == 'party-horn'){
        jsConfetti.addConfetti();
      }
      document.getElementsByClassName('hidden')[0].play();
    });
  });


  document.getElementById("volume").addEventListener('input', function(event) {
    if (event.target.value < 33 && event.target.value > 0){
      document.querySelector('[alt="Volume level 2"]').src = "assets/icons/volume-level-1.svg";
    }
    else if (event.target.value < 67 && event.target.value > 32){
      document.querySelector('[alt="Volume level 2"]').src = "assets/icons/volume-level-2.svg";
    } else if (event.target.value > 67){
      document.querySelector('[alt="Volume level 2"]').src = "assets/icons/volume-level-3.svg";
    }
    document.getElementsByClassName('hidden')[0].volume = event.target.value * .01
  });
}