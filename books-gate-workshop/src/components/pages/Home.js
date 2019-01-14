import React, {Component} from 'react';
import Navigation from "../common/Navigation";
import Header from "../common/Header";
import Footer from "../common/Footer";
import HomeBody from "./ChoiceUsSection";
import NewBooksPage from "../new-books/NewBooksPage";
import FutureBookInfo from "../books/FutureBookInfo";
import ContactTransperant from "../contact/ContactTransperant";
import WhatWeDoComponent from "../about/description/WhatWeDoComponent";

const HEADER_TITLE = "Book's Gate Heaven";
const HEADER_DESCRIPTION = "A Room Without Books Is Like A Body Without A Soul.";

export default class Home extends Component {

    render() {
        return (
            <section>
                <Navigation/>
                <Header
                    title={HEADER_TITLE}
                    description={HEADER_DESCRIPTION}
                    hasBtn="true"
                    btnText="Learn More"/>
                <NewBooksPage/>
                <FutureBookInfo/>
                <HomeBody/>
                <ContactTransperant title="Contact Us " description="Feel free to contact us" hasLink="true"/>
                <WhatWeDoComponent/>
                <Footer/>
            </section>
        )
    }
}