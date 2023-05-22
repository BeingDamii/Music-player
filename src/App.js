import Navbar from "./components/navbar";
import Player from "./components/player";
import ScrollableText from "./components/scrollableText";
import Song from "./components/songs";
import { useState, useRef } from "react";
import musicData from "./resources/util";
import "./styles/app.scss";
import { playAudio } from "./resources/fns";

function App() {
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsplaying] = useState(false);
  const audioRef = useRef(null);
  const [dragged, setDragged] = useState("hello wworld");

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  function timeupdateHandler(event) {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;

    // calculate percentage
    const currentRounded = Math.round(currentTime);
    const durationRounded = Math.round(duration);
    const animationPercentage = Math.round(
      (currentRounded / durationRounded) * 100
    );

    setSongInfo({
      ...songInfo,
      currentTime: currentTime,
      duration,
      animationPercentage,
    });
  }

  // async function audioEndedHandler() {
  //   let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  //   const lengthSongs = songs.length;

  //   await setCurrentSong(songs[(currentIndex + 1) % lengthSongs]);

  //   if (isPlaying) audioRef.current.play();

  //   console.log("ended");
  // }

  async function audioEndedHandler() {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const lengthSongs = songs.length;

    await setCurrentSong(songs[(currentIndex + 1) % lengthSongs]);

    audioRef.current.addEventListener("canplaythrough", () => {
      if (isPlaying) audioRef.current.play();
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
        dragged={dragged}
        setDragged={setDragged}
      />
      <Song
        song={currentSong}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        dragged={dragged}
        isPlaying={isPlaying}
        setDragged={setDragged}
      />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <audio
        onTimeUpdate={timeupdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={audioEndedHandler}
      ></audio>
      <ScrollableText />
    </div>
  );
}

export default App;
