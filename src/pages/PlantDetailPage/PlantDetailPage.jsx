import "./styles.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import * as plantAPI from "../../utilities/plant-api";
import plantImg from "../../assets/images/plantImg.svg";
import PhotoForm from "../../components/Forms/PhotoForm/PhotoForm";

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


    async function addPhoto(formData) {
        try {
            const updatedPlant = await plantAPI.createPhoto(plantId, formData);
            setPlantDetail(updatedPlant);
        } catch (err) {
            console.log(err);
            setPlantDetail({ ...plantDetail })
        }
    }


    if (!plantDetail) return <h3>Your plant details will display soon</h3>;
    return (
        <>
            <div>
                <div>
                    {plantDetail.photo?.url ? (
                        <img
                            src={plantDetail.photo.url}
                            alt={`A photo of ${plantDetail.name}`}
                            className="usr-img"
                        />
                    ) : (
                        <img
                            src={plantImg}
                            alt="Default Plant image"
                            className="usr-img"
                        />
                    )}
                </div>
            </div>
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
            <section>
                <PhotoForm plant={plantDetail} addPhoto={addPhoto} />
            </section>
        </>
    )
}