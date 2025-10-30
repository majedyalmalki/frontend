import { useState } from "react"

export default function PhotoForm({ plant, addPhoto }) {
    const initialState = { url: "", title: "" }
    const [formData, setFormData] = useState(initialState)

    function handleChange(evt) {
        const updatedFormData = { ...formData, [evt.target.name]: evt.target.value }
        setFormData(updatedFormData)
    }

    function handleSumbit(evt) {
        evt.preventDefault();
        addPhoto(formData)
        setFormData(initialState);
    }

    return (<>
        <h3>Change {plant.name}'s photo</h3>
        <form onSubmit={handleSumbit} autoComplete="off">
            <p>
                <label htmlFor="id_url">Url:</label>
                <input value={formData.url} type="text" name="url" required id="id_url" onChange={handleChange} />
            </p>
            <p>
                <label htmlFor="id_title">Title:</label>
                <input value={formData.title} type="text" name="title" maxLength="250" required id="id_title" onChange={handleChange} />
            </p>
            <button type="submit" className="btn submit">Add Photo</button>
        </form>
    </>)
}