

import classes from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {


    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/post"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Post
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}