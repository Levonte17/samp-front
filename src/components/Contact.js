import phone from '../assets/phone.png';
import email from '../assets/email.png';


function Contact(props) {
    
    return(

<div className="contact">
    <div className="contact1">
        <h1> 
            CONTACT US 
        </h1>
    </div>

    <div className="contact-display">
    <div className="contact2">
                <img src={phone} />
    </div>

    <div className="contact3">
                <img src={email} />

    </div>
</div>
</div>
    )
};

export default Contact;
