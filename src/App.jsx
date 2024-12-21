import React from 'react';
import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="https://www.itsfrontporch.com/wp-content/uploads/6359524176194484221446729975_travel-01.jpg" alt="Travel Explorer Logo" />
        </div>
        <h1>Welcome to Travel World</h1>
        <nav>
          
            <a href="#home">Home</a>
            <a href="#destinations">Destinations</a>
           <a href="#About">About</a>
            <a href="#contact">Contact</a>
          
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Discover Your Next Adventure</h2>
          <p>Explore the world's most beautiful places with us.</p>
        </section>
        <Search />
        <section id="destinations">
          <h2>Popular Destinations</h2>
          <div className="destination">
            <h3>Paris</h3>
            <p>The city of lights and love.</p>
            <img src="https://example.com/paris.jpg" alt="Paris" />
          </div>
          <div className="destination">
            <h3>Bali</h3>
            <p>Experience the serene beaches and vibrant culture.</p>
            <img src="https://example.com/bali.jpg" alt="Bali" />
          </div>
          {/* Add more destinations as needed */}
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Travel Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

