import React, {Component} from 'react';
import '../../../styles/team.css';
import TeamPersonComponent from "./TeamPersonComponent";
import teamModel from '../../../models/teamModel';

export default class TeamComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            team: []
        }
    }

    componentDidMount() {
        teamModel.getAllTeam()
            .then(res => res.json())
            .then(res => this.setState({ isReady: true, team: res }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <h4 className="heading"><strong>Our </strong> Great Team <span></span></h4>
                <div className="row">
                    {this.state.team.map(p =>  <TeamPersonComponent key={p._id} {...p}/>)}
                </div>
            </div>
        )
    }
}