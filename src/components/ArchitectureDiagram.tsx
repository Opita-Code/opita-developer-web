import React from 'react';
import { motion } from 'framer-motion';

export default function ArchitectureDiagram() {
  return (
    <div className="w-full relative bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-6 overflow-hidden flex items-center justify-center min-h-[400px]">
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      {/* SVG Canvas */}
      <svg className="w-full max-w-3xl overflow-visible relative z-10" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Glow Filters */}
        <defs>
          <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-violet" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Static Connections */}
        <path d="M 150 200 L 300 200" stroke="#27272a" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 450 200 L 600 120" stroke="#27272a" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 450 200 L 600 280" stroke="#27272a" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* Animated Data Packets (Path 1) */}
        <motion.circle 
          r="4" fill="#06b6d4" filter="url(#glow-cyan)"
          animate={{ cx: [150, 300], cy: [200, 200], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Animated Data Packets (Path 2) */}
        <motion.circle 
          r="4" fill="#8b5cf6" filter="url(#glow-violet)"
          animate={{ cx: [450, 600], cy: [200, 120], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
        
        {/* Animated Data Packets (Path 3) */}
        <motion.circle 
          r="4" fill="#8b5cf6" filter="url(#glow-violet)"
          animate={{ cx: [450, 600], cy: [200, 280], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
        />

        {/* Nodes */}
        {/* Client Node */}
        <g transform="translate(50, 150)">
          <rect width="100" height="100" rx="12" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
          <text x="50" y="45" fill="#a1a1aa" fontSize="12" fontFamily="monospace" textAnchor="middle">CLIENT</text>
          <text x="50" y="65" fill="#fafafa" fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">React/Astro</text>
        </g>

        {/* API Gateway Node */}
        <g transform="translate(300, 140)">
          <rect width="150" height="120" rx="12" fill="#18181b" stroke="#06b6d4" strokeWidth="2" filter="url(#glow-cyan)" />
          <text x="75" y="45" fill="#06b6d4" fontSize="12" fontFamily="monospace" textAnchor="middle">&lt;gateway&gt;</text>
          <text x="75" y="70" fill="#fafafa" fontSize="16" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Node.js API</text>
          <text x="75" y="90" fill="#71717a" fontSize="10" fontFamily="monospace" textAnchor="middle">Rate Limited</text>
        </g>

        {/* Worker Node */}
        <g transform="translate(600, 70)">
          <rect width="120" height="100" rx="12" fill="#18181b" stroke="#8b5cf6" strokeWidth="2" filter="url(#glow-violet)" />
          <text x="60" y="45" fill="#8b5cf6" fontSize="12" fontFamily="monospace" textAnchor="middle">WORKER</text>
          <text x="60" y="65" fill="#fafafa" fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Serverless</text>
        </g>

        {/* Database Node */}
        <g transform="translate(600, 230)">
          <rect width="120" height="100" rx="12" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
          <path d="M 30 40 Q 60 30 90 40 L 90 70 Q 60 80 30 70 Z" fill="none" stroke="#a1a1aa" strokeWidth="2" />
          <path d="M 30 55 Q 60 65 90 55" fill="none" stroke="#a1a1aa" strokeWidth="2" />
          <text x="60" y="85" fill="#fafafa" fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">PostgreSQL</text>
        </g>

      </svg>
    </div>
  );
}
