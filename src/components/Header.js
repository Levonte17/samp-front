import{Link} from 'react-router-dom';


function Header(props) {
    return(
        <div className='header'> 
<h1> 
        WELCOME TO S.A.M.P. FITNESS
        <br/>
        <a>
            Your Dreams Wont Work Unless You Do
        </a>
</h1>

    <div className='header2'>
<button>
    <Link to='About'>
        <div className='div-link'>
        <a>
            GET TO KNOW US
        </a>
        </div>
    </Link>
</button>
            <br/>
<button>
    <Link to='Wdetail'>
        <div className='div-link'> 
        <a>
            UPCOMING WORKOUTS
        </a>
</div>
    </Link>
</button>
        <br/>
<button>
    <Link to='Contact'>
        <div className='div-link'> 
            <a>
                QUESTIONS FOR US
            </a>
        </div>
    </Link>
</button>

<button>
    <Link to='Contact'>
        <div className='div-link'> 
            <a>
                 FOLLOW US
            </a>
        </div>
    </Link>
</button>

    </div>
</div>
    )
};
export default Header;