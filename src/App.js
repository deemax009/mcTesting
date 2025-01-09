import './App.css';
import CheckoutPage from './pages/checkout';

const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your React app's origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  next();
});

function App() {
  return (
    <CheckoutPage />
  );
}

export default App;
