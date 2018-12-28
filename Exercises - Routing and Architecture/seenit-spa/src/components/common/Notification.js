import React, {Component} from 'react';
import observer from "../utils/observer";
import '../../styles/notifications.css'

const DEFAULT_STATE = {
    success: null,
    error: null,
    loading: null
};

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
        observer.subscribe(observer.events.notification, this.showNotification)
    }

    showNotification = data => {
        const message = data.message;
        const type = data.type;

        this.setState({ [type]: message });
    };

    hideNotification = event => this.setState(DEFAULT_STATE);

    render() {
        let notificationId;
        let message;
        if (this.state.success) {
            notificationId = "infoBox";
            message = this.state.success;
        } else if (this.state.error) {
            notificationId = "errorBox";
            message = this.state.error;
        } else if (this.state.loading) {
            notificationId = "loadingBox";
            message = this.state.loading;
        }

        setInterval(this.hideNotification, 3000);

        return (
            <div id="notifications">
                <div id={notificationId} className="notification">
                    <span>{message}</span>
                </div>
            </div>
        )
    }
}