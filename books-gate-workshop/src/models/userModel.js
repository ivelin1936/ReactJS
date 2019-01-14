import requester from './requester';

function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authtoken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);

    const cart = { products: [] };
    localStorage.setItem('cart', JSON.stringify(cart));

    if (userInfo._kmd.roles) {
        const roleId = userInfo._kmd.roles[0].roleId;
        role(roleId);
    }
}

function role(roleId) {
    requester.getRole(roleId)
        .then(res => res.json())
        .then(res => {
            sessionStorage.setItem('role', res.name);
        })
        .catch(err => console.log(err));
}

// user/login-logout
function login(data) {
    let userData = {
        username: data.username,
        password: data.password
    };

    return requester.post('user', 'login', 'basic', userData);
}

// user/register
function register(data) {
    let userData = {
        username: data.username,
        password: data.password,
        email: data.email
    };

    return requester.post('user', '', 'basic', userData);
}

// user/logout
function logout() {
    let logoutData = {
        authtoken: sessionStorage.getItem('authtoken')
    };

    return requester.post('user', '_logout', 'kinvey', logoutData);
}

// get all users
function getUsers() {
    return requester.get('user', '', 'kinvey');
}

export default {
    login,
    register,
    saveSession,
    logout,
    getUsers
}