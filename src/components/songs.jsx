import Artwork from "../resources/artwork.png";
import { DragIcon } from "../resources/icons";
const Song = ({ song }) => {
  return (
    <div className="song-wrapper">
      <img src={song.cover} alt="song-artwork" className="song-cover" />
      <div className="drag-instruction-div">
        <DragIcon />
        <h4>Drag song here to update player</h4>
      </div>
    </div>
  );
};

export default Song;
