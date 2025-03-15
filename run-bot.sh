#!/bin/bash

echo "🤖 Starting Copperx Telegram Bot setup..."

# Create necessary directories if they don't exist
mkdir -p logs src/api src/services

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create the build directory
mkdir -p dist

# Build the TypeScript code
echo "🔨 Building TypeScript code..."
npx tsc

# Run the bot
echo "🚀 Running the bot..."
node dist/index.js 