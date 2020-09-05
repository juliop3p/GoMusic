document.querySelector('body').onload = verifyLogin();

const list = document.querySelector('.album-list');

document.querySelector('.fa-user').onclick = () => {
  const user = document.querySelector('.user-details')
  user.style.display = user.style.display === 'block' ? 'none' : 'block';
}

document.querySelector('#username').innerHTML = `<i class="fas fa-user-circle"></i> ${userName}`;

const createAlbumItem = (musics) => {
  const { id, image, album } = musics;
  
  const a = document.createElement('a');
  const li = document.createElement('li');
  const div = document.createElement('div');
  const divOverlay = document.createElement('div');
  const img = document.createElement('img');
  const playImg = document.createElement('img');
  const strong = document.createElement('strong');

  li.classList.add('card-hover');
  div.classList.add('overlay-container');
  divOverlay.classList.add('overlay-background');
  playImg.classList.add('overlay-button');
  playImg.src = `./images/play-button.jpg`;
  img.src = `./images/${image}`;
  div.onclick = () => setMusicAndPlay(musics);
  strong.innerHTML = album;
  a.innerHTML = 'Playlist';
  a.href = `/details.html?id=${id}`;
  
  div.append(divOverlay);
  div.append(img)
  div.append(playImg)
  li.append(div);
  li.append(strong);
  li.append(a);

  return li;
}

playlist.forEach(musics => {
  list.appendChild(createAlbumItem(musics));
});
