export const buildLocalePath = (
  base: string,
  lang: string,
  path: string,
  search: string
) => {
  return base + 'nb' + path + search;
};

export default buildLocalePath
