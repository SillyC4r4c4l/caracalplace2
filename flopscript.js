// index.js

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const videoPaths = [
  "floppa%20meow%20%20-).mp4",
  "spooky%20floppa.mp4",
 "flopvid3.mp4",
];

function loadRandomVideo () {
  const video = videoPaths[getRandomInt(videoPaths.length)];

  videoSource.src = video;
  videoPlayer.load();
}


const videoPlayer = document.getElementById("video-player"),
      videoSource = document.getElementById("video-source");


videoPlayer.addEventListener("loadstart", () => videoPlayer.play(), false);
videoPlayer.addEventListener("ended", loadRandomVideo, false);
loadRandomVideo();


