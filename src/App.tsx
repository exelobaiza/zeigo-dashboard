import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { SiteSelector } from './components/SiteSelector';
import { SiteMetrics } from './components/SiteMetrics';
import { EmissionsChart } from './components/EmissionsChart';
import { EmissionsMetrics } from './components/EmissionsMetrics';
import { ComparisonMetric } from './components/ComparisonMetric';
import { BottomStats } from './components/BottomStats';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <div className="max-w-7xl">
            <div className="py-6">
              <h1 className="text-2xl font-bold px-4">Welcome, Emerson Electric. Co !</h1>
              <p className="text-sm text-gray-500 px-4 mt-1">Last update: Wednesday, January 7</p>
            </div>
            
            <SiteSelector />
            
            <div className="grid grid-cols-3 gap-6 p-4">
              <div className="col-span-2">
                <SiteMetrics />
                <EmissionsChart />
              </div>
              <div>
                <EmissionsMetrics />
                <ComparisonMetric />
              </div>
            </div>

            <BottomStats />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;