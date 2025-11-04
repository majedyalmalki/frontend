import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router";
import * as locationAPI from "../../../utilities/location-api";

export default function LocationForm({ createLocation, editLocation, deleteLocation }) {
    const initialState = { name: "" };
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const { id } = useParams();
    const [currLocation, setCurrLocation] = useState(null);

    useEffect(() => {
        async function getLocationDetail() {
            const locationDetailData = await locationAPI.detail(id);
            setCurrLocation(locationDetailData);
            setFormData(locationDetailData);
        }
        if ((editLocation && id) || (deleteLocation && id)) getLocationDetail();
    }, [id]);

    function handleChange(evt) {
        const newFormData = { ...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            const newLocation = editLocation
                ? await locationAPI.update(formData, currLocation.id)
                : await locationAPI.create(formData);
            setFormData(initialState);
            navigate(`/locations/${newLocation.id}`);
        } catch (err) {
            console.log("Error creating new location: ", err);
        }
    }

    async function handleDelete(evt) {
        evt.preventDefault();
        const res = await locationAPI.deleteLocation(currLocation.id);
        if (res?.success) {
            navigate("/locations");
        } else {
            console.log(res);
            alert("There was an error deleting the location - please contact admin.");
        }
    }

    if (deleteLocation && !currLocation) return <h1>Loading...</h1>;
    if (deleteLocation && currLocation) {
        return (
            <div className="form-container delete-mode">
                <h1>Delete Location?</h1>
                <h2>Are you sure you want to delete {currLocation.name}?</h2>
                <form onSubmit={handleDelete}>
                    <Link to={`/locations/${currLocation.id}`} className="btn secondary">Cancel</Link>
                    <button type="submit" className="btn danger">Yes - Delete!</button>
                </form>
            </div>
        );
    }

    if (editLocation && !currLocation) return <h1>Loading...</h1>;

    if (editLocation || createLocation) {
        return (
            <div className="form-container">
                <h1>{editLocation ? "Edit Location" : "Add New Location"}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="id_name">Name:</label>
                        <input
                            value={formData.name}
                            type="text"
                            name="name"
                            maxLength="50"
                            required
                            id="id_name"
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn primary">Submit!</button>
                </form>
            </div>
        );
    }

    return null;
}