import requester from './requester';

function getAllBooks() {
    return requester.get('appdata', 'books', 'admin');
}

function getById(bookId) {
    const endpoint = `books/${bookId}`;
    return requester.get('appdata', endpoint, 'admin');
}

function add(data) {
    return requester.post('appdata', 'books', 'Kinvey', data);
}

function remove(id) {
    const endpoint = `books/${id}`;
    return requester.remove('appdata', endpoint, 'Kinvey');
}

function edit(bookId, data) {
    const endpoint = `books/${bookId}`;
    return requester.update('appdata', endpoint, 'admin', data);
}

export default {
    getAllBooks,
    getById,
    add,
    remove,
    edit
}