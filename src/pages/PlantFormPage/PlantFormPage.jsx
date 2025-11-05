import "./styles.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import * as plantAPI from "../../utilities/plant-api";




// # ================================================================================================================= #
// #                                                  Plant Form Page                                                  #
// # ================================================================================================================= #
export default function PlantFormPage({ createPlant, editPlant, deletePlant }) {
    const initialState = { name: "", description: "" };
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const { plantId } = useParams();
    const [currPlant, setCurrPlant] = useState({});



// # ================================================================================================================= #
// #                                                     useEffect                                                     #
// # ================================================================================================================= #
    useEffect(() => {
        async function getPlantDetail() {
            const plantDetailData = await plantAPI.detail(plantId);
            setCurrPlant(plantDetailData.plant);
            setFormData(plantDetailData.plant);
        }
        if ((editPlant && plantId) || (deletePlant && plantId)) getPlantDetail();
    }, [plantId]);



// # ================================================================================================================= #
// #                                                  Reset Form Data                                                  #
// # ================================================================================================================= #
    const resetFormData = () => {
        setFormData(initialState);
        setCurrPlant({});
    };



// # ================================================================================================================= #
// #                                                    useEffect                                                      #
// # ================================================================================================================= #
    useEffect(() => {
        if (createPlant) resetFormData();
    }, [createPlant]);



// # ================================================================================================================= #
// #                                                    handleChange                                                   #
// # ================================================================================================================= #
    function handleChange(evt) {
        const newFormData = { ...formData, [evt.target.name]: evt.target.value };
        setFormData(newFormData);
    }



// # ================================================================================================================= #
// #                                                     handleSubmit                                                  #
// # ================================================================================================================= #
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const newPlant = editPlant
                ? await plantAPI.update(formData, currPlant.id)
                : await plantAPI.create(formData);
            setFormData(initialState);
            navigate(`/plants/${newPlant.id}`);
        } catch (err) {
            console.log(err);
        }
    }




// # ================================================================================================================= #
// #                                                 handleDelete                                                      #
// # ================================================================================================================= #
    async function handleDelete(evt) {
        evt.preventDefault();
        const response = await plantAPI.deletePlant(currPlant.id);
        if (response.success) {
            setFormData(initialState);
            navigate("/plants");
        }
    }

    if (deletePlant && !currPlant) return <h1>Loading...</h1>;

    if (deletePlant && currPlant)
        return (
            <div className="form-container delete-mode">
                <div className="delete-card">
                    <h1>Delete Plant?</h1>
                    <p>Are you sure you want to delete <strong>{currPlant.name}</strong>?</p>
                    <div className="delete-actions">
                        <Link to={`/plants/${currPlant.id}`} className="btn cancel">Cancel</Link>
                        <button type="button" onClick={handleDelete} className="btn delete">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );

    if (editPlant && !currPlant) return <h1>Loading...</h1>;

    if (editPlant || createPlant)
        return (
            <div className="form-container">
                <form onSubmit={handleSubmit} className="plant-form">
                    <h1>{editPlant ? "Edit Plant" : "Add New Plant"}</h1>

                    {!editPlant && (
                        <div className="form-group">
                            <label htmlFor="id_name">Name</label>
                            <input
                                value={formData.name}
                                type="text"
                                name="name"
                                maxLength="100"
                                required
                                id="id_name"
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="id_description">Description</label>
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

                    <button type="submit" className="btn primary">Submit</button>
                </form>
            </div>
        );
}
