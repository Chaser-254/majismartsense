import React from 'react';
import { Droplets, Github, Linkedin, Twitter, Activity, Server, Shield } from 'lucide-react';
export function Footer() {
  return <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 relative overflow-hidden mt-auto">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-1.5 rounded-lg">
                <Droplets className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Maji Smartense
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering communities with intelligent water management
              solutions. Real-time monitoring for a sustainable future.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* System Status */}
          <div>
            <h3 className="text-white font-semibold mb-4">System Status</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                <span className="text-slate-300">All Systems Operational</span>
              </li>
              <li className="flex items-center gap-2">
                <Server className="h-4 w-4 text-cyan-500" />
                <span>Version 2.1.4 (Stable)</span>
              </li>
              <li className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-blue-500" />
                <span>99.8% Uptime</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-teal-500" />
                <span>Secure Connection (TLS 1.3)</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  Documentation
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500">
                    →
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  API Reference
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500">
                    →
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  System Status
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500">
                    →
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                  Community Forum
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500">
                    →
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2025 Maji Smartense. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="text-cyan-500 font-semibold">EziTechLabs</span>
          </div>
        </div>
      </div>
    </footer>;
}
