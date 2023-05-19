import Navbar from "./components/navbar";
import Player from "./components/player";
import ScrollableText from "./components/scrollableText";
import Song from "./components/songs";
import { useState } from "react";
import musicData from "./resources/util";
import "./styles/app.scss";

function App() {
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSongs] = useState(songs[0]);
  const [isPlaying, setIsplaying] = useState(false);
  return (
    <div className="main-wrapper">
      <Navbar songs={songs} />
      <Song song={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        song={currentSong}
      />
      <ScrollableText />
    </div>
  );
}

export default App;
