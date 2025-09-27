import React from 'react';
import { TrendingUp } from 'lucide-react';

interface MarketStatsProps {
  volume?: string;
  liquidity?: string;
  pairs?: number;
  xlmPrice?: string;
  isLoading?: boolean;
}

interface StatItemProps {
  label: string;
  value: string | number;
  isPositive?: boolean;
  isLoading?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, isPositive, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className={`font-medium tabular-nums ${
        isPositive ? 'text-green-500' : 'text-gray-900'
      }`}>
        {value}
      </span>
    </div>
  );
};

const MarketStats: React.FC<MarketStatsProps> = ({
  volume = '$1.2M',
  liquidity = '$8.4M',
  pairs = 12,
  xlmPrice = '$0.095',
  isLoading = false
}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm p-4 md:p-6 w-full"
      aria-label="Market statistics"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp 
          className="w-4 h-4 text-gray-400" 
          aria-hidden="true"
        />
        <h3 className="font-semibold text-gray-900">Market Stats</h3>
      </div>

      {/* Stats List */}
      <div className="space-y-3">
        <StatItem 
          label="Total Volume (24h)" 
          value={volume} 
          isLoading={isLoading}
        />
        <StatItem 
          label="Total Liquidity" 
          value={liquidity} 
          isLoading={isLoading}
        />
        <StatItem 
          label="Active Pairs" 
          value={pairs} 
          isLoading={isLoading}
        />
        <StatItem 
          label="XLM Price" 
          value={xlmPrice} 
          isPositive={true}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default MarketStats;