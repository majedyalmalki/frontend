import { useState } from 'react';
import * as plantAPI from '../../../utilities/plant-api';



// # ================================================================================================================= #
// #                                                 ReminderForm                                                      #
// # ================================================================================================================= #
const ReminderForm = ({ plantId, onReminderAdded }) => {
    const [formData, setFormData] = useState({ title: '', date_time: '' });



// # ================================================================================================================= #
// #                                                  handleChange                                                     #
// # ================================================================================================================= #
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({ ...formData, [name]: value });
    };



// # ================================================================================================================= #
// #                                                    handleSubmit                                                   #
// # ================================================================================================================= #
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (!formData.date_time) return;
        try {
            await plantAPI.createReminder(plantId, formData);
            onReminderAdded();
            setFormData({ title: '', date_time: '' });
        } catch (error) {
            console.error("Error adding reminder:", error.message);
        }
    };



    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder=""
                    required
                />
            </p>
            <p>
                <label htmlFor="date_time">Time:</label>
                <input
                    type="datetime-local"
                    id="date_time"
                    name="date_time"
                    value={formData.date_time}
                    onChange={handleChange}
                    required
                />
            </p>
            <button className='add submit' type="submit">Add Reminder</button>
        </form>
    );
};

export default ReminderForm;