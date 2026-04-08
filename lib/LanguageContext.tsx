'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { t, Lang } from './translations'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  tx: typeof t['EN']
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'EN',
  setLang: () => {},
  tx: t['EN'],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('EN')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'EN' || saved === 'FR') setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, tx: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
