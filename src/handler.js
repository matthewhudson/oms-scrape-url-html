const axios = require('axios')

const { SCRAPER_API_ORIGIN, SCRAPER_API_KEY } = process.env

const handler = async inputs => {
  const { url, session } = inputs
  // @TODO: Use an OMS helper to validate inputs and env vars

  const output = await axios
    .get(SCRAPER_API_ORIGIN, {
      params: {
        api_key: SCRAPER_API_KEY,
        url,
        session_number: session
      }
    })
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.status)
      }

      return { html: res.data }
    })
    .catch(err => {
      const { message, stack } = err
      return {
        error: { message, stack }
      }
    })

  return output
}

module.exports = handler
