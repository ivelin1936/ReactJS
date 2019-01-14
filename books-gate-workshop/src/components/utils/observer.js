const subscriptions = {
    'loginUser': [],
    'notification': [],
    'deleteBooks': []
};

export default {
    events: {
        loginUser: 'loginUser',
        notification: 'notification',
        deleteBooks: 'deleteBooks'
    },
    subscribe: (eventName, fn) =>
        subscriptions[eventName].push(fn),
    trigger: (eventName, data) =>
        subscriptions[eventName].forEach(fn => fn(data))
}