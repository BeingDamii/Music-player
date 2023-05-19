import { PlaylistIcon } from "../resources/icons";
import LibrarySong from "./library-song";
import { useState } from "react";

const Navbar = ({ songs }) => {
  // react hooks
  const [isClicked, setIsClicked] = useState(true);
  //   event handlers
  function clickHandler() {
    setIsClicked(!isClicked);
  }
  return (
    <div className="navbar-wrapper">
      <h1>LoFi playlist</h1>
      <div
        className="library-toggle"
        onClick={clickHandler}
        style={{ width: isClicked ? "10%" : "15%" }}
      >
        <PlaylistIcon />
        <h3>{isClicked ? "Playlist" : "close playlist"}</h3>
      </div>
      <div
        className="library"
        style={{ display: isClicked ? "none" : "block" }}
      >
        {songs.map((song) => {
          console.log(song);
          return <LibrarySong key={song.id} song={song} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;
