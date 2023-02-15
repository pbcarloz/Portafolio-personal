
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
                    <img src={Monster} className='a-img' alt='about-img' />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    It is a long stablished fact that.
                </p>
                <p className='a-desc'>
                    I am a professional with a background in purchasing and web development. With six years as a purchaser for Volkswagen, I honed my skills in negotiations, project management, and cost optimization.
                    <br /> I have also studied web development for three years, which has given me a solid foundation in front-end React development, as well as web design and user experience. With my combined skills in purchasing and React JS development, I am confident in my ability to bring innovative solutions to complex business problems.
                </p>
                <div className='a-award'>
                    <img src={Award} alt="award 1" className='a-award-img' />
                    <div className='a-award-texts'>
                        <h4 className='a-award-title'>Front End Web Development</h4>
                        <p className='a-award-desc'>
                            Certificate as a Front End Web Development with the University CorderHouse Argentina.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;