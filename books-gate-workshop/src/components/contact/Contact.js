import React, {Component} from 'react';
import '../../styles/contact-form.css';
import ContactFormComponent from "./ContactFormComponent";

export default class Contact extends Component {

    render() {
        return (
            <div className="container animated fadeIn">
                <br/>
                <h2>You can find us on Google Maps and visit our office, Or you can pass us a message and we will contact you</h2>
                <br/>
                <div className="row">
                    <div className="col-sm-12" id="parent">
                        <div className="col-sm-6">
                            <iframe title="some-unique-title"
                                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ02KhEaTRrBQRyCyNNWZq3x0&key=AIzaSyAf64FepFyUGZd3WFWhZzisswVx2K37RFY"
                                allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>

                <br/><br/>
                <h2>Contact Form</h2>
                <div className="row" id="contactForm">
                    <div className="col-sm-12" id="parent">
                        <ContactFormComponent/>
                    </div>
                </div>

                <div className="container second-portion">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="icon">
                                    <div className="image"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                                    <div className="info">
                                        <h3 className="title">MAIL & WEBSITE</h3>
                                        <p>
                                            <i className="fa fa-envelope" aria-hidden="true"></i> book-gate@gmail.com
                                            <br/>
                                            <br/>
                                            <i className="fa fa-globe" aria-hidden="true"></i> ivelin1936.github.io
                                        </p>

                                    </div>
                                </div>
                                <div className="space"></div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="icon">
                                    <div className="image"><i className="fa fa-mobile" aria-hidden="true"></i></div>
                                    <div className="info">
                                        <h3 className="title">CONTACT</h3>
                                        <p>
                                            <i className="fa fa-mobile" aria-hidden="true"></i> (+91)-9624XXXXX
                                            <br/>
                                            <br/>
                                            <i className="fa fa-mobile" aria-hidden="true"></i> (+91)-756706XXXX
                                        </p>
                                    </div>
                                </div>
                                <div className="space"></div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="icon">
                                    <div className="image"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                                    <div className="info">
                                        <h3 className="title">ADDRESS</h3>
                                        <p>
                                            <i className="fa fa-map-marker" aria-hidden="true"></i> 15/3 Junction Plot
                                            "Shree Krishna Krupa", Rajkot - 360001.
                                        </p>
                                    </div>
                                </div>
                                <div className="space"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}