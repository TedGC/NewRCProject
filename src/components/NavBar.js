
import PostDetailPage from '../pages/PostDetail';
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
                            to="/postdetail"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Events
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Newsletter
                        </NavLink>
                    </li> */}
                </ul>
            </nav>
            <PostDetailPage />
        </header>
    );
}