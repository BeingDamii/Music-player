import { BackIcon, ForwardIcon, PlayIcon } from "../resources/icons";
import { useRef } from "react";

const Player = ({ song, setIsplaying, isPlaying }) => {
  const audioRef = useRef(null);

  function playSongHandler() {
    console.log(isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
      setIsplaying(!isPlaying)
    } else {
      audioRef.current.play();
      setIsplaying(!isPlaying)
    }
  }

  return (
    <div className="player-wrapper">
      <div className="controller-icons">
        <button>
          <BackIcon />
        </button>
        <button onClick={playSongHandler}>
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
      <audio ref={audioRef} src={song.audio}></audio>
    </div>
  );
};

export default Player;
