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
        <h1 className="song-name">Naruto lo-fi beat</h1>
        <h4 className="song-albulm">From Naruto: Shippuden S7E11</h4>
      </div>
      <div className="seek">
        <h4 className="start-time">1:24</h4>
        <input type="range" name="range" id="range" />
        <h4 className="end-time">2:70</h4>
      </div>
    </div>
  );
};

export default Player;
