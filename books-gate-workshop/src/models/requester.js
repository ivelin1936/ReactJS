const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_BkhpyQR-N";
const kinveyAppSecret = "4f4c958a830948719fe7cd33e99201a1";
const kinveyAdmin = 'Basic a2lkX0JraHB5UVItTjoyNmM1YzQ5OTJlMTc0ZDM1OTY3ZjY0MjI3YmQ4MTBjYQ==';

// Creates the authentication header
function makeAuth(type) {
    return type === 'basic'
        ? 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
        : type === 'admin' ? kinveyAdmin
        : 'Kinvey ' + sessionStorage.getItem('authtoken');
}

// Creates request object to kinvey (for fetcher)
function makeRequest(method, auth) {
    return {
        method,
        headers: {
            'Authorization': makeAuth(auth),
            'Content-Type': 'application/json'
        }
    };
}

// Create url (for fetcher)
function buildUrl(module, endpoint) {
    return (kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint);
}

// Function to return GET promise
function get(module, endpoint, auth) {
    const url = buildUrl(module, endpoint);
    const request = makeRequest('GET', auth);

    return fetch(url, request);
}

// Function to return GET promise for roles
function getRole(roleId) {
    const url = buildUrl('roles', roleId);
    const request = {
        method: 'GET',
        headers: {
            'Authorization': 'Basic a2lkX0JraHB5UVItTjoyNmM1YzQ5OTJlMTc0ZDM1OTY3ZjY0MjI3YmQ4MTBjYQ==',
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, request);
}

// Function to return POST promise
function post(module, endpoint, auth, data) {
    const url = buildUrl(module, endpoint);
    let req = makeRequest('POST', auth);
    req.body = JSON.stringify(data);

    return fetch(url, req);
}

// Function to return PUT promise
function update(module, endpoint, auth, data) {
    const url = buildUrl(module, endpoint);
    let req = makeRequest('PUT', auth);
    req.body = JSON.stringify(data);

    return fetch(url, req);
}

// Function to return DELETE promise
function remove(module, endpoint, auth) {
    const url = buildUrl(module, endpoint);
    const request = makeRequest('DELETE', auth);

    return fetch(url, request);
}

export default {
    get,
    post,
    update,
    remove,
    getRole
}