export const truncateText = (text) => {
  if (text.length > 55) {
    return text.substr(0, 55) + '...';
  }
  return text;
};