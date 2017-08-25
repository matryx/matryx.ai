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
