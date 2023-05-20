const LibrarySong = ({
  song,
  songs,
  isPlaying,
  setIsplaying,
  setCurrentSong,
  setSongs,
  audioRef,
}) => {
  function changeSong() {
    const id = song.id;
    const selectedSong = songs.filter((song) => song.id === id);

    setCurrentSong(selectedSong[0]);
    console.log(isPlaying);
    // setIsplaying(true)

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  }

  return (
    <div className="library-song-wrapper" onClick={changeSong}>
      <div>
        <img src={song.cover} alt="library song" />
      </div>
      <div className="song-description">
        <h1>{song.name}</h1>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
