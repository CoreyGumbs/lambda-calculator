import React, { useState } from "react";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo"; 
import Display from './components/DisplayComponents/Display';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';


function App() {
  const [displayNum, setDisplayNum] = useState(0);

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display displayNum={displayNum} />
        <Specials />
        <Numbers />
        <Operators />
      </div>
    </div>
  );
}

export default App;
