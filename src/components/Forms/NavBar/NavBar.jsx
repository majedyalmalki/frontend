import "./styles.css"
import { Link } from "react-router";


export default function Navbar() {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet" />

            <header className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">Logo</Link>

                        <nav className="navbar-links">
                            <Link className="nav-item" to="/plants">All Plants</Link>
                            <Link className="nav-item" to="/plants/new">Add new plant</Link>
                            <Link className="nav-item" to="/about">About</Link>

                        </nav>
                    </div>
            </header>
        </>
    )
}