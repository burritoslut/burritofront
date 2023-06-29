//SearchPage.js

import { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      let res;
      if (searchTerm) {
        res = await axios.get(`http://localhost:5000/api/search?searchTerm=${searchTerm}`);
      } else {
        res = await axios.get('http://localhost:5000/burritos');
      }
      setResults(res.data);
    } catch (error) {
      console.log('Error occurred during search: ', error);
    }
  };

  return (
    <div>
      <h1>Search for Restaurants</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter restaurant name"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <h2>Results:</h2>
        {results.map((result) => (
          <div key={result._id}>
            <h3>Restaurant: {result.restaurantName}</h3>
            <p>Burrito: {result.burritoName}</p>
            <p>Date: {new Date(result.date).toLocaleDateString()}</p>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
              <p>Tortilla Quality: {result.tortillaQuality}/10</p>
              <p>Meatiness: {result.meatiness}/10</p>
              <p>Cheesiness: {result.cheesiness}/10</p>
              <p>Mass: {result.mass}/10</p>
              <p>Greasiness: {result.greasiness}/10</p>
              <p>Potatoes: {result.potatoes}/10</p>
              <p>Texture: {result.texture}/10</p>
              <p>Salsa: {result.salsa}/10</p>
              <p>Enjoyment: {result.enjoyment}/10</p>
              <p>Price: ${result.price.toFixed(2)}</p>
            </div>
            <p>Notes: {result.notes}</p>
            <p>Thumbs Up: {result.thumbsUp}</p>
            <p>Thumbs Down: {result.thumbsDown}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
