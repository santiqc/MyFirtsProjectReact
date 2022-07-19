import React, { useEffect, useState } from 'react';
import Gif from '../Gif/Gif'


const Giphy = () => {
  const API_KEY = 'fFpvzUa9eSn2p1pC3YavGSjieBtZ0fgs';
  const [gifs, setGif] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('random');
  const [gifCIP, setGifCIP] = useState(false);  // CIP = Call in process
  
  useEffect(() => {
    getGif().then(all => setGif(all));
  }, [query])
  
  const getGif = async (position = 1) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=fFpvzUa9eSn2p1pC3YavGSjieBtZ0fgs&q=${query}&limit=20&pos=${position}`);
    const data = await response.json();
    data.data.forEach(element => {
        
    });
    return data.data;
  }
  const updateSearch = e => {
    setSearch(e.target.value);
    
  }
  console.log(query)
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  return (
    <div className='bodyThenor'>
    <header className="header">
      <form onSubmit={getSearch} className="search-from">
        <input className="search-bar" type="text" value={search}
          onChange={updateSearch} placeholder="
          Write Your Gif Here..." />
        <button className="search-button" type="submit">Search</button>
      </form>
    </header>

    <div className="gif">
    {gifs.map(gif => (
      <Gif
        img={gif.images.downsized_medium.url}
        key={gif.id}
      />
    ))}
  </div>
  </div>
  );
}


export default Giphy;