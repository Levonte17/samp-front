import{Link} from 'react-router-dom';

function Nav({ user }) {

    return ( 

<div className='nav'>
<Link to='/'>
    <div className='samp'>  
        S.A.M.P. FITNESS
    </div>
</Link>
<br/>
<Link to='/Contact-us'>
    <div className='sam'>  
        CONTACT
    </div>
</Link>

<Link to='/workout' >
        <div className='sam'>  
            SCHEDULE
        </div>
</Link>


    <Link to='/About-us'>
    <div className='sam'>  
            ABOUT
        </div>    
    </Link>
    
    <Link to='/content'>
    <div className='sam'>  
            CONTENT
        </div>    
    </Link>
    <br/>
</div>

    );
}


export default Nav;