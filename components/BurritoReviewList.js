import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BurritoReviewItem from './BurritoReviewItem';

const BurritoReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/burritos');
        setReviews(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Burrito Reviews</h1>
      {reviews.map((review, index) => (
        <BurritoReviewItem key={index} review={review} />
      ))}
    </div>
  );
};

export default BurritoReviewList;
