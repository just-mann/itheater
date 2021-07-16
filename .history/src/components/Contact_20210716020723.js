import React from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';

const Contact = () => {

    const sendMessage = (e) => {
        // Prevent default refresh
        e.prevendDefault();

        emailjs.sendForm('i_theater', "template_ch3vewi", e.target, 'user_q41WWjjATyZnRcd2GzQuI')
            .then(result => {
                console.log(result);
            }, (error) => {
                console.log(error)
            });

    }

    return (
        <div className="Contact">
            <Header />
            <h3>Contact Component</h3>
            <div>
                <form onSubmit={sendMessage}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Send Message" />
                    </div>
                    <br />
                    <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
