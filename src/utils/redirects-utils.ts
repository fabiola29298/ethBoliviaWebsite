import { localizePath } from 'astro-i18next'

import i18next from "i18next";
export const handleToggleLanguage = ({ pathname }: { pathname: string }): string => (
  localizePath(pathname, i18next.language === 'en' ? 'es' : 'en')

)

export const getCurrentPath = ({ pathname }: { pathname: string }): string => (
  localizePath(pathname, i18next.language)
)
