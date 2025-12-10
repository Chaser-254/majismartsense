import React, { useRef } from 'react';
import { Droplet, Activity, Zap, BarChart3 } from 'lucide-react';
import { Header } from '../components/Header';
import { SummaryCard } from '../components/SummaryCard';
import { SensorGauge } from '../components/SensorGauge';
import { ConsumptionChart } from '../components/ConsumptionChart';
import { AIInsights } from '../components/AIInsights';
import { AlertsFeed } from '../components/AlertsFeed';
import { SensorStatus } from '../components/SensorStatus';
import { Footer } from '../components/Footer';
export function Dashboard() {
  const alertsFeedRef = useRef<HTMLDivElement>(null);
  const handleViewAllNotifications = () => {
    if (alertsFeedRef.current) {
      alertsFeedRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      // Trigger highlight effect
      setTimeout(() => {
        if (alertsFeedRef.current && (alertsFeedRef.current as any).highlight) {
          ;
          (alertsFeedRef.current as any).highlight();
        }
      }, 500);
    }
  };
  return <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Header onViewAllNotifications={handleViewAllNotifications} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Dashboard Overview
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Real-time monitoring of water distribution network
            </p>
          </div>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Zone A: Normal
            </span>
            <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Zone B: Warning
            </span>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard title="Total Consumption" value="42.5k" unit="Liters" icon={Droplet} trend="up" trendValue="12%" color="blue" />
          <SummaryCard title="Avg. Pressure" value="4.2" unit="Bar" icon={Activity} trend="neutral" trendValue="0.1%" color="cyan" />
          <SummaryCard title="Quality Score" value="98" unit="/100" icon={Zap} trend="up" trendValue="2%" color="teal" />
          <SummaryCard title="Active Sensors" value="24" unit="/26" icon={BarChart3} trend="down" trendValue="2 offline" color="indigo" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Charts & Gauges */}
          <div className="lg:col-span-2 space-y-8">
            <ConsumptionChart />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SensorGauge level={78} label="Main Tank Level" status="normal" />
              <SensorGauge level={18} label="Reserve Tank" status="critical" />
            </div>

            <SensorStatus />
          </div>

          {/* Right Column: AI & Alerts */}
          <div className="space-y-8 flex flex-col">
            <AIInsights />
            <div className="flex-1 min-h-[400px]">
              <AlertsFeed ref={alertsFeedRef} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}