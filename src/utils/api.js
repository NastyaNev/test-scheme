const config = {
    url: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
}

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((err) => Promise.reject(err));
};

export function getArray() {
    return fetch(`${config.url}/posts`, {
        headers: config.headers,
        method: 'GET'
    })
        .then(checkResponse);
}

export function getUsersNames() {
    return fetch(`${config.url}/users`, {
        headers: config.headers,
        method: 'GET'
    })
        .then(checkResponse);
}


