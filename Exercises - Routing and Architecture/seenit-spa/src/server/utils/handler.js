import observer from "../../components/utils/observer";

// $(document).on({
//     ajaxStart: () => $("#loadingBox").show(),
//     ajaxStop: () => $('#loadingBox').fadeOut()
// });

function showInfo(message) {
    const data = {
        type: 'success',
        message: message };
    observer.trigger(observer.events.notification, data);
}

function handleError(reason) {
    const data = {
        type: 'error',
        message: reason.description
        // message: reason.responseJSON.description
    };
    observer.trigger(observer.events.notification, data);
}

function loading() {
    const data = {
        type: 'loadingBox',
        message: 'Loading ...'
        // message: reason.responseJSON.description
    };
    observer.trigger(observer.events.notification, data);
}

export default {
    handleError,
    showInfo,
    loading
}