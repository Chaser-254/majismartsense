import React, { useEffect, useState, useRef, forwardRef } from 'react';
import { AlertCircle, CheckCircle2, Droplet, Wrench, Zap, Activity, Waves } from 'lucide-react';
type AlertType = 'critical' | 'warning' | 'success' | 'maintenance' | 'info';
interface Alert {
  id: number;
  type: AlertType;
  message: string;
  timestamp: Date;
  icon: any;
  isNew?: boolean;
}
// Pre-defined templates for realistic sensor data generation
const SENSOR_TEMPLATES = [{
  type: 'warning',
  icon: Droplet,
  templates: ['Flow rate spike detected in Zone {zone} (Sensor {sensor}) - {value} L/min', 'Unusual consumption pattern in Sector {sector} (High Usage)', 'Pressure drop detected in Pipe {pipe} - Potential leak']
}, {
  type: 'success',
  icon: Waves,
  templates: ['Tank {tank} water level stabilized at {percent}%', 'Refill cycle completed for Tank {tank}', 'Water distribution normal in Zone {zone}']
}, {
  type: 'info',
  icon: Activity,
  templates: ['Water quality: pH {ph} (Normal) - Sensor WQ-{id}', 'Turbidity levels within optimal range ({value} NTU)', 'Daily data sync completed for Cluster {cluster}']
}, {
  type: 'maintenance',
  icon: Wrench,
  templates: ['Pump #{pump} activated - Scheduled maintenance cycle', 'Sensor {sensor} calibration required', 'Routine system check in progress for Zone {zone}']
}, {
  type: 'critical',
  icon: AlertCircle,
  templates: ['Leak detected: Zone {zone} pressure drop {percent}% - Technician notified', 'Critical low level in Tank {tank} ({percent}%)', 'Sensor {sensor} offline - No signal received']
}, {
  type: 'info',
  icon: Zap,
  templates: ['AI Alert: Predicted peak usage in 2 hours', 'Optimization Engine: Pump #{pump} efficiency increased by {percent}%', 'Anomaly detection scan completed: No issues found']
}];
const INITIAL_ALERTS: Alert[] = [{
  id: 1,
  type: 'critical',
  message: 'Low water pressure in Zone A',
  timestamp: new Date(Date.now() - 1000 * 60 * 10),
  icon: Droplet,
  isNew: false
}, {
  id: 2,
  type: 'warning',
  message: 'Sensor #42 connectivity unstable',
  timestamp: new Date(Date.now() - 1000 * 60 * 45),
  icon: AlertCircle,
  isNew: false
}, {
  id: 3,
  type: 'success',
  message: 'Tank 3 refill completed',
  timestamp: new Date(Date.now() - 1000 * 60 * 120),
  icon: CheckCircle2,
  isNew: false
}];
export const AlertsFeed = forwardRef<HTMLDivElement>((props, ref) => {
  const [alerts, setAlerts] = useState<Alert[]>(INITIAL_ALERTS);
  const [nextId, setNextId] = useState(4);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  // Helper to generate random values
  const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  const getInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
  const getFloat = (min: number, max: number) => (Math.random() * (max - min) + min).toFixed(1);
  const generateAlert = (): Alert => {
    const templateCategory = getRandom(SENSOR_TEMPLATES);
    const template = getRandom(templateCategory.templates);
    // Replace placeholders with realistic data
    const message = template.replace('{zone}', ['A', 'B', 'C', 'North', 'South'][getInt(0, 4)]).replace('{sensor}', `S-${getInt(10, 99)}`).replace('{value}', getInt(50, 120).toString()).replace('{sector}', getInt(1, 8).toString()).replace('{pipe}', `P-${getInt(100, 999)}`).replace('{tank}', ['A', 'B', 'Main', 'Reserve'][getInt(0, 3)]).replace('{percent}', getInt(10, 95).toString()).replace('{ph}', getFloat(6.8, 7.6)).replace('{id}', getInt(1, 20).toString()).replace('{cluster}', getInt(1, 5).toString()).replace('{pump}', getInt(1, 6).toString());
    return {
      id: nextId,
      type: templateCategory.type as AlertType,
      message,
      timestamp: new Date(),
      icon: templateCategory.icon,
      isNew: true
    };
  };
  // Effect to add new alerts periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = generateAlert();
      setNextId(prev => prev + 1);
      setAlerts(prev => {
        const updated = [newAlert, ...prev].slice(0, 10); // Keep max 10
        return updated;
      });
      // Scroll to top when new alert arrives
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    }, getInt(5000, 10000)); // Random interval between 5-10 seconds
    return () => clearInterval(interval);
  }, [nextId]);
  // Effect to remove "New" badge after 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setAlerts(prev => prev.map(alert => {
        if (alert.isNew && new Date().getTime() - alert.timestamp.getTime() > 5000) {
          return {
            ...alert,
            isNew: false
          };
        }
        return alert;
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  // Force re-render every minute to update relative times
  const [, setTick] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setTick(t => t + 1), 60000);
    return () => clearInterval(timer);
  }, []);
  // Highlight effect when scrolled to
  useEffect(() => {
    if (isHighlighted) {
      const timer = setTimeout(() => setIsHighlighted(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isHighlighted]);
  // Expose method to trigger highlight
  useEffect(() => {
    if (ref && typeof ref === 'object' && ref.current) {
      ;
      (ref.current as any).highlight = () => setIsHighlighted(true);
    }
  }, [ref]);
  const getRelativeTime = (date: Date) => {
    const diff = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return 'Yesterday';
  };
  const typeStyles = {
    critical: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-800 border-l-4 border-l-rose-500',
    warning: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800 border-l-4 border-l-amber-500',
    success: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800 border-l-4 border-l-emerald-500',
    maintenance: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800 border-l-4 border-l-blue-500',
    info: 'bg-slate-50 dark:bg-slate-700/20 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-600 border-l-4 border-l-slate-400'
  };
  return <div ref={ref} className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm h-full flex flex-col transition-all duration-500 ${isHighlighted ? 'ring-4 ring-cyan-500/50 shadow-xl shadow-cyan-500/20' : ''}`}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
            Live Alerts
          </h3>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
          </span>
        </div>
        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md">
          Real-time Feed
        </span>
      </div>

      <div ref={scrollRef} className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1 max-h-[400px]">
        {alerts.map(alert => {
        const Icon = alert.icon;
        return <div key={alert.id} className={`
                flex gap-3 p-3 rounded-r-xl transition-all duration-500 ease-out border border-transparent hover:border-slate-200 dark:hover:border-slate-600
                ${typeStyles[alert.type]}
                ${alert.isNew ? 'translate-x-0 opacity-100 bg-opacity-100 scale-[1.02] shadow-md' : 'translate-x-0 opacity-100 scale-100'}
              `}>
              <div className="mt-1">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <p className="text-sm font-medium leading-tight truncate pr-2 dark:text-slate-100">
                    {alert.message}
                  </p>
                  {alert.isNew && <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 animate-pulse">
                      NEW
                    </span>}
                </div>
                <p className="text-xs opacity-70 mt-1.5 font-medium">
                  {getRelativeTime(alert.timestamp)}
                </p>
              </div>
            </div>;
      })}
      </div>
    </div>;
});
AlertsFeed.displayName = 'AlertsFeed';