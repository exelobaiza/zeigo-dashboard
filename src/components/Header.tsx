import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

export const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-2">
        <span className="text-purple-600 font-semibold">Copilot</span>
        <ChevronDown size={20} />
      </div>
      <div className="flex items-center space-x-4">
        <Bell size={20} />
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-sm text-green-800">HK</span>
          </div>
          <div className="text-sm">
            <div>Hannah K.</div>
            <div className="text-gray-500 text-xs">Free user</div>
          </div>
        </div>
      </div>
    </div>
  );
};