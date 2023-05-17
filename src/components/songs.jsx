import Artwork from "../resources/artwork.png";
import { DragIcon } from "../resources/icons";
const Song = () => {
  return (
    <div className="song-wrapper">
      <img src={Artwork} alt="demo-artwork" />
      <div className="drag-instruction-div">
        <DragIcon />
        <h4>Drag song here to update player</h4>
      </div>
    </div>
  );
};

export default Song;
