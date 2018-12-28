import requester from './requester';

function getPosts() {
    return requester.get('appdata', 'posts', 'Kinvey');
}

function add(data) {
    return requester.post('appdata', 'posts', 'Kinvey', data);
}

function edit(data, id) {
    return requester.update('appdata', `posts/${id}`, 'Kinvey', data);
}

function getById(id) {
    return requester.get('appdata', `posts/${id}`, 'Kinvey');
}

function remove(id) {
    return requester.remove('appdata', `posts/${id}`, 'Kinvey');
}

export default {
    getPosts,
    add,
    edit,
    getById,
    remove
}