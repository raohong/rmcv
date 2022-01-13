const isBrowser = typeof window !== 'undefined' && window.document?.createElement;

export default isBrowser;
