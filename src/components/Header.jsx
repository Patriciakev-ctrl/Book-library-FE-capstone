import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import  "../../src/css/Header.css";

function Header() {
    return( 
    <> 
        <NavBar />
        <div className="header-container"> 
            <h1>Find the book of your choice here!</h1>
            <p>We know how much entertainment is important for our brain. But not only, knowledges is more important. We recommand you to read as often as possible to keep your brain up to date.</p>
            <SearchBar/>
        </div>
    </>
    );
}
export default Header;