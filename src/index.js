import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import i18next from './i18n';
import Loader from './components/Layout/Loader';

const loadingMarkup = (
  <div className="loader-container">
    <Loader />
  </div>
);

i18next;

document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>,
);
