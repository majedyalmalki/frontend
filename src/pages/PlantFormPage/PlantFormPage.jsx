import "./styles.css"
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import * as plantAPI from "../../utilities/plant-api";

export default function PlantFormPage({ createPlant, editPlant, deletePlant }) {
    const initialState = { name: "", description: "" };
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const { plantId } = useParams();
    const [currPlant, setCurrPlant] = useState({});


    useEffect(() => {
        async function getPlantDetail() {
            const plantDetailData = await plantAPI.detail(plantId);
            setCurrPlant(plantDetailData);
            setFormData(plantDetailData);
        }
        if (editPlant && plantId || deletePlant && plantId) getPlantDetail();
    }, [plantId]);


const resetFormData = () => {
        setFormData(initialState);
        setCurrPlant({});
    };

    useEffect(() => {
        if (createPlant) {
            resetFormData();
        }
    }, [createPlant]);


    function handleChange(evt) {
        const newFormData = { ...formData, [evt.target.name]: evt.target.value }
        setFormData(newFormData);
    }


    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            const newPlant = editPlant ? await plantAPI.update(formData, currPlant.id) : await plantAPI.create(formData);
            setFormData(initialState)
            navigate(`/plants/${newPlant.id}`);
        } catch (err) {
            console.log(err)
        }
    }

    async function handleDelete(evt) {
        evt.preventDefault();
        const response = await plantAPI.deletePlant(currPlant.id)
        if (response.success) {
            setFormData(initialState)
            navigate("/plants");
        }
    }

    if (deletePlant && !currPlant) return <h1>Wait a second ...</h1>
    if (deletePlant && currPlant)

        return (
            <>
                <div>
                    <h1>Delete Plant?</h1>
                </div>
                <h2>Are you sure you want to delete {currPlant.name}?</h2>
                <form onSubmit={handleDelete}>
                    <Link to={`/plants/${currPlant.id}`}>Cancel</Link>
                    <button type="submit">Delete!</button>
                </form>
            </>)

    if (editPlant && !currPlant) return <h1>Wait a second ...</h1>
    if (editPlant || createPlant)
        return (
            <>
                <form onSubmit={handleSubmit}>
                    {(editPlant) ? <h1>Edit Plant</h1> : <h1>Add Plant</h1>}
                    <div>
                        {!editPlant && (
                            <>
                                <label htmlFor="id_name">Name:</label>
                                <input
                                    value={formData.name}
                                    type="text"
                                    name="name"
                                    maxLength="100"
                                    required
                                    id="id_name"
                                    onChange={handleChange}
                                />
                            </>
                        )}
                    </div>
                    <div>
                        <label htmlFor="id_description">Description:</label>
                        <textarea
                            value={formData.description}
                            name="description"
                            rows="4"
                            maxLength="250"
                            required
                            id="id_description"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit">
                            Submit!
                        </button>
                    </div>
                </form>
            </>
        );
}