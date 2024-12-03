import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserReview } from '../Redux/action';  
import { setLoading } from '../Redux/dbslice';
import './ReviewForm.css';


const ReviewForm = () => {
  const [rating, setRating] = useState(1); 
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.data);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!comment) {
      alert("Please provide a comment.");
      return;
    }

    const reviewData = {
      rating,
      comment,
      timestamp: new Date(),
    };

    
    dispatch(addUserReview(reviewData));  

    
    setRating(1);
    setComment('');
  };

  return (
    <div className="review-form">
      <h2>Leave a Review</h2>
      {loading && <p>Submitting review...</p>}
      {error && <p>Error: {error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="rating">
          <label>Rating: </label>
          <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
            {[1, 2, 3, 4, 5].map((rate) => (
              <option key={rate} value={rate}>
                {rate} Stars
              </option>
            ))}
          </select>
        </div>
        <div className="comment">
          <label>Comment: </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review..."
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
