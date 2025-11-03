import "./styles.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import * as plantAPI from "../../utilities/plant-api";
import plantImg from "../../assets/images/plantImg.svg";
import PhotoForm from "../../components/Forms/PhotoForm/PhotoForm";
import ReminderForm from "../../components/Forms/ReminderForm/ReminderForm";

export default function PlantDetailPage() {
    const [plantDetail, setPlantDetail] = useState(null);
    const [reminders, setReminders] = useState([]);
    const { plantId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const plantDetailData = await plantAPI.detail(plantId);
            setPlantDetail(plantDetailData);
            const reminderData = await plantAPI.getReminders(plantId);
            setReminders(reminderData);
        };

        if (plantId) fetchData();
    }, [plantId]);

    async function addPhoto(formData) {
        try {
            const updatedPlant = await plantAPI.createPhoto(plantId, formData);
            setPlantDetail(updatedPlant);
        } catch (err) {
            console.log(err);
            setPlantDetail({ ...plantDetail });
        }
    }

    const handleReminderAdded = async () => {
        const updatedPlantDetail = await plantAPI.detail(plantId);
        setPlantDetail(updatedPlantDetail);
        const reminderData = await plantAPI.getReminders(plantId);
        setReminders(reminderData);
    };

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
        </div>
    );
}
