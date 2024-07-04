// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Card';
import { Link } from 'react-router-dom';

const Course = () => {
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

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='pt-28 text-center'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          We are delighted to have you <span className='text-pink-500'>here! :)</span>
        </h1>
        <p className='mt-12'>
          Bookstore aims to offer a wide range of books, from classic novels to contemporary bestsellers.
          We are always looking for new titles to add to our collection. Bookstore aims to offer a wide range of books, from classic novels to contemporary bestsellers.
          We are always looking for new titles to add to our collection.
        </p>
       <Link to = '/'><button className="bg-pink-500 duration-300 mt-6 text-white px-4 hover:bg-pink-600 py-2 rounded-lg">Back</button></Link> 
      </div>
      <div className='mt-6 grid grid-cols-1 md:grid-cols-4 '>
        {books.map((item) => (
          <div key={item.id} className='flex flex-col items-center my-6'>
            <Card book={item} key={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
