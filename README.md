# Copperx Telegram Bot

A Telegram bot for Copperx Payout that enables users to manage their USDC directly through Telegram without visiting the web app.

## Features

- 🔐 **Authentication**: Login with Copperx credentials and manage your session
- 👛 **Wallet Management**: View balances, set default wallets, and generate deposit addresses
- 💸 **Fund Transfers**: Send funds to emails, external wallets, and bank accounts
- 🔔 **Real-time Notifications**: Receive instant alerts for deposits

## Tech Stack

- **TypeScript**: For type-safe development
- **Node.js**: Runtime environment
- **node-telegram-bot-api**: Telegram Bot API integration
- **Axios**: HTTP client for API requests
- **Pusher**: Real-time notifications
- **dotenv**: Environment variable management


## Setup Instructions

### Prerequisites

- Node.js 16+
- npm or yarn
- Telegram Bot Token (from BotFather)
- Copperx API access

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/0xkernlog/copperx-telegram-bot.git
   cd copperx-telegram-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   BOT_TOKEN=your_telegram_bot_token
   API_BASE_URL=https://income-api.copperx.io
   PUSHER_KEY=
   PUSHER_CLUSTER=
   NODE_ENV=development
   ```

4. Build the project:
   ```bash
   npm run build
   ```

5. Start the bot:
   ```bash
   npm start
   ```

## Bot Commands

- `/start` - Initialize the bot and see welcome message
- `/help` - Display available commands and how to use them
- `/login` - Authenticate with Copperx credentials
- `/logout` - End your current session
- `/balance` - View your wallet balances
- `/wallet` - View and manage your wallets
- `/deposit` - Generate deposit address
- `/send` - Send funds to an email address
- `/withdraw` - Send funds to an external wallet
- `/bank` - Withdraw funds to a bank account
- `/history` - View transaction history

## Development

### Testing

Run tests with:
```bash
npm test
```

## Deployment

The bot can be deployed to Render.com:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the build command: `npm install && npm run build`
4. Set the start command: `npm start`
5. Add environment variables from your `.env` file

## License

[MIT](LICENSE)

## Contact

For questions regarding this project, please contact the Copperx team at https://t.me/copperxcommunity/2991 