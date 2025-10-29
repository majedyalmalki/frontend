import sendRequest from "./sendRequest"
const baseURL = "/plants/"

export async function index() {
    return sendRequest(baseURL);
}