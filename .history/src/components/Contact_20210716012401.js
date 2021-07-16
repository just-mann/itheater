import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendMessage = (e) => {
        // Prevent default refresh
        e.prevendDefault();

        emailjs.sendForm('Your_Service_Id', "Your_Template_Id", e.target, 'Your_user_id')
            .then(result => {
                console.log(result);
            }, (error) => {
                console.log(error)
            });

    }

    return (
        <div className="Contact">
            <h3>Contact Component</h3>
            <div>
                <form>
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
                </form>
            </div>
        </div>
    )
}

export default Contact;
