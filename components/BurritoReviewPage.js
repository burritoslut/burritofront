import React, { useState } from 'react';
import axios from 'axios';

const BurritoReviewPage = () => {
  const [review, setReview] = useState({
    burritoName: '',
    restaurantName: '',
    date: '',
    tortillaQuality: 1,
    meatiness: 1,
    cheesiness: 1,
    mass: 1,
    greasiness: 10,
    potatoes: 1,
    texture: 1,
    salsa: 1,
    price: '',
    notes: '',
    enjoyment: 1
  });

  const handleChange = (event) => {
    setReview({
      ...review,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/burritoReview', review);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Submit Your Burrito Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Burrito Name:
          <input type="text" name="burritoName" value={review.burritoName} onChange={handleChange} required />
        </label>

        <label>
          Restaurant Name:
          <input type="text" name="restaurantName" value={review.restaurantName} onChange={handleChange} required />
        </label>

        <label>
          Date:
          <input type="date" name="date" value={review.date} onChange={handleChange} required />
        </label>

        <label>
          Tortilla Quality:
          <select name="tortillaQuality" value={review.tortillaQuality} onChange={handleChange} required>
            {[...Array(10).keys()].map(i => 
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            )}
          </select>
        </label>      

        <label>
          Meatiness:
          <select name="meatiness" value={review.meatiness} onChange={handleChange} required>
            {[...Array(10).keys()].map(i => 
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            )}
          </select>
        </label>

        <label>
          Cheesiness:
          <select name="cheesiness" value={review.cheesiness} onChange={handleChange} required>
            {[...Array(10).keys()].map(i => 
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            )}
          </select>
        </label>

        <label>
          Mass:
          <select name="mass" value={review.mass} onChange={handleChange} required>
            {[...Array(10).keys()].map(i => 
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            )}
          </select>
        </label>

        <label>
          Greasiness:
          <select name="greasiness" value={review.greasiness} onChange={handleChange} required>
            {[...Array(10).keys()].map(i => 
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            )}
          </select>
        </label>      

        <label>
          Potatoes:
          <select name="potatoes" value={review.potatoes} onChange={handleChange} required>
            {[...Array(10).keys()].map(i => 
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            )}
          </select>
        </label>      
  
        <label>
          Texture:
          <select name="texture" value={review.texture} onChange={handleChange} required>
            {[...Array(10).keys()].map(i => 
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            )}
          </select>
        </label>      

        <label>
          Salsa:
          <select name="salsa" value={review.salsa} onChange={handleChange} required>
            {[...Array(10).keys()].map(i => 
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            )}
          </select>
        </label>      

        <label>
          Price:
          <input type="text" name="price" value={review.price} onChange={handleChange} required />
        </label>

        <label>
          Notes:
          <textarea name="notes" value={review.notes} onChange={handleChange} />
        </label>

        <label>
          Enjoyment:
          <select name="enjoyment" value={review.enjoyment} onChange={handleChange} required>
            {[...Array(10).keys()].map(i => 
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            )}
          </select>
        </label>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default BurritoReviewPage;
