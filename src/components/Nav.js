import{Link} from 'react-router-dom';



function Nav(props) {

    return ( 
<div className="nav">

<Link to=''>
    <div className='brand'> 
        <a>
            S.A.M.P. FITNESS
        </a>
    </div>
</Link>        

<Link to='ContactPage'>
    <div className='links'>    
    <a>  
        CONTACT
    </a>
    </div>
</Link>
<Link to='WorkoutsList' >
        <div className='links'>
        <a>  
            SCHEDULE
        </a>
        </div>
    </Link>

    <Link to='AboutPage'>
        <div className='links'>
        <a>
            ABOUT
        </a>    
        </div>
    </Link>

    <Link to='ReviewsPage'>
        <div className='links'>
        <a>  
            REVIEWS
        </a>        
        </div>
    </Link>
</div>

    );
}


export default Nav;