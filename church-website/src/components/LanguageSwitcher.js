// components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="d-flex justify-content-end justify-content-center justify-content-md-end p-3">
      {['en', 'am'].map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={`btn btn-sm me-2 rounded-pill ${
            currentLang === lang ? 'btn-primary text-white' : 'btn-outline-primary'
          }`}
          style={{ minWidth: 60 }}
          aria-pressed={currentLang === lang}
          aria-label={lang === 'en' ? 'Switch to English' : 'Switch to Amharic'}
        >
          {lang === 'en' ? 'EN' : 'አማ'}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
