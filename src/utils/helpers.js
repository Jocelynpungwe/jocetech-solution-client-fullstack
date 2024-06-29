export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(number / 100)
}

export const getUniqueValues = (data, type) => {
  //checking product, and creating unique array for category, companies and colors
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
