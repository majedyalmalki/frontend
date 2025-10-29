// import "./styles.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import * as plantAPI from "../../utilities/plant-api";

export default function PlantDetailPage() {
    const [plantDetail, setPlantDetail] = useState(null);
    const { plantId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const plantDetailData = await plantAPI.detail(plantId);
            setPlantDetail(plantDetailData);
        };

        if (plantId) fetchData();
    }, [plantId]);


    if (!plantDetail) return <h3>Your plant details will display soon</h3>;
    return (
        <>
            <div>
                <h1>{plantDetail.name}</h1>
                <p>{plantDetail.description}</p>
            </div>

            <div>
                <Link to={`/plants/edit/${plantDetail.id}`}>
                    Edit
                </Link>
                <Link to={`/plants/confirm_delete/${plantDetail.id}`}>
                    Delete
                </Link>
            </div>
        </>
    )
}