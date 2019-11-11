import React from 'react';
import Specials from '../ButtonComponents/SpecialButtons/Specials';
import Numbers from '../ButtonComponents/NumberButtons/Numbers';
import Operators from '../ButtonComponents/OperatorButtons/Operators';


const Keypad = () => {
    return(
    <div className="keyPad">
        <div className="leftPad">
            <Specials />
            <Numbers />
        </div>
        <div className="rightPad">
            <Operators />
        </div>
    </div>
    );
};

export default Keypad;