import React from 'react';

export interface MarketData {
  symbol: string;
  price: number;
  change: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}