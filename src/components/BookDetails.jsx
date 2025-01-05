import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "./Loader";
import coverImg from "../assets/cover-not-found.jpg";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "../css/BookDetails.css";

const URL = "https://openlibrary.org/works/";

//this components will show more details about the app

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  //to switch  the route
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function  BookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
  
        //Recovering data
        if(data){
          const {description, title, covers, ISBN, first_publish_date, number_of_pages, subjects} = data;
          
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            ISBN: ISBN ? ISBN.join(", ") : "No ISBN found",
            first_publish_date : first_publish_date ? first_publish_date : "No publish date found",
            number_of_pages : number_of_pages ? number_of_pages.join(", ") : "No number of pages found",
            subjects: subjects ? subjects[0] : "No subjects found"
          };
          setBook(newBook);
        } 
        else {
          setBook(null);
        }

        setLoading(false);
      } 
      catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    BookDetails();
  }, [id]);
//to show that the data are loading
  if(loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid bg-cyan-100'>

          <div className='book-details-img mt-6 mb-6'>
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
              <span className='text-italic'>{book?.first_publish_date}</span>
            </div>

            <div className='book-details-item'>
              <span className='fw-6'>Number of Pages: </span>
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