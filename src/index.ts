const deepClone = <T>(obj: any): T => {
  let newObj: any
  try {
    newObj = obj.push ? [] : {}
  } catch (error) {
    newObj = {}
  }
  for (let attr in obj) {
    if (typeof obj[attr] === 'object') {
      newObj[attr] = deepClone(obj[attr])
    } else {
      newObj[attr] = obj[attr]
    }
  }
  return newObj
}

/**
 * @description 字符串下划线转驼峰
 * @param {String} value 需要转换的值
 */
function formatCamelcase(value: any) {
  return value.replace(/_(\w)/g, (_: any, letter: any) => letter.toUpperCase())
}

/**
 * 字符串驼峰转下划线
 * @param {String} value
 */
function formatUnderscore(value: any) {
  return value.replace(/([A-Z])/g, '_$1').toLowerCase()
}

/**
 * 数据对象key 驼峰下划线相互转化
 * @param {Object} origin - 原始对象 支持-数组、key-value对象、字符串
 * @param {String} type camelcase-转驼峰 underscore-转下划线
 */
function convert(origin: {} | [] | string, type: 'camelcase' | 'underscore' = 'camelcase') {
  const plainData = deepClone(origin)
  let hump = ''
  // 转换对象中的每一个键名为驼峰的递归
  const formatKey = (data: any) => {
    if (data instanceof Array) {
      data.forEach(item => formatKey(item))
    } else if (data instanceof Object) {
      for (const key in data) {
        if (type === 'camelcase') hump = formatCamelcase(key)
        else hump = formatUnderscore(key)
        data[hump] = data[key]
        if (key !== hump) delete data[key]
        if (data[hump] instanceof Object) formatKey(data[hump])
      }
    } else if (typeof data === 'string') {
      if (type === 'camelcase') data = formatCamelcase(data)
      else formatUnderscore(data)
    }
  }
  formatKey(plainData)
  return plainData
}

convert.formatCamelcase = formatCamelcase
convert.formatUnderscore = formatUnderscore
export default convert
