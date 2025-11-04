import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import * as locationAPI from "../../utilities/location-api";
import "./styles.css";

export default function LocationDetailPage() {
    const [locationDetail, setLocationDetail] = useState(null);
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
        if (id) getLocationDetail();
    }, [id]);

    if (!locationDetail)
        return <h1 className="loading-message">Loading location details...</h1>;

    return (
        <main className="location-detail-page">
            <section className="location-detail-card">
                <h1>{locationDetail.name}</h1>

                {locationDetail.description && (
                    <p className="location-description">{locationDetail.description}</p>
                )}

                <div className="location-actions">
                    <Link to={`/locations/edit/${locationDetail.id}`} className="btn edit">
                        Edit Location ✏️
                    </Link>
                    <Link
                        to={`/locations/confirm_delete/${locationDetail.id}`}
                        className="btn delete"
                    >
                        Delete Location 🗑️
                    </Link>
                </div>
            </section>
        </main>
    );
}
