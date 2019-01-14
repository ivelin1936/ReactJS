import requester from './requester';

function getAllTeam() {
    return requester.get('appdata', 'team', 'admin');
}

function add(data) {
    return requester.post('appdata', 'team', 'Kinvey', data);
}

function remove(id) {
    const endpoint = `team/${id}`;
    return requester.remove('appdata', endpoint, 'Kinvey');
}

export default {
    getAllTeam,
    add,
    remove
}