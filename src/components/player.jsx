import { BackIcon, ForwardIcon, PauseIcon, PlayIcon } from "../resources/icons";
import { useRef, useState } from "react";

const Player = ({ song, setIsplaying, isPlaying }) => {
  // react hooks
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null,
  });

  // events handlers
  function playsongHandler() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsplaying(!isPlaying);
  }
  function timeupdateHandler(event) {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: currentTime,
      duration,
    });
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  }
  function dragHandler(event) {
    audioRef.current.currentTime = event.target.value;
    setSongInfo({ ...songInfo, currentTime: event.target.value });
  }
  return (
    <div className="player-wrapper">
      <div className="controller-icons">
        <button>
          <BackIcon />
        </button>
        <button onClick={playsongHandler}>
          {isPlaying ? <PlayIcon /> : <PauseIcon />}
        </button>
        <button>
          <ForwardIcon />
        </button>
      </div>
      <div className="song-details">
        <h1 className="song-name">{song.name}</h1>
        <h4 className="song-albulm">{song.artist}</h4>
      </div>
      <div className="seek">
        <h4 className="start-time">
          {isPlaying ? formatTime(songInfo.currentTime) : "0:00"}
        </h4>
        <input
          min={0}
          max={songInfo.duration}
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
      <audio
        onTimeUpdate={timeupdateHandler}
        ref={audioRef}
        src={song.audio}
      ></audio>
    </div>
  );
};

export default Player;
