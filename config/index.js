const path = require('path')
const fs = require('fs')

module.exports = {
  apiPath: '/api',
  databaseUrl: process.env.DATABASE_URL || '',
  isProduction: process.env.NODE_ENV === 'production',
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  port: process.env.PORT || 3000,
  verbose: process.env.VERBOSE
}
