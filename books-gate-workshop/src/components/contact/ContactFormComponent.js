import React, {Component} from 'react';

export default class ContactFormComponent extends Component {

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name"
                                   required="required"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-group">
                                <span className="input-group-addon"><span
                                    className="glyphicon glyphicon-envelope"></span></span>
                                <input type="email" className="form-control" id="email" placeholder="Enter email"
                                       required="required"/></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select id="subject" name="subject" className="form-control" required="required">
                                <option value="na" selected="">Choose One:</option>
                                <option value="service">General Customer Service</option>
                                <option value="suggestions">Suggestions</option>
                                <option value="product">Product Support</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Message</label>
                            <textarea name="message" id="message" className="form-control" rows="9" cols="25"
                                      required="required"
                                      placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">Send Message
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}