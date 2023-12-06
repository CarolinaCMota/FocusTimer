const buttonPressAudioRain = new Audio("./assets/Chuva.wav");

const buttonPressAudioTree = new Audio("./assets/Floresta.wav");

const buttonPressAudioCoffe = new Audio("./assets/Cafeteria.wav");

const buttonPressAudioFire = new Audio("./assets/Lareira.wav");

bgAudio.loop = true;

function onMusicRain() {
  if (buttonPressAudioRain.paused) {
    buttonPressAudioRain.play();

    var buttonColor = document.querySelector(".ph-bold.ph-cloud-rain");

    var newColor = "rgba(2, 121, 157, 1)";

    buttonColor.style.backgroundColor = newColor;
  } else {
    buttonPressAudioRain.pause();

    var buttonColor = document.querySelector(".ph-bold.ph-cloud-rain")

    var oldColor = "rgba(225, 225, 230, 1)";

    buttonColor.style.backgroundColor = oldColor;
  }
}



function onMusicTree() {
  if (buttonPressAudioTree.paused) {
    buttonPressAudioTree.play();

    var buttonColor = document.querySelector(".ph-bold.ph-tree");

    var newColor = "rgba(2, 121, 157, 1)";

    buttonColor.style.backgroundColor = newColor;
  } else {
    buttonPressAudioTree.pause();

    var buttonColor = document.querySelector(".ph-bold.ph-tree")

    var oldColor = "rgba(225, 225, 230, 1)";

    buttonColor.style.backgroundColor = oldColor;
  }
}


function onMusicCoffe() {
    if (buttonPressAudioCoffe.paused) {
      buttonPressAudioCoffe.play();
  
      var buttonColor = document.querySelector(".ph-bold.ph-storefront");
  
      var newColor = "rgba(2, 121, 157, 1)";
  
      buttonColor.style.backgroundColor = newColor;

    } else {
      buttonPressAudioCoffe.pause();
  
      var buttonColor = document.querySelector(".ph-bold.ph-storefront")
  
      var oldColor = "rgba(225, 225, 230, 1)";
  
      buttonColor.style.backgroundColor = oldColor;
    }
  }

  function onMusicFire() {
    if (buttonPressAudioFire.paused) {
      buttonPressAudioFire.play();
  
      var buttonColor = document.querySelector(".ph-bold.ph-flame");
  
      var newColor = "rgba(2, 121, 157, 1)";
  
      buttonColor.style.backgroundColor = newColor;

    } else {
      buttonPressAudioFire.pause();
  
      var buttonColor = document.querySelector(".ph-bold.ph-flame")
  
      var oldColor = "rgba(225, 225, 230, 1)";
  
      buttonColor.style.backgroundColor = oldColor;
    }
  }