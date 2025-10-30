import "./styles.css"
import { Link } from "react-router";


export default function Navbar() {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet" />
                    <div className="Nav">
                        <ul>
                            <li><Link className="aNav" to="/plants">All Plants</Link></li>
                            <li><Link className="aNav" to="/plants/new">Add new plant</Link></li>
                            <li><Link className="aNav" to="/about">About</Link></li>
                        </ul>
                    </div>
                </>
                )
}