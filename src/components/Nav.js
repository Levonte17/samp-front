import{Link} from 'react-router-dom';
function Nav(props) {

    return (
        
<div className="nav">

<Link to='Wdetail'>
    <div className='brand'> 
        <a>
            S.A.M.P. FITNESS
        </a>
    </div>
</Link>        
    <Link to='About'>
        <div className='links'>
        <a>
            ABOUT
        </a>    
        </div>
    </Link>

<Link to='Wdetails' >
        <div className='links'>
        <a>  
            WORKOUT DETAILS
        </a>
        </div>
    </Link>

    <Link to='Athelete'>
        <div className='links'>
        <a>  
                OUR ATHLETES
        </a>        
        </div>
    </Link>

    <Link to='Workout'>
        <div className='links'>
        <a>  
            WORKOUTS
        </a>
        </div>
    </Link>

    <Link to='Contact Us'>
        <div className='links'>    
        <a>  
            CONTACT US
        </a>
        </div>
    </Link>
</div>
    );
}


export default Nav;