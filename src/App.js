import Navbar from "./components/navbar";
import Player from "./components/player";
import Song from "./components/songs";
import "./styles/app.scss";

function App() {
  return (
    <div className="main-wrapper">
      <Navbar/>
      <Song />
      <Player />
    </div>
  );
}

export default App;
