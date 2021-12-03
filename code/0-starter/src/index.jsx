import React from "react"; // use JSX
import ReactDOM from "react-dom"; // renders inside HTML
import App from './App';

ReactDOM.render(
    // <h1>Hello, world!</h1>, // want to display
    <App />,
    document.getElementById('app') // the HTML element want to use to display
);