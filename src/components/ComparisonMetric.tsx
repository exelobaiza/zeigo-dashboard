import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export const ComparisonMetric = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="text-lg font-medium mb-4">Comparison</h3>
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-full border-8 border-green-500 flex items-center justify-center">
          <span className="text-2xl font-bold">86</span>
        </div>
        <div className="flex-1">
          <div className="font-medium">Great</div>
          <div className="text-sm text-green-600 flex items-center">
            <span>Less in the last 3 months</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div className="flex items-center">
          <span className="text-sm mr-2">Fuel</span>
          <TrendingUp className="text-green-500" size={16} />
          <span className="text-sm text-green-500">50%</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm mr-2">Electric</span>
          <TrendingDown className="text-red-500" size={16} />
          <span className="text-sm text-red-500">50%</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm mr-2">Heating</span>
          <Minus className="text-gray-500" size={16} />
          <span className="text-sm">50%</span>
        </div>
      </div>
    </div>
  );
};