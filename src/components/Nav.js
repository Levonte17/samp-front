import{Link} from 'react-router-dom';



function Nav(props) {

    return ( 

<div className='nav'>
<Link to='/Contact-us'>
    <a className='sam'>  
        CONTACT
    </a>
</Link>
<Link to='/workout' >
        <a className='sam'>  
            SCHEDULE
        </a>
    </Link>

<Link to='/'>
    <a className='samp'>  
        S.A.M.P. FITNESS
    </a>
</Link>

    <Link to='/About-us'>
    <a className='sam'>  
            ABOUT
        </a>    
    </Link>
    
    <Link to='/content'>
    <a className='sam'>  
            CONTENT
        </a>    
    </Link>
</div>

    );
}


export default Nav;