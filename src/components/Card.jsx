// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ book }) => {
 
  return (
   <>

   <div className='mt-4 my-3 p-3 hover:scale-105 duration-300 '>
      <div className="card bg-base-100 w-92 shadow-xl dark:bg-slate-600 dark:border dark:text-white">
  <figure>
    <img
      src={book.image}
      alt="Shoes" />
  </figure>
  <div className="card-body -mt-4 ">
    <h2 className="card-title">
    {book.name}
      <div className="badge badge-secondary">{book.category}</div>
    </h2>
    <p>{book.title}</p>
    <div className="card-actions justify-between pt-2">
      <div className="badge badge-outline cursor-pointer p-4">{book.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-300 p-4 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
</div>

   </>
  );
}

Card.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
