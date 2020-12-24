export const classnames = (classes) => {
  if (!Array.isArray(classes)) return classes;
  return classes.filter((className) => !!className).join(' ');
};
