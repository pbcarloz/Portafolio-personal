import "./contact.style.css"
import React, { useContext, useState } from 'react';
import { useRef } from "react";
import Phone from '../../img/icons8-phone-50.png'
import Email from '../../img//icons8-mail-account-48.png'
import Address from '../../img/icons8-home-address-50.png'

import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const formRef = useRef();

    const [complete, setComplete] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        validateForm();

        function validateForm() {
            console.log("madeithere")
            const name = document.getElementById('user_name').value;
            const subject = document.getElementById('user_email').value;
            const email = document.getElementById('user_email').value;
            const message = document.getElementById('user_message').value;

            const nameRegex = /^[a-zA-Z ]+$/; // Regular expression pattern for name validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression pattern for email validation

            if (!nameRegex.test(name)) {
                alert('Please enter a valid name.');
                return false;
            }

            if (subject.length < 1) {
                alert('Please enter a subject.');
                return false;
            }

            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            if (message.length < 1) {
                alert('Please enter a message.');
                return false;
            }

            // If all inputs are valid, submit the form
            emailjs.sendForm('service_eyjwnoj', 'template_s6ees1s', formRef.current, 'Ck-YFVjFHvltXOFMj')
                .then((result) => {
                    console.log(result.text);
                    setComplete(true);
                }, (error) => {
                    console.log(error.text);
                });
            console.log(complete)
            document.getElementById("form_fields").reset();
        }
    };


    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's get in contact !</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                className="c-icon"
                                src={Phone}
                                alt="phone logo" />
                            +81 80 5239 0105
                        </div>
                        <div className="c-info-item">
                            <img
                                className="c-icon"
                                src={Email}
                                alt="email logo" />
                            pbcarlozm@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                className="c-icon"
                                src={Address}
                                alt="address logo" />
                            Fukuoka, Kitakyushu, Yahatanishi
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What is your challenge ?</b> Always up to make things work.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} id="form_fields">
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" id="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" id="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" id="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" id="user_message" />
                        <button>Submit</button>
                        {complete && " Thank you"}
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;