const LibrarySong = ({
  song,
  songs,
  isPlaying,
  setIsplaying,
  setCurrentSong,
  setSongs,
  audioRef,
}) => {
  // function changeSong() {
  //   const id = song.id;
  //   const selectedSong = songs.filter((song) => song.id === id);

  //   setCurrentSong(selectedSong[0]);
  //   const updatedSongs = songs.map((song) => {
  //     if (song.id === id) {
  //       return {
  //         ...song,
  //         active: true,
  //       };
  //     } else {
  //       return {
  //         ...song,
  //         active: false,
  //       };
  //     }
  //   });
  //   setSongs(updatedSongs);

  //   // setIsplaying(true)

  //   if (isPlaying) {
  //     const playPromise = audioRef.current.play();
  //     // console.log(audioRef.current);
  //     if (playPromise !== undefined) {
  //       playPromise.then((audio) => {
  //         audioRef.current.play();
  //       });
  //     }
  //   }
  // }

  function changeSong() {
    const id = song.id;
    const selectedSong = songs.find((song) => song.id === id);

    setCurrentSong(selectedSong);

    const updatedSongs = songs.map((song) => ({
      ...song,
      active: song.id === id,
    }));

    setSongs(updatedSongs);

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
  }

  return (
    <div
      className={`library-song-wrapper ${song.active ? "active" : ""}`}
      onClick={changeSong}
    >
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
