import React, {Component} from 'react';

export default class TeamPersonComponent extends Component {

    render() {
        return (
            <div className="col-lg-4">
                <div className="our-team-main">

                    <div className="team-front">
                        <img src={this.props.img} className="img-fluid" alt="https://carwad.net/sites/default/files/team-building-clipart-140968-4004000.jpg?text=Dilip"/>
                        <h3>{this.props.name}</h3>
                        <p>{this.props.job_title}</p>
                    </div>

                    <div className="team-back">
                        <span>{this.props.description}</span>
                    </div>

                </div>
            </div>
        )
    }
}