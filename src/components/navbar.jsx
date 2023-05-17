import { PlaylistIcon } from "../resources/icons";

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <h1>LoFi playlist</h1>
            <div className="library-toggle">
                <PlaylistIcon/>
                <h3>Playlist</h3>
            </div>
        </div>
    );
}

export default Navbar;
