import React from 'react';
import { useGlobalContext } from '../context.jsx';
import Book from "./BookCard";
import Loading from "./Loader";
import coverImg from "../assets/cover-not-found.jpg";
import "../css/BookList.css";

//Fetch bookCards to presents a list of books
const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='text-center py-10'>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList;