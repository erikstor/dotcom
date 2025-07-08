'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import es from '../locales/es/common.json';
import en from '../locales/en/common.json';

const translations = {
  es,
  en
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState('es'); // Español como predeterminado

  useEffect(() => {
    // Intentar recuperar el idioma guardado en localStorage
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && translations[savedLocale]) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale) => {
    if (translations[newLocale]) {
      setLocale(newLocale);
      localStorage.setItem('locale', newLocale);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Retorna la clave si no encuentra la traducción
      }
    }
    
    return value || key;
  };

  const value = {
    locale,
    changeLocale,
    t,
    availableLocales: Object.keys(translations)
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
} 