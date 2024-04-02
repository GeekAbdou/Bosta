import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
