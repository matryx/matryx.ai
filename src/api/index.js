import axios from 'axios'
import config from '../../config'

export const getTotalSold = function () {
  return axios.get(`${config.app.host}/api/sold`)
    .then((result) => result.data.total)
    .catch((err) => {
      console.log('Error retrieving total sold', err)
    })
}

