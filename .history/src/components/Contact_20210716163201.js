import React from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';
import SideNav from './SideNav';




const Contact = () => {

    const sendMessage = (e) => {
        // Prevent default refresh
        e.prevendDefault();

        emailjs.sendForm('i_theater', "i_theater_app1245", e.target, 'user_q41WWjjATyZnRcd2GzQuI')
            .then(result => {
                console.log(result);
            }, (error) => {
                console.log(error)
            });

    }

    return (
        <div className="Contact">
            <Header />
            <SideNav />
            <div className="rightSide">
                <h3>Contact Component</h3>
                <div className="row">
                    <div className="contactDet">
                        <h3>Hi There</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Deleniti cumque impedit 
                            est optio!
                            Cumque aliquam asperiores eos, 
                            magni quia quasi molestiae id deserunt, ut 
                            libero blanditiis officia tempora neque ex.
                        </p>
                    </div>
                    <form onSubmit={sendMessage}>
                        <div>
                            {/* <label htmlFor="name">Name</label> */}
                            <input type="text" name="name" id="name" placeholder="/>
                        </div>
                        <div>
                            {/* <label htmlFor="email">Email</label> */}
                            <input type="email" name="email" id="email" />
                        </div>
                        <div>
                            {/* <label htmlFor="message">Message</label> */}
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
