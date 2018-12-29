import React, {Component} from 'react';
import './App.css';

import Home from "./components/Home";
import Footer from "./components/Footer";
import ComponentWithData from "./components/ComponentWithData";

/** Simulate requester which make some request to backend/server/database
 * only for the example, fake some data */
const request = function request() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Ivan' },
                { id: 2, name: 'Gosho' },
                { id: 3, name: 'Pesho' },
                { id: 4, name: 'Tosho' },
                { id: 5, name: 'Stamat' }
            ])
        }, 3000)
    })
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <Home message='Custom Home message...'/>
                    <ComponentWithData request={request}/>
                    <Footer/>

                </header>
            </div>
        );
    }
}

export default App;
