import "./styles.css"
import PlantIndexCard from "../../components/PlantIndexCard/PlantIndexCard";
import { useEffect, useState } from "react";
import * as plantAPI from "../../utilities/plant-api"

export default function PlantIndexPage() {
    const [allPlants, setAllPlants] = useState([]);

    const displayAllPlants = allPlants.map((plants, index) => (
        <PlantIndexCard key={index} plant={plants} />
    ))

    useEffect(function () {
        async function getAllPlants() {
            const allPlantData = await plantAPI.index()
            setAllPlants(allPlantData)
        }
        if (allPlants.length === 0) getAllPlants()
    }, [])


    return (
        <>
            <section>
                <h1>Plant List</h1>
            </section>


            <section>
                {displayAllPlants}
            </section>
        </>
    )
}