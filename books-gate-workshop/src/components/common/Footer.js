import React, {Component} from 'react';

export default class Footer extends Component {

    render() {
        return (
            <footer className="py-5 bg-black">
                <div className="container">
                    <p className="m-0 text-center text-white small">Copyright &copy; Book's Gate 2019</p>
                    <p className="m-0 text-center text-white small">Created by Ivelin Dimitrov</p>
                </div>
            </footer>
        )
    }
}