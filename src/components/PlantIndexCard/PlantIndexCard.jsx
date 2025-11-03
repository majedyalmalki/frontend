import "./styles.css";
import { Link } from "react-router";
import plantImg from "../../assets/images/plantImg.svg";

export default function PlantIndexCard({ plant }) {

    return (
        <div className="plant-card">
            <Link to={`/plants/${plant.id}`}>
                <div className="IndexCard">
                    {plant.photo?.url
                        ? <img  src={plant.photo.url} alt={`A photo of ${plant.name}`} className="usr-img" />
                        : <img  src={plantImg} alt="Default plant img" className="usr-img" />
                    }
                    <h2>{plant.name}</h2>
                    <p><small>{plant.description}</small></p>
                </div>
            </Link>
        </div>
    )
}