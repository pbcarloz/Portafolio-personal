import './intro-style.css'
import miFoto from '../../img/miFoto.png'
import React from 'react';

const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>Carlos Perez</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Development</div>
                            <div className='i-title-item'>Project Management</div>
                            <div className='i-title-item'>Senior Buyer</div>
                            <div className='i-title-item'>React Js</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                        With my combination of business acumen and web technical skills, I am eager to contribute my talents to innovative projects and further advance your company.
                    </p>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={miFoto} className='i-img' alt="perfil" />
            </div>
        </div>
    );
};

export default Intro;