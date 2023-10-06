import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>

        </div>
    );
};