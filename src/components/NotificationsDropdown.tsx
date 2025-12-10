import React, { useEffect, useRef } from 'react';
import { AlertCircle, CheckCircle2, Droplet, Wrench, X } from 'lucide-react';
interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onViewAll: () => void;
}
const recentNotifications = [{
  id: 1,
  type: 'critical',
  icon: AlertCircle,
  message: 'Low water pressure in Zone A',
  time: '5 min ago',
  unread: true
}, {
  id: 2,
  type: 'warning',
  icon: Droplet,
  message: 'Tank B level below 20%',
  time: '12 min ago',
  unread: true
}, {
  id: 3,
  type: 'success',
  icon: CheckCircle2,
  message: 'Pump #2 maintenance completed',
  time: '1 hour ago',
  unread: false
}, {
  id: 4,
  type: 'maintenance',
  icon: Wrench,
  message: 'Sensor S-42 calibration scheduled',
  time: '2 hours ago',
  unread: false
}];
export function NotificationsDropdown({
  isOpen,
  onClose,
  onViewAll
}: NotificationsDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const handleViewAll = () => {
    onClose();
    onViewAll();
  };
  const typeStyles = {
    critical: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
    warning: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
    success: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
    maintenance: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
  };
  return <div ref={dropdownRef} className="absolute right-0 sm:right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-96 max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-slideDown z-50" style={{
    maxHeight: 'calc(100vh - 100px)'
  }}>
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
        <h3 className="font-bold text-slate-800 dark:text-slate-100">
          Notifications
        </h3>
        <button onClick={onClose} className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
          <X className="h-4 w-4 text-slate-500 dark:text-slate-400" />
        </button>
      </div>

      {/* Notifications List */}
      <div className="max-h-[400px] overflow-y-auto">
        {recentNotifications.map(notification => {
        const Icon = notification.icon;
        return <div key={notification.id} className={`px-4 py-3 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer ${notification.unread ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''}`}>
              <div className="flex gap-3">
                <div className={`p-2 rounded-lg h-fit flex-shrink-0 ${typeStyles[notification.type as keyof typeof typeStyles]}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-tight">
                      {notification.message}
                    </p>
                    {notification.unread && <span className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0 mt-1"></span>}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>;
      })}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700">
        <button onClick={handleViewAll} className="w-full text-center text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
          View All Notifications
        </button>
      </div>
    </div>;
}