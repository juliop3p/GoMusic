const musics = [
  {
    id: "1",
    image: "chrisbrown.jpg",
    music: "indigo-audio.mp3",
    songName: "Chris Brown - Indigo",
    album: "Indigo",
  },
  {
    id: "2",
    image: "liu.jpg",
    music: "perfume-liu-remix-ft-kamaitachi.mp3",
    songName: "Liu, Konai - Perfume (Liu Remix) ft. Kamaitachi",
    album: "Step Ahead",
  },
  {
    id: "3",
    image: "alok.jpg",
    music: "vale-vale-official-music-video.mp3",
    songName: "Alok & Zafrir - Vale Vale",
    album: "Vale Vale",
  },
  {
    id: "4",
    image: "avicii.jpg",
    music: "Avicii - Feeling Good.mp3",
    songName: "Avicii - Feeling Good",
    album: "Stories",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const image = document.querySelector('#albumImage');
const songName = document.querySelector('#albumTitle');
const album = document.querySelector('#albumSong');
const list = document.querySelector('.list-song')

const albumArray = musics.filter(music => music.id === id)

image.src = `./images/${albumArray[0].image}`;
songName.innerHTML = albumArray[0].album;
album.innerHTML = albumArray[0].songName;

const createListItem = (songName) => {
  const li = document.createElement('li');
  const i = document.createElement('i');
  const p = document.createElement('p');
  i.classList.add('fas');
  i.classList.add('fa-play');
  p.innerHTML = songName;
  li.appendChild(i);
  li.appendChild(p);
  return li;
}

musics.forEach(music => {
  const li = createListItem(music.songName);
  li.onclick = () => setMusicAndPlay(music.music, music.songName)
  list.appendChild(li);
})
