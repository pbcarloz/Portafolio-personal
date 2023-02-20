import React, { useContext } from 'react';
import './toggle.style.css'
import Sun from '../../img/icons8-light-mode-78.png'
import Moon from '../../img/icons8-dark-mode-48.png'
import { ThemeContext } from '../../context';

const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <div className='t'>
            <img src={Sun} alt="sun" className='t-icon' />
            <img src={Moon} alt="moon" className='t-icon' />
            <div className='t-button' onClick={handleClick}
                style={{ left: theme.state.darkMode ? 0 : 25 }}>
            </div>
        </div>
    );
};

export default Toggle;