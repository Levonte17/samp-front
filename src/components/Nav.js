import{Link} from 'react-router-dom';
import { login, logout } from '../Firebase';



function Nav({ user }) {

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
    <br/>
    <section>
        { 
            user ? 
            <>
            <div className='user'>
            Welcome, {user.displayName}
            </div>
        <div onClick={logout}>
            LOGOUT
        </div>
            </>
        :
        <div onClick={login}>
            LOGIN
        </div>

        }
    </section>
</div>

    );
}


export default Nav;