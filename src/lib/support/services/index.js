export const hasDuplicates = (array, property) => {
  return array
    .map(crumb => crumb[property])
    .some((el, i, arr) => arr.indexOf(el) !== i)
}
