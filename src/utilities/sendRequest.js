export default async function sendRequest(url, method = 'GET', payload) {
    const options = { method };

    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
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