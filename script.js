// let progressBar = document.querySelector(".progressBar input");
// let playBtn = document.querySelector(".btn-play");
// let audioElement = new Audio("songs/0.mp3"); // Updated to start from songIndex 0
// let forwardBtn = document.querySelector(".btn-forward");
// let backwardBtn = document.querySelector(".btn-backward");
// let song = Array.from(document.getElementsByClassName("song"));
// let gif = document.getElementById("gif");
// let smallBtn = Array.from(document.getElementsByClassName("small-btn"));
// let songIndex = 0;

// let songs = [
//   {
//     songName: "sanso-ki-mala",
//     filePath: "songs/0.mp3",
//     coverPath: "images/1.jpg",
//   },
//   {
//     songName: "sochta-hun-ky",
//     filePath: "songs/1.mp3",
//     coverPath: "images/2.jpg",
//   },
//   {
//     songName: "kali-kali-kulfon",
//     filePath: "songs/2.mp3",
//     coverPath: "images/3.jpg",
//   },
//   {
//     songName: "dill-py-zakhm",
//     filePath: "songs/3.mp3",
//     coverPath: "images/4.jpg",
//   },
//   {
//     songName: "bewafa-tera-ma",
//     filePath: "songs/4.mp3",
//     coverPath: "images/5.jpg",
//   },
//   {
//     songName: "salam-e-ishq",
//     filePath: "songs/5.mp3",
//     coverPath: "images/6.jpg",
//   },
// ];

// song.forEach((Element, i) => {
//   Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//   Element.getElementsByTagName("span")[0].innerText = songs[i].songName;
// });

// audioElement.addEventListener("timeupdate", () => {
//   progress = (audioElement.currentTime / audioElement.duration) * 100;
//   progressBar.value = progress;
// });

// progressBar.addEventListener("input", () => {
//   audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
// });

// const allplaybtn = () => {
//   smallBtn.forEach((element) => {
//     element.classList.remove("fa-circle-pause");
//     element.classList.add("fa-circle-play");
//   });
// };

// smallBtn.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     allplaybtn();
//     songIndex = parseInt(e.target.id);
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//       audioElement.src = `songs/${songIndex}.mp3`;
//       audioElement.play();
//       e.target.classList.remove("fa-circle-play");
//       e.target.classList.add("fa-circle-pause");
//       playBtn.classList.remove("fa-play");
//       playBtn.classList.add("fa-pause");
//       gif.style.opacity = 0.7;
//     } else {
//       audioElement.pause();
//       e.target.classList.add("fa-circle-play");
//       e.target.classList.remove("fa-circle-pause");
//       playBtn.classList.add("fa-play");
//       playBtn.classList.remove("fa-pause");
//       gif.style.opacity = 0;
//     }
//     audioElement.currentTime = 0;
//   });
// });

// playBtn.addEventListener("click", () => {
//   allplaybtn();
//   if (audioElement.paused || audioElement.currentTime <= 0) {
//     audioElement.play();
//     playBtn.classList.remove("fa-play");
//     playBtn.classList.add("fa-pause");
//     gif.style.opacity = 0.7;
//   } else {
//     audioElement.pause();
//     playBtn.classList.remove("fa-pause");
//     playBtn.classList.add("fa-play");
//     gif.style.opacity = 0;
//   }
// });

// forwardBtn.addEventListener("click", () => {
//   if (songIndex >= 5) {
//     songIndex = 0;
//   } else {
//     songIndex += 1;
//   }

//   audioElement.src = `songs/${songIndex}.mp3`;
//   audioElement.play();
//   audioElement.currentTime = 0;
//   playBtn.classList.remove("fa-play");
//   playBtn.classList.add("fa-pause");
//   gif.style.opacity = 0.7;
// });

// backwardBtn.addEventListener("click", () => {
//   if (songIndex <= 0) {
//     songIndex = 0;
//   } else {
//     songIndex -= 1;
//   }
//   audioElement.src = `songs/${songIndex}.mp3`;
//   audioElement.play();
//   audioElement.currentTime = 0;
//   playBtn.classList.remove("fa-play");
//   playBtn.classList.add("fa-pause");
//   gif.style.opacity = 0.7;
// });

let progressBar = document.querySelector(".progressBar input");
let playBtn = document.querySelector(".btn-play");
let audioElement = new Audio("songs/0.mp3");
let forwardBtn = document.querySelector(".btn-forward");
let backwardBtn = document.querySelector(".btn-backward");
let song = Array.from(document.getElementsByClassName("song"));
let gif = document.getElementById("gif");
let smallBtn = Array.from(document.getElementsByClassName("small-btn"));
let songIndex = 0;

let songs = [
  {
    songName: "sanso-ki-mala",
    filePath: "songs/0.mp3",
    coverPath: "images/1.jpg",
  },
  {
    songName: "sochta-hun-ky",
    filePath: "songs/1.mp3",
    coverPath: "images/2.jpg",
  },
  {
    songName: "kali-kali-kulfon",
    filePath: "songs/2.mp3",
    coverPath: "images/3.jpg",
  },
  {
    songName: "dill-py-zakhm",
    filePath: "songs/3.mp3",
    coverPath: "images/4.jpg",
  },
  {
    songName: "Yeh Jo Halka ",
    filePath: "songs/4.mp3",
    coverPath: "images/5.jpg",
  },
  {
    songName: "Hai Kahan Ka",
    filePath: "songs/5.mp3",
    coverPath: "images/6.jpg",
  },
];

song.forEach((Element, i) => {
  Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  Element.getElementsByTagName("span")[0].innerText = songs[i].songName;
});

audioElement.addEventListener("timeupdate", () => {
  progress = (audioElement.currentTime / audioElement.duration) * 100;
  progressBar.value = progress;
});

audioElement.addEventListener("ended", () => {
  // Reset the progress bar to 0 and update the UI accordingly
  progressBar.value = 0;
  playBtn.classList.remove("fa-pause");
  playBtn.classList.add("fa-play");
  gif.style.opacity = 0;

  // Update the small-btn to show the song is not playing
  smallBtn[songIndex].classList.remove("fa-circle-pause");
  smallBtn[songIndex].classList.add("fa-circle-play");
});

progressBar.addEventListener("input", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

const allplaybtn = () => {
  smallBtn.forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
};

smallBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    allplaybtn();
    songIndex = parseInt(e.target.id);
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.src = `songs/${songIndex}.mp3`;
      audioElement.play();
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      playBtn.classList.remove("fa-play");
      playBtn.classList.add("fa-pause");
      gif.style.opacity = 0.7;
    } else {
      audioElement.pause();
      e.target.classList.add("fa-circle-play");
      e.target.classList.remove("fa-circle-pause");
      playBtn.classList.add("fa-play");
      playBtn.classList.remove("fa-pause");
      gif.style.opacity = 0;
    }
  });
});

playBtn.addEventListener("click", () => {
  allplaybtn();
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    gif.style.opacity = 0.7;

    // Add "fa-circle-pause" to the currently playing small-btn
    smallBtn[songIndex].classList.remove("fa-circle-play");
    smallBtn[songIndex].classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
    gif.style.opacity = 0;

    // Add "fa-circle-play" to the currently paused small-btn
    smallBtn[songIndex].classList.remove("fa-circle-pause");
    smallBtn[songIndex].classList.add("fa-circle-play");
  }
});

forwardBtn.addEventListener("click", () => {
  allplaybtn();
  if (songIndex >= 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.play();
  audioElement.currentTime = 0;
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
  gif.style.opacity = 0.7;

  // Add "fa-circle-pause" to the currently playing small-btn
  smallBtn[songIndex].classList.remove("fa-circle-play");
  smallBtn[songIndex].classList.add("fa-circle-pause");
});

backwardBtn.addEventListener("click", () => {
  allplaybtn();
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.play();
  audioElement.currentTime = 0;
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
  gif.style.opacity = 0.7;

  smallBtn[songIndex].classList.remove("fa-circle-play");
  smallBtn[songIndex].classList.add("fa-circle-pause");
});
