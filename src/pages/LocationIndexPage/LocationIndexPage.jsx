import { useEffect, useState } from "react";
import { Link } from "react-router";
import * as locationAPI from "../../utilities/location-api";
import "./styles.css";



// # ================================================================================================================= #
// #                                               Location Index Page                                                 #
// # ================================================================================================================= #
export default function LocationIndexPage() {
    const [allLocations, setAllLocations] = useState([]);



// # ================================================================================================================= #
// #                                                   useEffect                                                       #
// # ================================================================================================================= #
    useEffect(() => {
        async function getAllLocations() {
            try {
                const allLocationsData = await locationAPI.index();
                setAllLocations(allLocationsData);
            } catch (err) {
                console.log(err);
            }
        }
        getAllLocations();
    }, []);



    return (
        <main className="locations-page">
            <section className="locations-header">
                <h1>Your Plant Locations📍</h1>
                <p>
                    Organize your plants by where they grow best — from sunny balconies
                    to cozy corners. Manage all your plant locations here and keep track
                    of where each one thrives 🌿
                </p>
            </section>

            <section className="locations-list">
                {allLocations.length > 0 ? (
                    allLocations.map((location) => (
                        <Link
                            to={`/locations/${location.id}`}
                            key={location.id}
                            className="location-card"
                        >
                            <h2>{location.name}</h2>
                            {location.description && (
                                <p>{location.description.slice(0, 120)}...</p>
                            )}
                        </Link>
                    ))
                ) : (
                    <p className="no-data">No locations found 🌱</p>
                )}
            </section>
        </main>
    );
}
