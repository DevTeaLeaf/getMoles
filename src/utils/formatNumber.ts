const formatNumber = (value: string | number) => {
  let changedValue;

  value = String(value);

  const [integerPart, decimalPart] = value.split(".");

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const roundedDecimalPart = decimalPart
    ? parseFloat(`0.${decimalPart}`).toFixed(2).slice(2)
    : "";

  const formattedValue = roundedDecimalPart
    ? `${formattedInteger}.${roundedDecimalPart}`
    : formattedInteger;
  changedValue = formattedValue;

  return changedValue;
};

export default formatNumber;
