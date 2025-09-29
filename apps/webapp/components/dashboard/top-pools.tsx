import React from 'react';
import { Flame } from 'lucide-react';

interface Pool {
  name: string;
  tvl: string;
  apy: string;
}

interface TopPoolsProps {
  pools?: Pool[];
}

const defaultPools: Pool[] = [
  {
    name: 'XLM/USDC',
    tvl: '$2.4M',
    apy: '12.5%'
  },
  {
    name: 'AQUA/XLM',
    tvl: '$890K',
    apy: '18.2%'
  },
  {
    name: 'yXLM/XLM',
    tvl: '$1.2M',
    apy: '15.8%'
  }
];

export default function TopPools({ pools = defaultPools }: TopPoolsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 w-1/6" aria-label="Top liquidity pools">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-5 h-5 text-black" />
        <h3 className="text-lg font-semibold text-gray-900">Top Pools</h3>
      </div>

      <div className="space-y-3">
        {pools.map((pool, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            <div className="flex flex-col">
              <div className="text-gray-900 font-medium text-base">
                {pool.name}
              </div>
              <div className="text-gray-500 text-sm">
                TVL: {pool.tvl}
              </div>
            </div>
            <span className="text-green-500 bg-gray-200/50 px-2 py-1 rounded-full font-medium text-sm">
              {pool.apy}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}