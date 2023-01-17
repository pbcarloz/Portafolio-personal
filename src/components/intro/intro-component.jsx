import './intro-style.css'
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
                        <div className='i-desc'></div>
                </div>
            </div>
            <div className='i-right'>Right</div>
        </div>
    );
};

export default Intro;