import React from 'react';
import { ChevronDown } from 'lucide-react';

export const EmissionsMetrics = () => {
  return (
    <div className="pb-4 space-y-4">
      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Direct emissions</span>
            <span className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded">Scope 1</span>
          </div>
          <ChevronDown size={20} />
        </div>
        <div className="text-3xl font-bold text-orange-400 mt-2">80.2<span className="text-sm text-gray-500 ml-2">/tCO2e</span></div>
      </div>
      
      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Indirect emissions/owned</span>
            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">Scope 2</span>
          </div>
          <ChevronDown size={20} />
        </div>
        <div className="text-3xl font-bold text-green-600 mt-2">49.3<span className="text-sm text-gray-500 ml-2">/tCO2e</span></div>
      </div>
    </div>
  );
};