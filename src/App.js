import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Pagination from './components/Pagination';

function App() {
  const [characters, setcaracteres] = useState([]);
  const [info, setInfo] = useState({});

  const initial_url = 'REACT_APP_initial_url';

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setcaracteres(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevius = () => {
    fetchCharacters(info.prev)
  }
  
  const onNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(initial_url)
  }, [])
  
  return (
    <>
    
      <Navbar brand='Rick and Morty app'/>
      
      <div className='container mt-5 '>

    
        <Pagination prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext} />
        
        <Characters characters= {characters}/>
        
        <Pagination prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext} />
        
      </div>

    </>
  );
}

export default App;


