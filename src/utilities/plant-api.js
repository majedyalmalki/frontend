import sendRequest from "./sendRequest"
const baseURL = "/plants/"

export async function index() {
    return sendRequest(baseURL);
}

export async function detail(plantId){
    return sendRequest(`${baseURL}${plantId}/`);
}

export async function create(formData){
    return sendRequest(baseURL, "POST", formData);
}

export async function update(formData, plantId) {
    return sendRequest(`${baseURL}${plantId}/`, "PUT", formData)
}

export async function deletePlant(plantId) {
    return sendRequest(`${baseURL}${plantId}/`, "DELETE")
}

export async function createPhoto(plantId, formData) {
    return sendRequest(`${baseURL}${plantId}/add-photo/`, "POST", formData)
}

export async function getReminders(plantId) {
    return sendRequest(`${baseURL}${plantId}/reminders/`);
}

export async function createReminder(plantId, formData) {
    return sendRequest(`${baseURL}${plantId}/reminders/`, "POST", formData);
}

export async function deleteReminder(plantId, reminderId) {
    return sendRequest(`${baseURL}${plantId}/reminders/${reminderId}/`, "DELETE");
}