const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const image = document.querySelector('#albumImage');
const songName = document.querySelector('#albumTitle');
const album = document.querySelector('#albumSong');
const list = document.querySelector('.list-song')

const albumPlaylist = document.querySelector('.album-list')

const albumArray = playlist.filter(song => song.id === id)

image.src = `./images/${albumArray[0].image}`;
songName.innerHTML = albumArray[0].album;
album.innerHTML = albumArray[0].musics[0].musicName;

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

albumArray.forEach(album => {
  album.musics.map(music => {
    const li = createListItem(music.musicName);
    li.onclick = () => setMusicAndPlay(album, music.id)
    list.appendChild(li);
  })
})
