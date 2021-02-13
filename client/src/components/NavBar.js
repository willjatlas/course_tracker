import { Link, useHistory } from "react-router-dom";
const NavBar = () => {

    return(
        <>
            <nav className="nav-bar">
                <li>
                    <Link className="nav-bar-link" to="/"> Home </Link>
                </li>
                <li>
                    <Link className="nav-bar-link" to="/courses"> Courses </Link>
                </li>


            </nav>
        </>
    )

}

export default NavBar;