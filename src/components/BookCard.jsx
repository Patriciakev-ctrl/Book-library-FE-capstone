import Notation from "./Notation";
import MoreButton from "./MoreButton";
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = (book) => {

  //cut a string from a character

  function cutStringFromChar(str, char) {
    // Trouver l'index du caractère
    const index = str.indexOf(char);
    
    // Si le caractère n'est pas trouvé, retourner la chaîne originale
    if (index === -1) {
        return str;
    }
    
    // Couper la chaîne à partir du caractère trouvé
    return str.substring(0, index); // ou str.slice(0, index);
}

  // convert the type to string
  const publishDate = `${book.publish_date}`;
  return (
    <div className="book-item-container  bg-cyan-100">
    <div className='book-item flex flex-column flex-sb '>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
       
        <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>Publish Year: </span>
          <span>{cutStringFromChar(publishDate, ',')}</span>
        </div>
      </div>
     
    </div>
    <Link to = {`/book/${book.id}`} {...book} className="mt-6">
          <MoreButton />
        </Link>

        <Notation className="mt-6" />

    </div>
  )
}

export default BookCard;