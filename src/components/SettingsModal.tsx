import React from 'react';
import { X, Moon, Sun, Bell, Shield, Database } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function SettingsModal({
  isOpen,
  onClose
}: SettingsModalProps) {
  const {
    theme,
    setTheme
  } = useTheme();
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Settings</h2>
              <p className="text-xs text-cyan-50 mt-0.5">
                Customize your dashboard experience
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(85vh-100px)]">
          {/* Appearance Section */}
          <section>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Sun className="h-5 w-5 text-amber-500" />
              Appearance
            </h3>
            <div className="space-y-3">
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      Theme Mode
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Choose your preferred color scheme
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => setTheme('light')} className={`p-4 rounded-lg border-2 transition-all ${theme === 'light' ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' : 'border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'}`}>
                    <Sun className={`h-6 w-6 mx-auto mb-2 ${theme === 'light' ? 'text-cyan-600' : 'text-slate-400'}`} />
                    <p className={`text-sm font-medium ${theme === 'light' ? 'text-cyan-700 dark:text-cyan-400' : 'text-slate-600 dark:text-slate-400'}`}>
                      Light Mode
                    </p>
                  </button>
                  <button onClick={() => setTheme('dark')} className={`p-4 rounded-lg border-2 transition-all ${theme === 'dark' ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' : 'border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'}`}>
                    <Moon className={`h-6 w-6 mx-auto mb-2 ${theme === 'dark' ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400'}`} />
                    <p className={`text-sm font-medium ${theme === 'dark' ? 'text-cyan-700 dark:text-cyan-400' : 'text-slate-600 dark:text-slate-400'}`}>
                      Dark Mode
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Notifications Section */}
          <section>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-500" />
              Notifications
            </h3>
            <div className="space-y-3">
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      Critical Alerts
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Receive notifications for critical system events
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-slate-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      AI Insights
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Get notified about AI predictions and recommendations
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-slate-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      Maintenance Reminders
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Scheduled maintenance and inspection alerts
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-slate-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* System Section */}
          <section>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Database className="h-5 w-5 text-teal-500" />
              System
            </h3>
            <div className="space-y-3">
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-slate-800 dark:text-slate-100">
                    Data Refresh Rate
                  </p>
                  <span className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                    5 seconds
                  </span>
                </div>
                <input type="range" min="1" max="30" defaultValue="5" className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-600" />
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <span>1s</span>
                  <span>30s</span>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      Auto-save Dashboard Layout
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Remember your customizations
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-slate-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-cyan-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600 px-6 py-4 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors">
            Cancel
          </button>
          <button onClick={onClose} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>;
}