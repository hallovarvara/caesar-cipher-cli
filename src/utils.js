export const isSomeUndefined = (...params) =>
  params.reduce(
    (isUndefined, param) => param === undefined || isUndefined,
    false,
  );
