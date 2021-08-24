const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfiguration = {
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
  env: {
    partnerCode: process.env.PARTNERCODE,
    accessKey: process.env.ACCESSKEY,
    secretKey: process.env.SECRETKEY,
    api: process.env.API,
    templateID: process.env.TEMPLATEID,
    serviceID: process.env.SERVICEID,
    userID: process.env.USERID,
  },
}

module.exports = withPlugins([optimizedImages], nextConfiguration)
