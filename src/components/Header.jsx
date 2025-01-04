import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import  "../../src/css/Header.css";

//implement a header with a navbar, a description text and a searchbar
function Header() {
    return( 
    <> 
        <NavBar />
        <div className="header-container min-h-screen bg-white flex items-center justify-center"> 
            <h1 className="header-title">Find the book of your choice here!</h1>
            <p className="header-description">We know how much entertainment is important for our brain. But not only, knowledges is more important. We recommand you to read as often as possible to keep your brain up to date.</p>
            <SearchBar/>
        </div>
    </>
    );
}
export default Header;