const BASE_URL = '/api';
function request(url, params, method = 'GET',blob) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let fetchUrl = `${BASE_URL}${url}`;
    if (method === 'GET' && params) {
        fetchUrl += '?' + new URLSearchParams(params).toString();
    } else {
        options.body = JSON.stringify(params);
    }
    return fetch(fetchUrl, options).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        if (blob) {
            return response.blob();
        }
        return response.json();
    });
}

export default request;