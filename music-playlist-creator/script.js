// JavaSspancript for Opening and Closing the Modal
import data from './data/data.js';

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item) => {
    item.addEventListener('click', toggleActiveClass);
})
function toggleActiveClass(event) {
    event.target.classList.toggle('active');
}
gridItems.forEach(gridItem => {
    const heart = gridItem.querySelector('#heart');
    const likeElement = gridItem.querySelector('#number');
    let numberValue = parseInt(likeElement.innerHTML);
    console.log(heart)
    let hasClicked = false;
    heart.addEventListener('click', function() {
        if (!hasClicked) {
            hasClicked = true;
            const clickedHeart = this;
            clickedHeart.parentElement.classList.toggle('red');
            numberValue += 1;
            likeElement.innerHTML = numberValue;
            clickedHeart.parentElement.classList.toggle('red');
        } else {
            const clickedHeart = this;
            clickedHeart.parentElement.classList.toggle('red');
            likeElement.innerHTML = numberValue-1;
            numberValue = numberValue-1;
            hasClicked = false;
        }
    })
});
/*



data.playlists.forEach((playlist) => {
  const playlistDiv = document.createElement('div');
  playlistDiv.classList.add('playlist');

  // Add playlist title and creator


  // Add playlist artwork
  const artwork = document.createElement('img');
  artwork.src = playlist.playlist_art;
  artwork.classList.add('artwork');
  playlistDiv.appendChild(artwork);

  // Add like count
  const likeCount = document.createElement('div');
  likeCount.classList.add('likeCount');
  likeCount.textContent = playlist.likeCount;
  playlistDiv.appendChild(likeCount);

  // Add songs
  const songsContainer = document.createElement('div');
  songsContainer.classList.add('songs');
  playlist.songs.forEach((song) => {
    const songDiv = document.createElement('div');
    songDiv.classList.add('song');

    // Add song title and artist
    const titleAndArtist = document.createElement('div');
    titleAndArtist.classList.add('title', 'artist');
    const titleText = document.createTextNode(`${song.title} - ${song.artist}`);
    titleAndArtist.appendChild(titleText);
    songDiv.appendChild(titleAndArtist);

    // Add song album and cover art
    const albumAndCoverArt = document.createElement('div');
    albumAndCoverArt.classList.add('album', 'coverArt');
    const albumText = document.createTextNode(`${song.album}`);
    albumAndCoverArt.appendChild(albumText);
    const coverArt = document.createElement('img');
    coverArt.src = song.cover_art;
    albumAndCoverArt.appendChild(coverArt);
    songDiv.appendChild(albumAndCoverArt);

    // Add song duration
    const duration = document.createElement('div');
    duration.classList.add('duration');
    duration.textContent = song.duration;
    songDiv.appendChild(duration);

    songsContainer.appendChild(songDiv);
});
playlistDiv.appendChild(songsContainer);

playlistsContainer.appendChild(playlistDiv);
});

document.body.appendChild(playlistsContainer);

=
const gridContainer = document.getElementById('grid-container');
data.playlists.forEach((playlist) => {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');

  // Add image element
  const img = document.createElement('img');
  img.src = playlist.playlist_art;
  img.width = '200';
  img.height = '200';
  gridItem.appendChild(img);
  // Add playlist name element
  const h3 = document.createElement('h3');
  h3.textContent = playlist.playlist_name;
  gridItem.appendChild(h3);
  // Add creator element
  const p = document.createElement('p');
  p.textContent = playlist.playlist_creator;
  gridItem.appendChild(p);
  // Add like button element
  const likeButton = document.createElement('button');
  likeButton.textContent = 'Like';
  likeButton.addEventListener('click', () => {
    // Increment like count and update button text
    playlist.likeCount++;
    likeButton.textContent = `Liked by ${playlist.likeCount} people`;
  });
  gridItem.appendChild(likeButton);
  gridContainer.appendChild(gridItem);
});



        }
    });
});

*/
