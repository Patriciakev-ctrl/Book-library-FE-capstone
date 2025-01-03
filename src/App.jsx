import "./tailwind.css";
import { Route, BrowserRouter as Router,  Routes } from "react-router-dom";
import { AppProvider } from './context';
import BookList from "./components/BookList";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import About from "./components/About";
import BookCard from "./components/BookCard";
import BookDetails from "./components/BookDetails";


function App() {

  return (
    <>
      <AppProvider className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/bookcard" element={<BookCard/>}/>
            <Route path = "/book" element = {<BookList />} />
            <Route path = "/book/:id" element = {<BookDetails />} />
         

        </Routes>
      </Router>
      </AppProvider>
    </>
  )
}

export default App
