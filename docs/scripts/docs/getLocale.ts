const getLocale = (locale: string, defaultLocale: string) => {
  const map: Record<string, string> = {
    zh: 'zh-CN',
    en: 'en-US',
  };

  if (map[locale]) {
    return map[locale];
  }

  if (locale && /[a-z]{2}-[A-Z]{2}/.test(locale)) {
    return locale;
  }

  return defaultLocale;
};

export default getLocale;
