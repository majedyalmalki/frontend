import { useState } from "react";
import { createLocation } from "../../../utilities/plant-api";
import './styles.css';

export default function LocationForm({ plantId, onLocationAdded }) {
    const [locationName, setLocationName] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await createLocation(plantId, { name: locationName });
        setLocationName("");
        onLocationAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
            <input
                type="text"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                placeholder="Add a location"
                required
            />
            </p>
            <button type="submit">Add Location</button>
        </form>
    );
}