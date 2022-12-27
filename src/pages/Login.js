import { login } from '../Firebase';

function Login(props) {
    return(

<div className='pbg'>
<div className='login'>
<button>
<div className='logs' onClick={login}  >
            LOGIN
        </div>

    LOGIN
</button>
<button>
CREATE ACCOUNT
</button>
</div>
</div>
    )
}

export default Login;