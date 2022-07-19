
import React, { useEffect, useState } from 'react';
import Gif from '../Gif/Gif'
 

export const ThenorApi = () => {

  const API_KEY = 'HJWTLY59W72I';
  const [gifs, setGif] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('random');
  const [gifCIP, setGifCIP] = useState(false);  // CIP = Call in process

  useEffect(() => {
    getGif().then(all => setGif(all));
  }, [query])

  const getGif = async (position = 1) => {
    const response = await fetch(`https://api.tenor.com/v1/search?q=${query}&key=${API_KEY}&limit=20&pos=${position}`);
    const data = await response.json();
    return data.results;
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

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
      {
        gifs.length >= 20
          ?
          <div>
            <div className="gif">
              {gifs.map(gif => (
                <Gif
                  img={gif.media[0].tinygif.url}
                />
              ))}
            </div>
            {gifCIP && 
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            }
          </div>
          : <img src="https://i.pinimg.com/originals/a4/f2/cb/a4f2cb80ff2ae2772e80bf30e9d78d4c.gif" alt="loader-icon" />
          
     }
    </div>
  );
}

