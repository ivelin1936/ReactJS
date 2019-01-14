import React, {Component} from 'react';
import Navigation from "../common/Navigation";
import TeamComponent from "./team/TeamComponent";
import WhatWeDoComponent from "./description/WhatWeDoComponent";
import Footer from "../common/Footer";
import AboutUsInfo from "./description/AboutUsInfo";
import SecondPagesHeader from "../common/SecondPagesHeader";

export default class AboutUsPage extends Component {

    render() {
        return (
            <section>
                <Navigation {...this.props}/>
                <SecondPagesHeader title="About Us"/><br/><br/>
                <AboutUsInfo/><br/>
                <TeamComponent/><br/><br/><br/>
                <WhatWeDoComponent/><br/>
                <Footer/>
            </section>
        )
    }
}