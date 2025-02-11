import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';

export const SiteMetrics = () => {
  return (
    <div className="flex space-x-4 p-4">
      <div className="bg-white rounded-lg p-4 flex-1">
        <div className="text-sm text-gray-600">Houston Factory</div>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold">45,000</span>
          <span className="text-xs text-gray-500">tCO2e</span>
          <span className="text-xs text-green-500">+8%</span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 flex-1">
        <div className="text-sm text-gray-600">Boston offices</div>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold">20,100</span>
          <span className="text-xs text-gray-500">tCO2e</span>
          <span className="text-xs text-green-500">+5%</span>
        </div>
      </div>
      <button className="bg-white rounded-lg p-4 flex items-center justify-center flex-1 text-purple-600 hover:bg-purple-50">
        <Plus size={20} />
        <span className="ml-2">Add site</span>
      </button>
      <div className="flex-1 flex items-center justify-center">
        <MoreHorizontal size={20} className="text-gray-400" />
      </div>
    </div>
  );
};