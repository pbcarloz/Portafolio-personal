
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
                    I am an experienced direct buyer in the automotive industry, with a passion for web development. Completed a certificate program and gained proficiency in HTML, CSS, JavaScript, React and other web development technologies. With a strong foundation in project management and a sharp business acumen, i'm well-suited to manage complex web development projects and ensure efficient operations. <br />I am excited to contribute my skills to innovative projects and advance your company.
                </p>
                <div className='a-award'>
                    <a href='https://www.linkedin.com/in/pbcarlosmarcelino/?locale=en_US' >
                        <img src={Award} alt="award 1" className='a-award-img' />
                    </a>

                    <div className='a-award-texts'>
                        <h4 className='a-award-title'>My Resume</h4>
                        <p className='a-award-desc'>
                            6 years experience as a project purchaser for Volkswagen. <br />
                            3 years studying and developing projects on React. <br />
                            Navite Spanish Speaker, Fluent English and Japanese.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;