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
                                <div className='i-title-item'>Web Developer</div>
                                <div className='i-title-item'>React Js</div>
                                <div className='i-title-item'>Front End</div>
                                <div className='i-title-item'>Project Management</div>
                            </div>
                        </div>
                        <p className='i-desc'>
                            I design and develop services for customers of all sizes, specializing in creating robust modern websites, webservices and project management. 
                        </p>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={miFoto} className='i-img' alt="perfil"/>
            </div>
        </div>
    );
};

export default Intro;