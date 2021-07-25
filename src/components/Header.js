import {useState} from 'react';


function Header({onDarkModeClick,mode}) {

    // const [items, setItems] = useState(itemData);
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // function handleDarkModeClick() {
    //     setIsDarkMode((isDarkMode) => !isDarkMode);
    //   } 


  return (
    <>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {mode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </>
  );
}

export default Header;
