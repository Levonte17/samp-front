import{Link} from 'react-router-dom';


function Header(props) {
    return(
        <div className='header'> 
    <div className='header1'>
<h1> 
        WELCOME TO S.A.M.P. FITNESS
        <br/>
        <a>
            Your Dreams Wont Work Unless You Do
        </a>
</h1>
</div>
    
<div className='header2'>
<div className='div-link'>
        <Link to='/about-us'>
    <button>

    <a>
        GET TO KNOW US
    </a>
</button>
    </Link>
</div>


<div className='div-link'> 
    <button>
        <Link to='/workout'>
            <a>
                UPCOMING WORKOUTS
            </a>
        </Link>
    </button>
</div>
        

<div className='last-link'> 
    <button>
        <Link to='/reviews'>
            <a>
                VIEW CONTENT
            </a>
        </Link>
    </button>
    <button>
        <Link to='/contact-us'>
            <a>
                 FOLLOW US
            </a>
        </Link>
    </button>
        </div>

    </div>
</div>
    )
};
export default Header;