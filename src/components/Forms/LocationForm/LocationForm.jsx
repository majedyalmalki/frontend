import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router";
import * as locationAPI from "../../../utilities/location-api";
import "./styles.css";

export default function LocationForm({ createLocation, editLocation, deleteLocation }) {
    const initialState = { name: "" };
    const [formData, setFormData] = useState(initialState);
    const [currLocation, setCurrLocation] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function getLocationDetail() {
            try {
                const locationDetailData = await locationAPI.detail(id);
                setCurrLocation(locationDetailData);
                setFormData(locationDetailData);
            } catch (err) {
                console.log(err);
            }
        }
        if ((editLocation && id) || (deleteLocation && id)) getLocationDetail();
    }, [id]);

    function handleChange(evt) {
        const newFormData = { ...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const newLocation = editLocation
                ? await locationAPI.update(formData, currLocation.id)
                : await locationAPI.create(formData);
            setFormData(initialState);
            navigate(`/locations/${newLocation.id}`);
        } catch (err) {
            console.log("Error creating or editing location:", err);
        }
    }

    async function handleDelete(evt) {
        evt.preventDefault();
        const res = await locationAPI.deleteLocation(currLocation.id);
        if (res?.success) {
            navigate("/locations");
        } else {
            alert("There was an error deleting this location.");
        }
    }

    if (deleteLocation && !currLocation) return <h1 className="loading-message">Loading...</h1>;
    if (deleteLocation && currLocation)
        return (
            <main className="form-page">
                <section className="form-card delete-mode">
                    <h1>Delete Location?</h1>
                    <p className="delete-warning">
                        Are you sure you want to permanently delete{" "}
                        <strong>{currLocation.name}</strong>?
                    </p>
                    <form onSubmit={handleDelete} className="form-actions">
                        <Link to={`/locations/${currLocation.id}`} className="btn secondary">
                            Cancel
                        </Link>
                        <button type="submit" className="btn danger">
                            Yes, Delete
                        </button>
                    </form>
                </section>
            </main>
        );

    if ((editLocation && !currLocation) || (createLocation && !formData))
        return <h1 className="loading-message">Loading...</h1>;

    if (editLocation || createLocation)
        return (
            <main className="form-page">
                <section className="form-card">
                    <h1>{editLocation ? "Edit Location" : "Add New Location"}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="id_name">Name</label>
                            <input
                                value={formData.name}
                                type="text"
                                name="name"
                                id="id_name"
                                required
                                maxLength="50"
                                placeholder="Enter location name"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn primary">
                                {editLocation ? "Save Changes" : "Add Location"}
                            </button>
                            <Link to="/locations" className="btn secondary">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </section>
            </main>
        );

    return null;
}
