import TelegramBot from 'node-telegram-bot-api';
import { setupCommandHandlers } from './commands';
import { setupErrorHandlers } from './error-handlers';
import { setupLogger } from '../utils/logger';

const logger = setupLogger();

/**
 * Initializes the Telegram bot with appropriate configurations and handlers
 * @returns Initialized TelegramBot instance
 */
export const initializeBot = (): TelegramBot => {
  // Get bot token from environment variables
  const token = process.env.BOT_TOKEN as string;
  
  // Create a bot instance with polling enabled
  const bot = new TelegramBot(token, { polling: true });
  
  logger.info('Bot instance created');

  // Register command handlers
  setupCommandHandlers(bot);
  
  // Setup error handlers
  setupErrorHandlers(bot);
  
  return bot;
}; 