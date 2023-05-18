import { BackIcon, ForwardIcon, PlayIcon } from "../resources/icons";
import { useRef, useState } from "react";

const Player = ({ song, setIsplaying, isPlaying }) => {
  // react hooks
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

  function playsongHandler() {
    console.log(isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsplaying(!isPlaying);
  }

  // function timeupdateHandler(event) {
  //   const currentTime = event.target.currentTime;
  //   const duration = event.target.duration;
  // }

  function timeupdateHandler(event) {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;

    // Format currentTime
    const formattedCurrentTime = formatTime(currentTime);

    // Format duration
    const formattedDuration = formatTime(duration);

    setSongInfo({
      ...songInfo,
      currentTime: formattedCurrentTime,
      duration: formattedDuration,
    });
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  return (
    <div className="player-wrapper">
      <div className="controller-icons">
        <button>
          <BackIcon />
        </button>
        <button onClick={playsongHandler}>
          <PlayIcon />
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
        <h4 className="start-time">1:24</h4>
        <input type="range" name="range" id="range" />
        <h4 className="end-time">2:70</h4>
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
