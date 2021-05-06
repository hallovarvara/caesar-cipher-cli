export const isSomeUndefined = (...params) =>
  params.reduce(
    (isUndefined, param) => param === undefined || isUndefined,
    false,
  );

export const isNumber = (value) => typeof value === 'number' && !isNaN(value);
