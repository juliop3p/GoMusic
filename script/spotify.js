const player = document.querySelector("#player");
const musicPlaying = document.querySelector("#music-playing-name");
const volumeUp = document.querySelector('.fa-volume-up')
const volumeMuted = document.querySelector('.fa-volume-mute')
const progressVolume = document.querySelector('.volume-progress');
let playing = false;

const changeProgressVolume = () => {
  const porcent = (player.volume / 1) * 100;
  progressVolume.style.width = `${porcent}%`;
}

const changeProgressVolumeUI = () => {
  if(player.volume === 0) {
    volumeUp.style.display = 'none';
    volumeMuted.style.display = 'block';
  } else {
    volumeUp.style.display = 'block';
    volumeMuted.style.display = 'none';
  }
}

setInterval(() => {
  if(playing) {
    const progress = document.querySelector('.music-time-progress')
    const durationMusic = player.duration;
    const currentTime = player.currentTime;
    const porcent = (currentTime / durationMusic) * 100;
    progress.style.height = '100%';
    progress.style.width = `${porcent}%`
  }
}, 1000)

const playAndPause = () => {
  if (playing) {
    playing = false;
    player.pause();
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

player.volume = 0.5;
changeProgressVolume();

const changeVolume = action => {
  if(action === 'plus' && player.volume + 0.1 > 1) {
    player.volume = 1;
    return;
  }

  if(action === 'minus' && player.volume - 0.1 < 0) {
    player.volume = 0;
    return;
  }
  
  if(action === 'plus') {
    player.volume += 0.1;
  } else {
    player.volume -= 0.1;
  }

  changeProgressVolume()
  changeProgressVolumeUI();
}

const mute = () => {
  player.volume = 0;
  changeProgressVolumeUI()
  changeProgressVolume()
}

const unmute = () => {
  player.volume = 0.5;
  changeProgressVolumeUI()
  changeProgressVolume()
}