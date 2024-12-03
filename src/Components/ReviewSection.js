import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReviews } from '../Redux/dbslice'; 

const ReviewSection = () => {
  const dispatch = useDispatch();
  const { userReviews, loading, error } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchUserReviews());
  }, [dispatch]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;

  
  const reviews = Array.isArray(userReviews) ? userReviews : [];

  return (
    <div className="review-section">
      <h2>User Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map((review) => {
            const timestamp = review.timestamp
              ? review.timestamp.toLocaleString()
              : 'No timestamp';

            return (
              <li key={review.id} className="review">
                <div className="review-header">
                  <span className="review-username">{review.userId}</span>
                  <span className="review-timestamp">{timestamp}</span>
                </div>
                <div className="review-rating">
                  Rating: {review.rating} / 5
                </div>
                <div className="review-comment">
                  <p>{review.comment}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ReviewSection;
