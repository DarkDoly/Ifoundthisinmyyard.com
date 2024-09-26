import { Link } from 'react-router-dom';

function NavBar() {
    return <nav className='navbar bg-body-tertiary'>
        <div className='container'>
            <Link to={'/'} className='navbar-brand'>Critter Watch</Link>
        </div>
    </nav>
}

export default NavBar;