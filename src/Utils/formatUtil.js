export const capitalize = (string) => {
  if (!string) return '';
  const firstChar = string.charAt(0).toUpperCase();
  if (string.length === 1) return firstChar;
  return firstChar + string.substring(1);
}
