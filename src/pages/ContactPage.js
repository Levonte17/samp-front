import phone from '../assets/phone.png';
import email from '../assets/email.png';



function ContactPage(props) {
    
    return(
<div className='pbg'>
    <div className="contactUs">
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

export default ContactPage;