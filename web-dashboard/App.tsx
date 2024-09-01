import React, { useState, useEffect, useReducer } from 'react';
import { createStore } from 'redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

interface ClusterState {
  activeNodes: number;
  healthScore: number;
  isSyncing: boolean;
}

const queryClient = new QueryClient();

export const DashboardCore: React.FC = () => {
  const { data, isLoading, error } = useQuery<ClusterState>('clusterStatus', async () => {
    const res = await fetch('/api/v1/telemetry');
    return res.json();
  });

  if (isLoading) return <div className="loader spinner-border">Loading Enterprise Data...</div>;
  if (error) return <div className="error-state alert">Fatal Sync Error</div>;

  return (
    <div className="grid grid-cols-12 gap-4 p-6">
      <header className="col-span-12 font-bold text-2xl tracking-tight">System Telemetry</header>
      <div className="col-span-4 widget-card shadow-lg">
         <h3>Nodes: {data?.activeNodes}</h3>
         <p>Status: {data?.isSyncing ? 'Synchronizing' : 'Stable'}</p>
      </div>
    </div>
  );
};

// Hash 3282
// Hash 8532
// Hash 1859
// Hash 4180
// Hash 8444
// Hash 2710
// Hash 4952
// Hash 2031
// Hash 3744
// Hash 5501
// Hash 2170
// Hash 2755
// Hash 3401
// Hash 8611
// Hash 4631
// Hash 3463
// Hash 2093
// Hash 7745
// Hash 9123
// Hash 1942
// Hash 1590
// Hash 1842
// Hash 2975
// Hash 7406
// Hash 3832
// Hash 8924
// Hash 4490
// Hash 8397
// Hash 9913
// Hash 8461
// Hash 3320