import { useState } from 'react';

const destinations = [
    { name: 'Paris', description: 'The city of lights and love.' },
    { name: 'Bali', description: 'Experience the serene beaches and vibrant culture.' },
    // Add more destinations as needed
];

function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    const searchDestination = () => {
        const result = destinations.find(destination => destination.name.toLowerCase() === searchInput.toLowerCase());
        setSearchResults(result ? result : { name: 'No destination found', description: '' });
    };

    return (
        <section id="search">
            <h2>Search Destinations</h2>
            <input 
                type="text" 
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)} 
                placeholder="Enter destination name" 
            />
            <button onClick={searchDestination}>Search</button>
            <div id="searchResults">
                {searchResults && (
                    <>
                        <h3>{searchResults.name}</h3>
                       
                     <p>{searchResults.description}</p>
                     {searchResults.image && <img src={searchResults.image} alt={searchResults.name} />}
                    </>
                )}
            </div>
        </section>
    );
}

export default Search;