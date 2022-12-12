import { login, logout } from '../Firebase';

function Nav({ user }) {

return(
    <section>
        { 
            user ? 
            <>
            <div className='user'>
            Welcome, {user.displayName}
            </div>
        <div className='logs' onClick={logout}  >
            LOGOUT
        </div>
            </>
        :
        <div className='logs' onClick={login}  >
            LOGIN
        </div>

        }
    </section>
    );
}


export default Nav;