
import React from 'react';
import './about-style.css'
import Monster from '../../img/helloWorld.jpg'
import Linkd from '../../img/LinkdIn.png'

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
                    &larr; Hello World January 2020
                </p>
                <p className='a-desc'>
                    I am an experienced direct buyer in the automotive industry, with a passion for technologies. Started my journey in web development and completed a certificate program gaining proficiency in HTML, CSS, JavaScript, React, Typescript and other web development technologies. <br /> With a strong foundation in project management and a sharp business acumen, i'm well-suited to manage complex web development projects and ensure efficient operations.  As in this moment i am in japan, holding a spouse of japanese Visa, forging my way into the japanese culture. <br /> I am excited to contribute my skills to innovative projects and advance your company.
                </p>
                <div className='a-award'>
                    <a href='https://www.linkedin.com/in/pbcarlosmarcelino/?locale=en_US' target="_blank" rel="noreferrer">
                        <img src={Linkd} alt="award 1" className='a-award-img' />
                    </a>

                    <div className='a-award-texts'>
                        <h4 className='a-award-title'>Check my LinkedIn Resume</h4>
                        <p className='a-award-desc'>
                            6 years experience as a project purchaser for Volkswagen. <br />
                            3 years studying and developing web projects. <br />
                            Navite Spanish Speaker, Fluent English and Middle Japanese.<br />
                            Holder of a Japanese Visa
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;