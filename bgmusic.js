document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("background-music");
  const button = document.getElementById("music-button");

  const playIcon =
    "https://uploads-ssl.webflow.com/66b377463ff505288dadbce6/66bf5a19b9530ff198fe9d00_IcRoundVolumeUp.svg";
  const pauseIcon =
    "https://uploads-ssl.webflow.com/66b377463ff505288dadbce6/66bf5a1823424260e8214232_IcRoundVolumeOff.svg";

  // Set the default state to paused
  music.pause(); // Ensure the music is paused initially
  button.innerHTML = `<img src="${playIcon}" alt="Play Icon">`; // Set the button icon to play

  function toggleMusic() {
    if (music.paused) {
      music.play();
      button.innerHTML = `<img src="${pauseIcon}" alt="Pause Icon">`;
    } else {
      music.pause();
      button.innerHTML = `<img src="${playIcon}" alt="Play Icon">`;
    }
  }

  button.addEventListener("click", toggleMusic);
});
