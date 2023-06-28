//SignUpPage.js

import axios from 'axios';  // Import axios

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {  // Make it an async function
    event.preventDefault();
    try {
      // make a POST request to the /signup endpoint
      const response = await axios.post('http://localhost:5000/signup', {
        username,
        email,
        password,
      });
      console.log(response.data);  // Print the response data for now
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpPage;
