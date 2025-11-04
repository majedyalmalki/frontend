
import { useEffect, useState } from "react"
import { Link } from "react-router";
import * as locationAPI from "../../utilities/location-api";

export default function LocationIndexPage() {
    const [allLocations, setAllLocations] = useState([])

    useEffect(() => {
        async function getAllLocations() {
            try {
                const allLocationsData = await locationAPI.index();
                setAllLocations(allLocationsData);
            } catch (err) {
                console.log(err)
            }
        }
        getAllLocations()
    }, [])

    return (<>
        <section className="page-header">
            <h1>All Plant Locations</h1>
        </section>
        <section>
            {allLocations.map(location => (
                <div key={location.id}>
                    <Link to={`/locations/${location.id}`}>
                        <div>
                            <h2>{location.name}</h2>
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    </>)
}