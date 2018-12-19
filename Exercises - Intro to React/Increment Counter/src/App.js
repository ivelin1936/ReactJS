import React from 'react';
import './App.css';
import rerender from './index';

let counter = 0;

const incrementCounter = () => {
    counter++;
    rerender(Counter(), document.getElementById('root'));
};

const Counter = () => (
    <div className="App">
        <header className="App-header">
            {counter}
            <p className="App-intro">
                <button onClick={incrementCounter}>Click</button>
            </p>
        </header>
    </div>
);

export default Counter;
