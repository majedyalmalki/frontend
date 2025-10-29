import "./styles.css"
import { Link } from "react-router";

export default function Navbar() {
    return (
        <>
            <li><Link to="/plants">All Plants</Link></li>
            <li><Link to="/plants/new">Add new plant</Link></li>
            <li><Link to="/about">About</Link></li>
        </>
    )
}