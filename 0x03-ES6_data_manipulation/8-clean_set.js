export default function cleanSet(set, startString) {
  if (!startString) return '';

  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      if (result) result += '-';
      result += value.slice(startString.length);
    }
  }

  return result;
}
