import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//global scss
import './static/styles/index.scss';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));