export const generateVideoSeen = (str) => {
  let amount = str?.split(' x ')[0].replaceAll('.', '');
  let numberAmount = Number(amount);
  if (amount.length >= 7) {
    amount = (Math.round(numberAmount / 100000))/10 + ' jt x ditonton';
    return amount;
  } else if (amount.length >= 4) {
    amount = (Math.round(numberAmount / 100))/10 + ' rb x ditonton';
    return amount;
  }
  return str;
};