import songImage from "../resources/songimage.png";

const LibrarySong = ({ song }) => {
  return (
    <div className="library-song-wrapper">
      <div>
        <img src={song.cover} alt="library song" />
      </div>
      <div className="song-description">
        <h1>{song.name}</h1>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
