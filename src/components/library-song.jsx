import React from "react";

const LibrarySong = ({
  song,
  songs,
  isPlaying,
  setCurrentSong,
  setSongs,
  audioRef,
  setDragged,
}) => {
  // event handlers

  const changeSong = async () => {
    const id = song.id;
    const selectedSong = songs.find((s) => s.id === id);

    await setCurrentSong(selectedSong);

    const updatedSongs = songs.map((s) => ({
      ...s,
      active: s.id === id,
    }));

    await setSongs(updatedSongs);

    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const handleDragStart = async (event) => {
    // Set any necessary data for the drag operation
    event.dataTransfer.setData("text/plain", event.target.id);
    await setDragged(song);
    // console.log(dragged);
  };

  return (
    <div
      draggable={true}
      onDragStart={handleDragStart}
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
