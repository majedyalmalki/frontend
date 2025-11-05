import "./styles.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import * as plantAPI from "../../utilities/plant-api";
import plantImg from "../../assets/images/plantImg.svg";
import PhotoForm from "../../components/Forms/PhotoForm/PhotoForm";
import ReminderForm from "../../components/Forms/ReminderForm/ReminderForm";
import DisplayPlantLocations from "../../components/Forms/DisplayPlantLocations/DisplayPlantLocations";



// # ================================================================================================================= #
// #                                             Plant Detail Page                                                     #
// # ================================================================================================================= #
export default function PlantDetailPage() {
    const [plantDetail, setPlantDetail] = useState(null);
    const [reminders, setReminders] = useState([]);
    const { plantId } = useParams();
    const [locationsPlantHas, setLocationsPlantHas] = useState([]);
    const [locationsPlantDoesNotHave, setLocationsPlantDoesNotHave] = useState([]);



// # ================================================================================================================= #
// #                                                  useEffect                                                        #
// # ================================================================================================================= #
    useEffect(() => {
        const fetchData = async () => {
            const plantDetailData = await plantAPI.detail(plantId);
            setPlantDetail(plantDetailData.plant);

            const reminderData = await plantAPI.getReminders(plantId);
            setReminders(reminderData);

            const { locationsPlantHas, locationsPlantDoesNotHave } = await plantAPI.detail(plantId);
            setLocationsPlantHas(locationsPlantHas);
            setLocationsPlantDoesNotHave(locationsPlantDoesNotHave);
        };

        if (plantId) fetchData();
    }, [plantId]);



// # ================================================================================================================= #
// #                                                 Add Photo                                                         #
// # ================================================================================================================= #
    async function addPhoto(formData) {
        try {
            const updatedPlant = await plantAPI.createPhoto(plantId, formData);
            setPlantDetail(updatedPlant);
        } catch (err) {
            console.log(err);
            setPlantDetail({ ...plantDetail });
        }
    }



// # ================================================================================================================= #
// #                                                  Add Reminder                                                     #
// # ================================================================================================================= #
    const handleReminderAdded = async () => {
        const updatedPlantDetail = await plantAPI.detail(plantId);
        setPlantDetail(updatedPlantDetail);

        const reminderData = await plantAPI.getReminders(plantId);
        setReminders(reminderData);
    };




// # ================================================================================================================= #
// #                                                  Delete Reminder                                                  #
// # ================================================================================================================= #
    const handleDeleteReminder = async (reminderId) => {
        try {
            await plantAPI.deleteReminder(plantId, reminderId);
            setReminders((reminders) =>
                reminders.filter((reminder) => reminder.id !== reminderId)
            );
        } catch (err) {
            console.error("Error deleting reminder:", err);
        }
    };



// # ================================================================================================================= #
// #                                                  Add Location                                                     #
// # ================================================================================================================= #
    async function handleAddLocation(evt, locationId) {
        try {
            evt.preventDefault()
            const { locationsPlantHas, locationsPlantDoesNotHave } = await plantAPI.addLocationToPlant(plantDetail.id, locationId);
            setLocationsPlantHas(locationsPlantHas);
            setLocationsPlantDoesNotHave(locationsPlantDoesNotHave);
        } catch (err) {
            console.log(err)
        }
    }




// # ================================================================================================================= #
// #                                                  Remove Location                                                  #
// # ================================================================================================================= #
    async function handleRemoveLocation(evt, locationId) {
        try {
            evt.preventDefault()
            const { locationsPlantHas, locationsPlantDoesNotHave } = await plantAPI.removeLocationToPlant(plantDetail.id, locationId);
            setLocationsPlantHas(locationsPlantHas);
            setLocationsPlantDoesNotHave(locationsPlantDoesNotHave);
        } catch (err) {
            console.log(err)
        }
    }

    const plantLocations = locationsPlantHas.map(location => (
        <DisplayPlantLocations key={location.id} location={location} submitFunction={handleRemoveLocation} formAction="Remove" />
    ))

    const availableLocations = locationsPlantDoesNotHave.map(location => (
        <DisplayPlantLocations key={location.id} location={location} submitFunction={handleAddLocation} formAction="Add" />
    ))


    if (!plantDetail) return <h3>Your plant details will display soon</h3>;

    return (
        <div className="plant-detail-container">
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

            <div>
                <h1>{plantDetail.name}</h1>
                <p>{plantDetail.description}</p>
            </div>

            <div className="detail-actions">
                <Link to={`/plants/edit/${plantDetail.id}`}>Edit</Link>
                <Link to={`/plants/confirm_delete/${plantDetail.id}`}>Delete</Link>
            </div>

            <section>
                <PhotoForm plant={plantDetail} addPhoto={addPhoto} />
            </section>

            <section>
                <h2>Add Reminder</h2>
                <ReminderForm
                    plantId={plantId}
                    onReminderAdded={handleReminderAdded}
                />

                <h2>Reminders</h2>
                {reminders.length > 0 ? (
                    <div className="reminders-container">
                        {reminders.map((reminder) => (
                            <div key={reminder.id}>
                                <p>{reminder.title}</p>
                                <p>
                                    {new Date(reminder.date_time).toLocaleString("en-US", {
                                        timeZone: "Asia/Riyadh",
                                    })}
                                </p>
                                <button
                                    onClick={() => handleDeleteReminder(reminder.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No reminders found.</p>
                )}
            </section>
            <section>
					<div className="subsection-title">
						<h2>Locations</h2>
					</div>
					<h3>{ plantDetail.name }'s Locations</h3>
					<div>
						{ locationsPlantHas.length > 0
							? plantLocations 
							: <p>{plantDetail.name} does not have any locations!</p>
						}
					</div>
					<h3>Available Locations</h3>
					<div>
						{ availableLocations.length > 0
							? availableLocations
							: <p>{plantDetail.name} already has all the available locations 📍</p>
						}
					</div>
				</section>
        </div>
    );
}