import "./styles.css";
import PlantIndexCard from "../../components/PlantIndexCard/PlantIndexCard";
import { useEffect, useState } from "react";
import * as plantAPI from "../../utilities/plant-api";
import { Link } from "react-router";




// # ================================================================================================================= #
// #                                                Plant Index Page                                                   #
// # ================================================================================================================= #
export default function PlantIndexPage() {
    const [allPlants, setAllPlants] = useState([]);

    const displayAllPlants = [...allPlants].reverse().map((plant, index) => (
        <PlantIndexCard key={index} plant={plant} />
    ));


// # ================================================================================================================= #
// #                                                   useEffect                                                       #
// # ================================================================================================================= #
    useEffect(() => {
        async function getAllPlants() {
            const allPlantData = await plantAPI.index();
            setAllPlants(allPlantData);
        }
        if (allPlants.length === 0) getAllPlants();
    }, []);

    return (
        <main className="all-plants-page">
            <section className="plants-header">
                <h1>Plant List</h1>
            </section>

            {allPlants.length > 0 ? (
                <section className="plants-grid">{displayAllPlants}</section>
            ) : (
                <div className="no-plants-container">
                    <div className="no-plants-message">No plants found 🌱</div>
                    <Link to="/plants/new" className="add-plant-btn">
                        + Add New Plant
                    </Link>
                </div>
            )}
        </main>
    );
}
