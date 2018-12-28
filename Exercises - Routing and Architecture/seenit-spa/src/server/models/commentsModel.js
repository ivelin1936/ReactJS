import requester from './requester';

function getAll() {
    return requester.get('appdata', 'comments', 'Kinvey');
}

function add(data) {
    return requester.post('appdata', 'comments', 'Kinvey', data);
}

function remove(id) {
    return requester.remove('appdata', `comments/${id}`, 'Kinvey')
}

export default {
    getAll,
    add,
    remove
}