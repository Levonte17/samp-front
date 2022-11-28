import{Link} from 'react-router-dom';



function Nav(props) {

    return ( 

<div className='nav'>
<Link to='/Contact-us'>
    <p className='sam'>  
        CONTACT
    </p>
</Link>
<Link to='/workout' >
        <p className='sam'>  
            SCHEDULE
        </p>
    </Link>

<Link to='/'>
    <p className='samp'>  
        S.A.M.P. FITNESS
    </p>
</Link>

    <Link to='/About-us'>
    <p className='sam'>  
            ABOUT
        </p>    
    </Link>
    
    <Link to='/content'>
    <p className='sam'>  
            CONTENT
        </p>    
    </Link>
</div>

    );
}


export default Nav;