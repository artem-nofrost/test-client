import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { fade_in, fly } from './style/animations';

const Global = createGlobalStyle`
    html {
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        animation: ${fade_in} 1.5s ease 1;
    }

    body {
        margin: 0;
        padding: 0;
        color: rgb(0, 0, 0);
        box-sizing: border-box;
    }

    a {
        color: #3b2a85 !important;
        text-decoration: none !important;
        
    }

    a:hover {
        text-decoration: underline !important;
    }

    input {
        border-color: #c5c5c5 !important;
    }

    input:focus {
        border-color: #c5c5c5 !important;
        box-shadow: 0 0 0 #80bdff00 !important;
    }

    button:focus {
        box-shadow: 0 0 0 #80bdff00 !important;
    }


    .preload {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        
    }

    .preload img {
        max-width: 70px;
        max-height: 70px;
        animation: ${fly} 0.2s infinite linear;
    }
`;

ReactDOM.render(
    <Router>
        <Global />
        <App />
    </Router>,
    document.getElementById('site-wrap'),
);
