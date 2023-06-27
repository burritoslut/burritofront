//BurritoReviewItem.js

import React from 'react';

const BurritoReviewItem = ({ review }) => {
  return (
    <div>
      <h2>{review.burritoName}</h2>
      <h3>From: {review.restaurantName}</h3>
      <p>Date: {new Date(review.date).toLocaleDateString()}</p>
      <p>Tortilla Quality: {review.tortillaQuality}</p>
      <p>Meatiness: {review.meatiness}</p>
      <p>Cheesiness: {review.cheesiness}</p>
      <p>Mass: {review.mass}</p>
      <p>Greasiness: {review.greasiness}</p>
      <p>Potatoes: {review.potatoes}</p>
      <p>Texture: {review.texture}</p>
      <p>Salsa: {review.salsa}</p>
      <p>Price: {review.price}</p>
      <p>Notes: {review.notes}</p>
      <p>Enjoyment: {review.enjoyment}</p>
    </div>
  );
};

export default BurritoReviewItem;
