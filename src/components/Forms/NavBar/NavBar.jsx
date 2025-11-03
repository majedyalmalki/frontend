import "./styles.css"
import { useNavigate, Link } from "react-router";
import * as usersAPI from "../../../utilities/users-api";


export default function NavBar({ user, setUser }) {
    const navigate = useNavigate();

    function handleLogout() {
        usersAPI.logout()
        setUser(null);
        navigate("/")
    }
    if (user) {
        return (
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet" />

                <header className="navbar">
                    <div className="navbar-container">
                        <Link to="/home" className="navbar-logo">Logo</Link>

                        <nav className="navbar-links">
                            <Link className="nav-item" to="/plants">All Plants</Link>
                            <Link className="nav-item" to="/plants/new">Add new plant</Link>
                            <Link className="nav-item" to="/about">About</Link>
                            <form className="nav-item" onSubmit={handleLogout}>
                                <button className="nav-item" type="submit">Log out</button>
                            </form>
                        </nav>
                    </div>
                </header>
            </>
        )
    }

    if (!user)
        return (
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet" />

                <header className="navbar">
                    <div className="navbar-container">
                        <Link to="/home" className="navbar-logo">Logo</Link>
                        <nav className="navbar-links">
                            <Link className="nav-item" to="/register">SignUp</Link>
                            <Link className="nav-item" to="/login">Login</Link>
                            <Link className="nav-item" to="/about">About</Link>
                        </nav>
                    </div>
                </header >
            </>
        )
}