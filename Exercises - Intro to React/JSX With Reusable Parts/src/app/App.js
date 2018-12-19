import React from 'react';
import './style/app.css';
import ContactList from './resources/contacts.json';
import rerender from '../index';

let contactIndex = 0;

const showContact = (data, currentIndex) => (
    <div className="contact" key={data.email} data-id="id" onClick={e => selectDetailsContact(currentIndex, e)}>
        <span className="avatar small">&#9787;</span>
        <span className="title">{data.firstName} {data.lastName}</span>
    </div>
);

const contactDetails = (data) => (
    <div className="content">
        <div className="info">
            <div className="col">
                <span className="avatar">&#9787;</span>
            </div>
            <div className="col">
                <span className="name">{data.firstName}</span>
                <span className="name">{data.lastName}</span>
            </div>
        </div>
        <div className="info">
            <span className="info-line">&phone; {data.phone}</span>
            <span className="info-line">&#9993; {data.email}</span>
        </div>
    </div>
);


const selectDetailsContact = (index) => {
    contactIndex = index;
    rerender(App(), document.getElementById('root'))
};

const renderList = () => {
    const finalList = [];
    for (let contact of ContactList) {
        finalList.push(showContact(contact, finalList.length));
    }
    return finalList;
};

const App = () => (
    <div className="container">
        <header>&#9993; Contact Book</header>
        <div id="book">
            <div id="list">
                <h1>Contacts</h1>
                <div className="content">
                    {/*{ContactList.map(showContact)}*/}
                    {renderList()}
                </div>
            </div>
            <div id="details">
                <h1>Details</h1>
                {contactDetails(ContactList[contactIndex])}
            </div>
        </div>
        <footer>Contact Book SPA &copy; 2017</footer>
    </div>
);

export default App;
