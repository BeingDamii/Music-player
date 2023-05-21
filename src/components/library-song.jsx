import React from "react";
import { playAudio } from "../resources/fns";

const LibrarySong = ({
  song,
  songs,
  isPlaying,
  setIsPlaying,
  setCurrentSong,
  setSongs,
  audioRef,
}) => {
  // event handlers

  const changeSong = () => {
    const id = song.id;
    const selectedSong = songs.find((s) => s.id === id);

    setCurrentSong(selectedSong);

    const updatedSongs = songs.map((s) => ({
      ...s,
      active: s.id === id,
    }));

    setSongs(updatedSongs);
    playAudio(isPlaying, audioRef);
  };

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
