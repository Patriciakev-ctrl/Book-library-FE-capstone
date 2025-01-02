import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "./Loader";
import coverImg from "../assets/cover-not-found.jpg";
import "../css/BookDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function  BookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {description, title, covers, ISBN, publish_date, number_of_pages, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            ISBN: ISBN ? ISBN.join(", ") : "No ISBN found",
            publish_date : publish_date ? publish_date.join(", ") : "No publish date found",
            number_of_pages : number_of_pages ? number_of_pages.join(", ") : "No number of pages found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    BookDetails();
  }, [id]);

  if(loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {book?.cover_img} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Publish Date: </span>
              <span className='text-italic'>{book?.publish_date}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Number of Page: </span>
              <span className='text-italic'>{book?.number_of_pages}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>ISBN: </span>
              <span className='text-italic'>{book?.ISBN}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails;