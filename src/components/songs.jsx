import { DragIcon } from "../resources/icons";
const Song = ({
  song,
  songs,
  setSongs,
  audioRef,
  isPlaying,
  dragged,
  setCurrentSong,
  setDragged,
}) => {
  const handleDragOver = (event) => {
    // console.log("dragged over");
    const id = dragged.id;
    const updatedSongs = songs.map((s) => ({
      ...s,
      active: s.id === id,
    }));
    setSongs(updatedSongs);
    setCurrentSong(dragged);

    audioRef.current.addEventListener("canplaythrough", () => {
      if (isPlaying) audioRef.current.play();
    });
  };
  return (
    <div className="song-wrapper" onDragOver={handleDragOver}>
      <img src={song.cover} alt="song-artwork" className="song-cover" />
      <div className="drag-instruction-div">
        <DragIcon />
        <h4>Drag song here to update player</h4>
      </div>
    </div>
  );
};

export default Song;
