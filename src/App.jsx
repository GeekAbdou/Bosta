import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import Home from './views/Home';
import Tracking from './views/Tracking';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

const queryClient = new QueryClient();

const languages = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
  },
];

function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log('Setting page stuff');
    document.body.dir = currentLanguage.dir || 'ltr';
    document.documentElement.dir = currentLanguage.dir;
    document.title = t('App_TITLE');
  }, [currentLanguage, t]);

  return (
    <BrowserRouter>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracking" sensitive={false} element={<Tracking />} />
          <Route
            path="/tracking/:trackingNumber"
            sensitive={false}
            element={<Tracking />}
          />
        </Routes>
      </QueryClientProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
