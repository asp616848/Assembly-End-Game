module.exports = function (attributes, additionalConfig = {}) {
  return Object.keys(additionalConfig).reduce((res, key) => {
    const attribute = attributes.find((attr) => attr.key === key)
    if (attribute) {
      const transformedAttribute = { ...attribute, ...additionalConfig[key] }
      res.push(transformedAttribute)
    } else {
      res.push({ key, ...additionalConfig[key] })
    }
    return res
  }, [])
}
