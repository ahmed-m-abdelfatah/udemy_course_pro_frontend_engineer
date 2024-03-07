/**
 * Slices a text string to a maximum length and appends ellipsis if necessary.
 * @param {string} txt - The input text string.
 * @param {number} [max=80] - The maximum length of the text string before truncation.
 * @returns {string} The sliced text string with ellipsis appended if necessary.
 */
export function txtSlicer(txt: string, max: number = 80): string {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
}

/**
 * Adds commas to a string representing a number for improved readability.
 * @param {string} x - The input string representing a number.
 * @returns {string} The formatted string with commas added for every three digits.
 */
export function numberWithCommas(x: number): string {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
