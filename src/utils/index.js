// Get UTM variables
export const getUTMS = function () {
  console.log('getUTM')
  const traits = {}

  if (window.location.search) {
    const queries = document.location.search.substr(1).split('&')

    queries.forEach(q => {
      var i = q.split('=')
      // var utm = i[0].split('_')
      var utm = i[0]
      traits[utm.toString().toUpperCase()] = i[1].toString()
    })

    return traits
  }

  return traits
}

export function isValidEmail (value) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(value)
}

export function getlStorage (item) {
  if (window.localStorage) {
    try {
      return window.localStorage.getItem(item)
    } catch (e) {
      return false
    }
  }
}

/*
 * name: String
 * item: String
 */
export function setlStorage (name, item) {
  if (window.localStorage) {
    try {
      return window.localStorage.setItem(name, item)
    } catch (e) {
      return false
    }
  }
}

export function isPreSale () {
  const date = 'September 6 2017 15:00:00 UTC'
  const today = new Date()
  const startDate = new Date(date)

  if (today.getTime() - startDate.getTime() > 0) {
    return true
  }
  return false
}

export function isMainSale () {
  const date = 'September 13 2017 15:00:00 UTC'
  const today = new Date()
  const startDate = new Date(date)

  if (today.getTime() - startDate.getTime() > 0) {
    return true
  }
  return false
}

export function isValidETHAddress (value) {
  const rightStart = value.substring(0, 2) === '0x'
  const rightLength = value.length === 42 // account for ''

  if (rightStart && rightLength) {
    return 'Address is valid'
  }

  if (!rightStart) {
    return 'Address must start with "0x"'
  }

  if (!rightLength) {
    return 'Address must be 40 characters'
  }
  return false
}
