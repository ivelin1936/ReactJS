import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class AboutUsInfo extends Component {

    render () {
        return (
            <div className="content-md container">
                <div className="row margin-b-20">
                    <div className="col-sm-6">
                        <h2>About</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-7 sm-margin-b-50">
                        <div className="margin-b-30">
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enimet minim veniam magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret tempor incididunt dolore magna consequat siad minim aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret tempor incididunt dolore magna consequat siad minim aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim enum esqudiat dolore.</p>
                    </div>
                    <div className="col-sm-4 col-sm-offset-1">
                        <Link to='/home/store' title="Store">
                            <img className="img-responsive" src="https://worshiphousemedia.s3.amazonaws.com/images/main/s/st/car/st/announcements01visitourbookstorestill.jpg" alt="Our Office"/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}