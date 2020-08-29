const albumPhoto = document.querySelector('#albumPhoto');
const albumText = document.querySelector('#albumName');
const musicText = document.querySelector('#musicName');
const volume = document.querySelector('#volume');

let playing = false;
let currentPlaylist;
let idPlaying = 0;

volume.addEventListener('change', (e) => {
  player.volume = volume.value / 100;
})

const setMusicAndPlay = (data, id = 0) => {
  const { image, album, musics } = data;
  
  if(!musics[id]) return;

  currentPlaylist = data;
  idPlaying = id;
  albumPhoto.src = `../images/${image}`
  albumText.innerHTML = album;
  musicText.innerHTML = musics[Number(id)].musicName
  player.src = `../music/${musics[Number(id)].music}`;
  playing = true;
  player.play();
};

const playAndPause = () => {
  if (playing) {
    playing = false;
    player.pause();
  } else {
    playing = true;
    player.play();
  }
};

setInterval(() => {
  if(playing) {
    const progress = document.querySelector('.music-time-progress')
    const durationMusic = player.duration;
    const currentTime = player.currentTime;
    const porcent = (currentTime / durationMusic) * 100;
    progress.style.height = '100%';
    progress.style.width = `${porcent}%`
  }
}, 1000);

const skipMusic = () => {
  setMusicAndPlay(currentPlaylist, ++idPlaying)
}

const prevMusic = () => {
  setMusicAndPlay(currentPlaylist, --idPlaying)
}

