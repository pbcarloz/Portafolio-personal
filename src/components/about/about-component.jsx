
import React from 'react';
import './about-style.css'
import Monster from '../../img/Cookie Monster.webp'
import Award from '../../img/award-1.png'

const About = () => {
    return (
        <div className='about'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src={Monster} className='a-img' alt='about-img'/>
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    It is a long stablished fact that.
                </p>
                <p className='a-desc'>
                    Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. 
                    </p>
                    <div className='a-award'>
                        <img src={Award} alt="award 1" className='a-award-img'/>
                        <div className='a-award-texts'>
                            <h4 className='a-award-title'>Front End Web Development</h4>
                            <p className='a-award-desc'>
                                Certificate for completion of the Front End Web Development career with CorderHouse Argentina
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default About;