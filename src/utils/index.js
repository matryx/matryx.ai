// Get UTM variables
export const getUTMS = function (email) {
  console.log('getUTM')
  const traits = { email }

  if (window.location.search) {
    const queries = document.location.search.substr(1).split('&')
    console.log('queries', queries)

    queries.forEach(q => {
      var i = q.split('=')
      var utm = i[0].split('_')
      traits[utm[1].toString().toUpperCase()] = i[1].toString()
    })

    return traits
  }
}
