const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/hidden-gems-${env}`
const secret = process.env.SECRET || '&7V;jyJ#gJ/vyRAd'
module.exports = { env, port, dbURI, secret }
