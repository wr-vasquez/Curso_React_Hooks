import React, {useState, useEffect} from 'react'

const Character = () => {

    const [characters, setCharacters]= useState ([]);
    
    useEffect (() => {
        fetch('https://rickandmortyapi.com/api/character')
       .then(response => response.json() )
       .then(data => setCharacters(data.results));
    }, []);

  return (
    <div className='Characters'>

        <h1>React Hooks useEffect</h1>
             
                
        {characters.map(character => (
            <h2>{character.name} </h2>
            
            
        ))}
    </div>
  );
}

export default Character