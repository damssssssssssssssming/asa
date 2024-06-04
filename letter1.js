document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("flap").style.transform = "rotate(0)";
    document.getElementById("letter").style.transform = "translateY(0)";
  });

var audio = document.getElementById("myAudio");
var isPlaying = false;

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}

// Update the play button style based on audio playback state
audio.onplaying = function() {
  isPlaying = true;
  document.querySelector('.play-button').style.backgroundColor = '#e74c3c';
};

audio.onpause = function() {
  isPlaying = false;
  document.querySelector('.play-button').style.backgroundColor = '#3498db';
};