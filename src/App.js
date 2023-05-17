import Navbar from "./components/navbar";
import Player from "./components/player";
import ScrollableText from "./components/scrollableText";
import Song from "./components/songs";
import "./styles/app.scss";

function App() {
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
