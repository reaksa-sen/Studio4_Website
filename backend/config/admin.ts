export default ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', '291dc8f0c8a60d554837f63a2242da23')
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8cc8eb2a12991bcace141be71c8b955f')
  },
  watchIgnoreFiles: ['**/config/sync/**']
});
