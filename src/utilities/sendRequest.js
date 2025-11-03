export default async function sendRequest(url, method = 'GET', payload) {
    const options = { method };
    const token = localStorage.getItem('accessToken');

    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }

    if (token) {
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }

    try {
        const res = await fetch(`http://localhost:8000${url}`, options);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        if (res.status !== 204) {
            return await res.json();
        }

        return null;
    } catch (err) {
        console.log(err, "error in send-request");
        throw err;
    }
}