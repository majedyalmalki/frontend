
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import * as locationAPI from "../../utilities/location-api";

export default function LocationDetailPage() {
    const [locationDetail, setLocationDetail] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        async function getLocationDetail() {
            try {
                const locationData = await locationAPI.detail(id);
                setLocationDetail(locationData);
            } catch (err) {
                console.log(err);
            }
        }
        if (id) getLocationDetail()
    }, [id])


    if (!locationDetail) return <h1>Location Detail Coming Soon!</h1>
    return (<>
            <div>
                <h2>{locationDetail.name}</h2>
            </div>
        <div className="toy-actions">
            <Link to={`/locations/edit/${locationDetail.id}`}>Edit</Link>
            <Link to={`/locations/confirm_delete/${locationDetail.id}`}>Delete</Link>
        </div>
    </>)
}