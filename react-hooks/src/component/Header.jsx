import React, {useState} from 'react'


const Header = () => {

  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () =>{
    setDarkMode (!darkMode);
  }


  return (
    <div className='Header'>
      <h1>React Hooks</h1>
      
      {/**Estas son 2 formas de setear los estados ya sea por handelClick o pasar directo el estado en el button */}
       <button type='button' onClick={handleClick} >{darkMode ? 'Dark Mode' : 'Light Mode' } </button>
       <button type='button' onClick={() => setDarkMode (!darkMode) } >{darkMode ? 'Dark Mode2' : 'Light Mode2' } </button>
    </div>
  );
}

export default Header;
