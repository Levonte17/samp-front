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
    <a href='tel:+12678729508'>
                <img src={phone} alt='' className='img'/>
    </a>
    </div>

    <div className="contact3">
    <a href='mailto: csamp9@gmail.com'>
                <img src={email}  alt='' className='img'/>
    </a>
    </div>
</div>
</div>
    )
};

export default Contact;
