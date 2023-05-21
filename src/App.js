import Navbar from "./components/navbar";
import Player from "./components/player";
import ScrollableText from "./components/scrollableText";
import Song from "./components/songs";
import { useState, useRef } from "react";
import musicData from "./resources/util";
import "./styles/app.scss";

function App() {
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsplaying] = useState(false);
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  function timeupdateHandler(event) {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: currentTime,
      duration,
    });
  }

  return (
    <div className="main-wrapper">
      <Navbar
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        audioRef={audioRef}
        />
      <Song song={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <audio
        onTimeUpdate={timeupdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
      <ScrollableText />
    </div>
  );
}

export default App;
