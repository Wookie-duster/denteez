import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Contact from './components/Contact';

//global scss
import './static/styles/index.scss';

class App extends Component {
    render() {
        return (
            <Contact/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));