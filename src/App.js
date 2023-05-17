import Navbar from "./components/navbar";
import Player from "./components/player";
import ScrollableText from "./components/scrollableText";
import Song from "./components/songs";
import { useState } from "react";
import musicData from "./resources/util";
import "./styles/app.scss";

function App() {
  const [songs,setSongs] = useState(musicData());
  return (
    <div className="main-wrapper">
      <Navbar />
      <Song />
      <Player />
      <ScrollableText />
    </div>
  );
}

export default App;
