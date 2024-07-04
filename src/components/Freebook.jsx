// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios'

const Freebook = () => {
  const [books, setBook] = useState([])
  useEffect(()=>{
    const getUser=async()=> {
      try {
        const res = await axios.get('http://localhost:3001/book');
        setBook(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser()
  },[])
  const Free = books.filter((data) => data.category === 'free');

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='my-6'> 
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <h1 className='text-xl font-bold pb-2'>Free Offered Course</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iusto! Obcaecati, ad.</p>
        </div>
        <div>
        <Slider {...settings}>
            {Free.map((book, index) => (
              <div key={index}>
              <Card book={book} key={book.id} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
