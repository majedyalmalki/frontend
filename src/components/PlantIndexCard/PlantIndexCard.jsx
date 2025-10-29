import "./styles.css";
import {Link} from "react-router";

export default function PlantIndexCard({ plant }) {

    return (
        <div>
            <Link to={`/plants/${plant.id}`}>
            <div>
                <h2>{plant.name}</h2>
                <p><small>{plant.description}</small></p>
            </div>
            </Link>
        </div>
    )
}