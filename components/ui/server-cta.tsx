'use client';

import React from 'react';
import { Button } from './button';
import { ArrowRight, Zap } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

export function ServerCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        {/* Animated background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#1B8675] via-[#20A085] to-[#1B8675] rounded-xl blur opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000"></div>
        
        {/* Main CTA container */}
        <div className="relative bg-gradient-to-r from-[#1B8675] to-[#20A085] rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full p-2">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div className="text-white">
              <p className="font-semibold text-sm">Ready to get started?</p>
              <p className="text-xs opacity-90">Launch your server today</p>
            </div>
          </div>
          
          <Button 
            asChild
            className="w-full mt-3 bg-white text-[#1B8675] hover:bg-gray-100 font-semibold shadow-lg"
          >
            <a 
              href="https://lagless.gg/pricing?utm_source=docs&utm_medium=cta&utm_campaign=server_purchase" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2"
              onClick={() => trackCTAClick('floating_cta', 'server_purchase')}
            >
              <span>Get Your Server</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
} 