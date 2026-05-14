import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Gamepad2, Server } from 'lucide-react';

const tabs = [
  { id: 'architect.ts', icon: Server, color: 'text-violet-400' },
  { id: 'streamer.yml', icon: Gamepad2, color: 'text-purple-400' },
  { id: 'metrics.json', icon: Cpu, color: 'text-cyan-400' },
];

const codeSnippets: Record<string, React.ReactNode> = {
  'architect.ts': (
    <pre className="font-mono text-sm leading-relaxed text-zinc-300">
      <span className="text-violet-400">import</span> {'{'} Architecture, Cloud, Microservices {'}'} <span className="text-violet-400">from</span> <span className="text-green-400">'@opita/core'</span>;<br/>
      <span className="text-violet-400">import</span> {'{'} Coffee {'}'} <span className="text-violet-400">from</span> <span className="text-green-400">'@daily/fuel'</span>;<br/>
      <br/>
      <span className="text-cyan-400">class</span> <span className="text-yellow-200">ProductArchitect</span> <span className="text-cyan-400">implements</span> <span className="text-yellow-200">Builder</span> {'{'}<br/>
      {'  '}<span className="text-violet-400">public readonly</span> stack = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'AWS'</span>];<br/>
      <br/>
      {'  '}<span className="text-blue-400">async</span> <span className="text-yellow-200">deploySystem</span>(requirements: <span className="text-yellow-200">Specs</span>) {'{'}<br/>
      {'    '}<span className="text-blue-400">await</span> Coffee.<span className="text-yellow-200">consume</span>();<br/>
      {'    '}<span className="text-violet-400">const</span> infrastructure = <span className="text-blue-400">await</span> Cloud.<span className="text-yellow-200">provision</span>();<br/>
      {'    '}<span className="text-violet-400">return</span> Architecture.<span className="text-yellow-200">build</span>(infrastructure, requirements);<br/>
      {'  }'}<br/>
      {'}'}
    </pre>
  ),
  'streamer.yml': (
    <pre className="font-mono text-sm leading-relaxed text-zinc-300">
      <span className="text-cyan-400">channel:</span> <span className="text-green-400">"OpitaDeveloper"</span><br/>
      <span className="text-cyan-400">platform:</span> <span className="text-green-400">"Twitch"</span><br/>
      <span className="text-cyan-400">content:</span><br/>
      {'  '}<span className="text-zinc-500">-</span> <span className="text-green-400">"Live Coding (React / AWS)"</span><br/>
      {'  '}<span className="text-zinc-500">-</span> <span className="text-green-400">"System Design & Architecture"</span><br/>
      {'  '}<span className="text-zinc-500">-</span> <span className="text-green-400">"League of Legends (Ranked)"</span><br/>
      <span className="text-cyan-400">vibe:</span> <span className="text-green-400">"Chill, educacional y caos controlado"</span><br/>
      <br/>
      <span className="text-zinc-500"># Cuándo prendo stream:</span><br/>
      <span className="text-cyan-400">schedule:</span><br/>
      {'  '}<span className="text-cyan-400">condition:</span> <span className="text-green-400">"Cuando termine el sprint y tenga café"</span>
    </pre>
  ),
  'metrics.json': (
    <pre className="font-mono text-sm leading-relaxed text-zinc-300">
      {'{'}<br/>
      {'  '}<span className="text-cyan-400">"status"</span>: <span className="text-green-400">"ONLINE"</span>,<br/>
      {'  '}<span className="text-cyan-400">"systems_deployed"</span>: <span className="text-orange-400">42</span>,<br/>
      {'  '}<span className="text-cyan-400">"coffee_consumed_l"</span>: <span className="text-orange-400">1337</span>,<br/>
      {'  '}<span className="text-cyan-400">"current_focus"</span>: [<br/>
      {'    '}<span className="text-green-400">"Escalabilidad"</span>,<br/>
      {'    '}<span className="text-green-400">"UX fluida"</span>,<br/>
      {'    '}<span className="text-green-400">"Subir de liga en LoL"</span><br/>
      {'  '}]<br/>
      {'}'}
    </pre>
  )
};

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full glass neon-border rounded-2xl overflow-hidden bg-bg-surface/90 shadow-2xl flex flex-col h-[400px] sm:h-[450px]">
      {/* Terminal Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 bg-zinc-950/80">
        
        {/* Window Controls & Tabs */}
        <div className="flex items-center overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 px-4 py-3 border-r border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-mono text-xs transition-colors border-r border-zinc-800 min-w-max ${
                  isActive ? 'bg-zinc-800/50 text-white' : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? tab.color : 'text-zinc-600'}`} />
                {tab.id}
                {isActive && (
                  <motion.div 
                    layoutId="activeTabIndicator" 
                    className="h-0.5 bg-violet-500 absolute bottom-0 left-0 right-0" 
                    initial={false}
                  />
                )}
              </button>
            );
          })}
        </div>
        
        {/* Status Indicator */}
        <div className="hidden md:flex font-mono text-xs text-zinc-500 items-center gap-2 pr-4 pl-4 py-3 sm:py-0 border-t sm:border-t-0 border-zinc-800">
          <Terminal className="w-3 h-3 text-violet-400" />
          <span>NICOLAS_WORKSPACE // ACTIVO</span>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="flex-1 p-6 sm:p-8 overflow-y-auto relative bg-[#0d0d12]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 p-6 sm:p-8"
          >
            {codeSnippets[activeTab]}
            <motion.div 
              className="w-2 h-4 bg-violet-500 mt-2 inline-block"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
