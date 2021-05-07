export const isSomeUndefined = (...params) =>
  params.reduce(
    (isUndefined, param) => param === undefined || isUndefined,
    false,
  );

export const isNumber = (value) => {
  const valueNumber = +value;
  return typeof valueNumber === 'number' && !isNaN(valueNumber);
};
