import React, {useEffect} from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';
import SideNav from './SideNav';




const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

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
                <h3>Feedback</h3>
                <div className="row">
                    <div className="contactDet">
                        <h3>Hi There</h3>
                        <p>
                            I am, and always will be a student of the art of <span>CODING</span>, expecially 
                            <span> Front End Web Development</span>. This project 
                            Cumque aliquam asperiores eos, 
                            magni quia quasi molestiae id deserunt, ut 
                            libero blanditiis officia tempora neque ex.
                        </p>
                        <p>
                            I am, and always will be a student of coding, expecially of
                            Front End Web Development. This project 
                            Cumque aliquam asperiores eos, 
                            magni quia quasi molestiae id deserunt, ut 
                            libero blanditiis officia tempora neque ex.
                        </p>
                    </div>
                    <form onSubmit={sendMessage}>
                        <div>
                            {/* <label htmlFor="name">Name</label> */}
                            <input type="text" name="name" id="name" placeholder="Enter Your Name" required/>
                        </div>
                        <div>
                            {/* <label htmlFor="email">Email</label> */}
                            <input type="email" name="email" id="email" placeholder="Enter Your Email" required/>
                        </div>
                        <div>
                            {/* <label htmlFor="message">Message</label> */}
                            <textarea name="message" id="message" cols="30" rows="6.5" placeholder="Please Leave a Comment" required></textarea>
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
