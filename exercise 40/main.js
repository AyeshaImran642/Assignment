function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Example usage:
var album1 = makeAlbum('Atif Aslam', 'Album 1');
console.log(album1);
var album2 = makeAlbum('Ali Zafar', 'Album 2', 12);
console.log(album2);
var album3 = makeAlbum('Rahat Fateh Ali Khan', 'Album 3', 8);
console.log(album3);
