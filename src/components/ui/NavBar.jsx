import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const Navbar = () => {

    const {user:{name}, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {

        dispatch({ type: types.logout });

        navigate('/login', {
            replace: true
          })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        // className={((navData) => (navData.isActive) ? "nav-link active" : 'nav-link')}
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link">
                        {name}
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout } 
                        to="login"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}