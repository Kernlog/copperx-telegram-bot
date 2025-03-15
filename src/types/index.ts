/// <reference types="node" />
/**
 * Basic types for the Copperx Telegram Bot
 */

/**
 * User session interface
 */
export interface UserSession {
  userId: number;
  chatId: number;
  token?: string;
  refreshToken?: string;
  expiresAt?: Date;
  organizationId?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Command handler function type
 */
export type CommandHandler = (chatId: number, message: string, params?: string[]) => Promise<void>;

/**
 * API response structure
 */
export interface ApiResponse<T> {
  data: T;
  status: string;
  message?: string;
}

/**
 * Wallet balance interface
 */
export interface WalletBalance {
  symbol: string;
  network: string;
  balance: string;
  usdValue: string;
  walletId: string;
  isDefault: boolean;
}

/**
 * Transfer types
 */
export enum TransferType {
  EMAIL = 'email',
  WALLET = 'wallet',
  BANK = 'bank'
} 