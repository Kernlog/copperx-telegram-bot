import dotenv from 'dotenv';
import { initializeBot } from './bot';
import { setupLogger } from './utils/logger';

// Load environment variables
dotenv.config();

// Setup logger
const logger = setupLogger();

// Check for required environment variables
if (!process.env.BOT_TOKEN) {
  logger.error('BOT_TOKEN environment variable is required');
  process.exit(1);
}

if (!process.env.API_BASE_URL) {
  logger.error('API_BASE_URL environment variable is required');
  process.exit(1);
}

// Initialize and start the bot
try {
  logger.info('Starting Copperx Telegram Bot...');
  initializeBot();
  logger.info('Bot successfully started');
} catch (error) {
  logger.error('Failed to start the bot:', error);
  process.exit(1);
} 