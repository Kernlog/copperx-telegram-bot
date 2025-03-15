import TelegramBot from 'node-telegram-bot-api';
import { setupLogger } from '../utils/logger';

const logger = setupLogger();

/**
 * Sets up all error handlers for the bot
 * @param bot Telegram bot instance
 */
export const setupErrorHandlers = (bot: TelegramBot): void => {
  // Handle polling errors
  bot.on('polling_error', (error: Error) => {
    logger.error('Polling error:', error);
  });
  
  // Handle webhook errors
  bot.on('webhook_error', (error: Error) => {
    logger.error('Webhook error:', error);
  });
  
  // Handle general errors
  bot.on('error', (error: Error) => {
    logger.error('Bot error:', error);
  });
  
  logger.info('Error handlers have been registered');
  
  // Set up process-level error handling
  process.on('uncaughtException', (error: Error) => {
    logger.error('Uncaught exception:', error);
    // Don't exit process for uncaught exceptions to keep bot running
  });
  
  process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
    logger.error('Unhandled rejection at:', promise, 'reason:', reason);
    // Don't exit process for unhandled rejections to keep bot running
  });
}; 