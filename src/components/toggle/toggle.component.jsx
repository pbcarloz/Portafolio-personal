import React from 'react';
import './toggle.style.css'
import Sun from '../../img/icons8-light-mode-78.png'
import Moon from '../../img/icons8-dark-mode-48.png'

const Toggle = () => {
    return (
        <div className='t'>
            <img src={Sun} alt="sun" className='t-icon' />
            <img src={Moon} alt="moon" className='t-icon' />
            <div className='t-button'></div>
        </div>
    );
};

export default Toggle;