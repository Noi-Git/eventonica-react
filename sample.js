// write a function to retrieve a blob of json

// madke an ajax request! Use the 'fetch' function

function fetchAlbums() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json));
}


// fetchAlbums();


// refactor to es 2017 -- call -- async await
async function fetchAlbums() {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = res.json()
    
  console.log(json);
}

fetchAlbums();


// refactor to es 2017 -- call -- async await with arrow function
const fetchAlbums = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = res.json()
    
  console.log(json);
}

fetchAlbums();