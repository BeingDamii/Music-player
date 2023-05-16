import { BackIcon, ForwardIcon, PlayIcon } from "../resources/icons";

const Player = () => {
  return (
    <div className="player-wrapper">
      <div className="controller-icons">
        <BackIcon />
        <PlayIcon />
        <ForwardIcon />
      </div>
      <div className="song-details">
        <h1 className="song-name">song name</h1>
        <h1 className="song-albulm">Song singer</h1>
      </div>
      <div className="seek">
        <h4 className="start-time">start time</h4>
        <input type="range" name="range" id="range" />
        <h4 className="end-time">end time</h4>
      </div>
    </div>
  );
};

export default Player;
