import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton';
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialBtns] = useState(specials);
  // STEP 2 - add the imported data to state
  
  return (
  
    <div>

      {
        specialBtns.map((character, idx) => (
          <SpecialButton key={idx} char={character} />
        ))
      }
    </div>
  );
};

export default Specials;
