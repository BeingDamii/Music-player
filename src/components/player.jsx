import { BackIcon, ForwardIcon, PauseIcon, PlayIcon } from "../resources/icons";
import { useState } from "react";
import { playAudio } from "../resources/fns";
const Player = ({
  currentSong,
  setCurrentSong,
  setIsplaying,
  audioRef,
  songInfo,
  songs,
  setSongs,
  setSongInfo,
  isPlaying,
}) => {
  // react hooks

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    if (isNaN(time)) {
      return " loading...";
    } else {
      return `${minutes}:${seconds}`;
    }
  }
  // events handlers
  function playsongHandler() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsplaying(!isPlaying);
  }

  // function skipTrackHandler(direction) {
  //   const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  //   const lengthSongs = songs.length;

  //   let newIndex;

  //   if (direction === "forward") {
  //     newIndex = (currentIndex + 1) % lengthSongs;
  //   } else {
  //     newIndex = (currentIndex - 1 + lengthSongs) % lengthSongs;
  //   }

  //   const updatedSongs = songs.map((song) => {
  //     if (song.id == currentSong.id) {
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

  //   setCurrentSong(songs[newIndex]);
  // }

  function skipTrackHandler(direction) {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const lengthSongs = songs.length;
    const newIndex =
      (currentIndex + (direction === "forward" ? 1 : -1) + lengthSongs) %
      lengthSongs;

    const updatedSongs = songs.map((song, index) => ({
      ...song,
      active: index === newIndex,
    }));

    setSongs(updatedSongs);
    setCurrentSong(songs[newIndex]);
    playAudio(isPlaying, audioRef);
  }

  function dragHandler(event) {
    audioRef.current.currentTime = event.target.value;
    setSongInfo({ ...songInfo, currentTime: event.target.value });
  }
  return (
    <div className="player-wrapper">
      <div className="controller-icons">
        <button
          onClick={() => {
            skipTrackHandler("backward");
          }}
        >
          <BackIcon />
        </button>
        <button onClick={playsongHandler}>
          {isPlaying ? <PlayIcon /> : <PauseIcon />}
        </button>
        <button
          onClick={() => {
            skipTrackHandler("forward");
          }}
        >
          <ForwardIcon />
        </button>
      </div>
      <div className="song-details">
        <h1 className="song-name">{currentSong.name}</h1>
        <h4 className="song-albulm">{currentSong.artist}</h4>
      </div>
      <div className="seek">
        <h4 className="start-time">
          {isPlaying ? formatTime(songInfo.currentTime) : "0:00"}
        </h4>
        <input
          min={0}
          max={isNaN(songInfo.duration) ? 0 : songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
          name="range"
          id="range"
        />
        <h4 className="end-time">
          {isPlaying ? formatTime(songInfo.duration) : "0:00"}
        </h4>
      </div>
    </div>
  );
};

export default Player;
