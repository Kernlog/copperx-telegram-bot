import TelegramBot from 'node-telegram-bot-api';
import { setupLogger } from '../utils/logger';

const logger = setupLogger();

/**
 * Handles the /start command
 * @param bot Telegram bot instance
 * @param msg Message object from Telegram
 */
const handleStartCommand = (bot: TelegramBot, msg: TelegramBot.Message): void => {
  const chatId = msg.chat.id;
  const username = msg.from?.first_name || 'there';
  
  const welcomeMessage = `
🤖 *Welcome to Copperx Telegram Bot* ${username}!

This bot allows you to manage your USDC directly through Telegram without visiting the web app.

*Main Features*:
- 🔐 Authentication with Copperx credentials
- 👛 Wallet management and balance checking
- 💸 Send funds to emails, wallets, and bank accounts
- 🔔 Receive instant deposit notifications

Use /help to see available commands.
  `;
  
  bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
  logger.info(`Start command received from user ${msg.from?.id}`);
};

/**
 * Handles the /help command
 * @param bot Telegram bot instance
 * @param msg Message object from Telegram
 */
const handleHelpCommand = (bot: TelegramBot, msg: TelegramBot.Message): void => {
  const chatId = msg.chat.id;
  
  const helpMessage = `
📋 *Available Commands*:

*Authentication*
/start - Start the bot and see welcome message
/help - Display this help message
/login - Authenticate with Copperx credentials
/logout - End your current session

*Wallet Management*
/balance - View your wallet balances
/wallet - View and manage your wallets
/deposit - Generate deposit address

*Transfers*
/send - Send funds to an email address
/withdraw - Send funds to an external wallet
/bank - Withdraw funds to a bank account
/history - View transaction history

Need more help? Contact our support: https://t.me/copperxcommunity/2183
  `;
  
  bot.sendMessage(chatId, helpMessage, { parse_mode: 'Markdown' });
  logger.info(`Help command received from user ${msg.from?.id}`);
};

/**
 * Sets up all command handlers for the bot
 * @param bot Telegram bot instance
 */
export const setupCommandHandlers = (bot: TelegramBot): void => {
  // Register command handlers
  bot.onText(/\/start/, (msg: TelegramBot.Message) => handleStartCommand(bot, msg));
  bot.onText(/\/help/, (msg: TelegramBot.Message) => handleHelpCommand(bot, msg));
  
  // Register commands with BotFather command list
  bot.setMyCommands([
    { command: 'start', description: 'Start the bot and see welcome message' },
    { command: 'help', description: 'Display available commands and how to use them' },
    { command: 'login', description: 'Authenticate with Copperx credentials' },
    { command: 'logout', description: 'End your current session' },
    { command: 'balance', description: 'View your wallet balances' },
    { command: 'wallet', description: 'View and manage your wallets' },
    { command: 'deposit', description: 'Generate deposit address' },
    { command: 'send', description: 'Send funds to an email address' },
    { command: 'withdraw', description: 'Send funds to an external wallet' },
    { command: 'bank', description: 'Withdraw funds to a bank account' },
    { command: 'history', description: 'View transaction history' }
  ]);
  
  logger.info('Command handlers have been registered');
}; 