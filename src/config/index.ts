/**
 * Configuration object containing all environment variables
 */
export const config = {
  bot: {
    token: process.env.BOT_TOKEN || '',
  },
  api: {
    baseUrl: process.env.API_BASE_URL || 'https://income-api.copperx.io',
  },
  pusher: {
    key: process.env.PUSHER_KEY,
    cluster: process.env.PUSHER_CLUSTER,
  },
  environment: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV !== 'production',
}; 