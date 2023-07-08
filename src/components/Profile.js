// Profile.js

import { SERVER_URL } from '../config';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${SERVER_URL}/users/me`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
    .then((response) => {
      setUser(response.data);
    })
    .catch((error) => {
      console.error('Error during request', error);
      // Handle error...
    });
  }, []);

  if(!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Replace the following line with the actual rendering code. */}
      {JSON.stringify(user)}
    </div>
  );
};

export default Profile;
