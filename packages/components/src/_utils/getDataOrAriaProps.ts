const getDataOrAriaProps = (props: Record<string, any>) => {
  return Object.entries(props).reduce((result, [key, value]) => {
    if (key.indexOf('data-') === 0 || key === 'role' || key.indexOf('aria-') === 0) {
      result[key] = value;
    }

    return result;
  }, {} as Record<string, any>);
};

export default getDataOrAriaProps;
