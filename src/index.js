import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import i18next from './i18n'; // Import the i18next instance from the separate file

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

i18next;

document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>,
);
