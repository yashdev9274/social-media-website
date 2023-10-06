import {Link} from 'react-router-dom';
import {auth} from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

export const Navbar = () => {

    const [user] = useAuthState(auth);
    return (
        <div className = "navbar">
            <div className="links">
                
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
            </div>

            <div className="user">
                <p> {user?.displayName} </p>
                <img src ={user?.photoURL || ""} width="20" height="20"/>
            </div>

        </div>
    );
};