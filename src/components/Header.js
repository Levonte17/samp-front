import{Link} from 'react-router-dom';


function Header(props) {
    return(
        <div className='header'> 
    <div className='header1'>
<h1> 
        WELCOME TO S.A.M.P. FITNESS
        <br/>
        <p>
            Your Dreams Wont Work Unless You Do
        </p>
</h1>
</div>
    
<div className='header2'>
<div className='div-link'>
        <Link to='/about-us'>
    <button>

    <p>
        GET TO KNOW US
    </p>
</button>
    </Link>
</div>


<div className='div-link'> 
    <button>
        <Link to='/workout'>
            <p>
                UPCOMING WORKOUTS
            </p>
        </Link>
    </button>
</div>
        

<div className='last-link'> 
    <button>
        <Link to='/content'>
            <p>
                VIEW CONTENT
            </p>
        </Link>
    </button>
    <button>
        <Link to='/contact-us'>
            <p>
                 FOLLOW US
            </p>
        </Link>
    </button>
        </div>

    </div>
</div>
    )
};
export default Header;