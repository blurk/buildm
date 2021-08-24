const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfiguration = {
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
  env: {
    partnerCode: 'MOMOVFKX20210824',
    accessKey: 'n6JyOolpJrMKtcrm',
    secretKey: 'QKssHvfcphSUcr2PrpQ4xTNpJNMaSmxt',
    api: 'https://test-payment.momo.vn/gw_payment/transactionProcessor',
    templateID: 'template_7t0xpe6',
    serviceID: 'service_1aj2r6k',
    userID: 'user_ePY8mJF51VXT3OrkOwMlx',
  },
}

module.exports = withPlugins([optimizedImages], nextConfiguration)
