import { Link } from "react-router"
import "./styles.css"

export default function DisplayPlantLocations({ location, submitFunction, formAction }) {
    return (
        <div>
            <div>
                <Link to={`/locations/${location.id}`}>
                    <p className="location-name">{location.name}</p>
                </Link>
            </div>
            <form onSubmit={(evt) => submitFunction(evt, location.id)}>
                <button type="submit">{formAction}</button>
            </form>
        </div>
    )
}