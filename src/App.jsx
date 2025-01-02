import "./tailwind.css";
import { Route, BrowserRouter as Router,  Routes } from "react-router-dom";
import { AppProvider } from './context';
import BookList from "./components/BookList";
import Contact from "./components/Contact";
import Header from "./components/Header";
import About from "./components/About";
import BookCard from "./components/BookCard";
import FormConnexion from "./components/FormConnexion";

function App() {

  return (
    <>
      <AppProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<BookList/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/bookcard" element={<BookCard/>}></Route>
            <Route path="/formconnexion" element={<FormConnexion/>}></Route>

        </Routes>
      </Router>
      </AppProvider>
    </>
  )
}

export default App
