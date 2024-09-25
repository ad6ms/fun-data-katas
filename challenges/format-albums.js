function formatAlbums(albums, artistIdReference) {
  const formattedAlbums = [];

  for (let i = 0; i < albums.length; i++) {
    let formattedObj = {};
    formattedObj["name"] = albums[i]["name"];
    formattedObj["artistId"] = artistIdReference[albums[i]["artist"]];
    formattedObj["releaseYear"] = albums[i]["releaseYear"];
    formattedAlbums.push(formattedObj);
  }

  return formattedAlbums;
}

module.exports = formatAlbums;
