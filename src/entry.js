import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root'

document.addEventListener("DOMContentLoaded", () => {
    const rootEl = document.getElementById('ReactRoot');
    ReactDOM.render(<Root />, rootEl);
});




