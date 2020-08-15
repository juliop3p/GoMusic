const musics = [
  {
    id: "1",
    music: "indigo-audio.mp3",
    title: "Chris Brown - Indigo",
  },
  {
    id: "2",
    music: "perfume-liu-remix-ft-kamaitachi.mp3",
    title: "Liu, Konai - Perfume (Liu Remix) ft. Kamaitachi",
  },
  {
    id: "3",
    music: "vale-vale-official-music-video.mp3",
    title: "Alok & Zafrir - Vale Vale",
  },
  {
    id: "4",
    music: "Avicii - Feeling Good.mp3",
    title: "Avicii - Feeling Good",
  },
];
const player = document.querySelector("#player");
const musicPlaying = document.querySelector("#music-playing-name");
let playing = false;
player.volume -= 0.8;

const playAndPause = () => {
  if (playing) {
    playing = false;
    player.pause();
    // player.duration - currentTime
    // https://www.w3schools.com/tags/ref_av_dom.asp
  } else {
    playing = true;
    player.play();
  }
};

const setMusicAndPlay = (music, musicName) => {
  musicPlaying.innerHTML = musicName;
  player.src = `./music/${music}`;
  playing = true;
  player.play();
};
