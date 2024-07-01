export default function cleanSet(set, startString) {
  // Check if set is not an instance of Set or if startString is not a string
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  // Initialize an empty array to hold matching parts
  const parts = [];

  // Iterate through each value in the set
  for (const value of set.values()) {
    // Check if value is a string and starts with startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Get the substring of the value that follows startString
      const valueSubStr = value.substring(startString.length);

      // Check if valueSubStr is not empty and different from the original value
      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }

  // Join the parts with '-' and return the result
  return parts.join('-');
}
