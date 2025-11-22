'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeIcon } from '@radix-ui/react-icons';
import { BookOpen, Gamepad2, Wifi, SignalLow, Fan } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>

      <main className="min-h-screen">
        <div className="bg-gradient-to-b from-primary/5 via-primary/10 to-background dark:from-[#09080a] dark:via-[#09080a]/90 dark:to-background relative">
          {/* Animated background grid */}
          <div className="absolute inset-0 bg-grid-slate-900/5 [mask-image:linear-gradient(0deg,black,transparent)]"></div>
          
          {/* Static icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-1/4 top-1/4 opacity-20 dark:opacity-30">
              <Gamepad2 className="h-16 w-16 text-primary rotate-12" />
            </div>
            <div className="absolute right-1/4 top-1/3 opacity-20 dark:opacity-30">
              <Wifi className="h-12 w-12 text-primary -rotate-12" />
            </div>
            <div className="absolute left-1/3 bottom-1/4 opacity-20 dark:opacity-30">
              <SignalLow className="h-14 w-14 text-primary rotate-45" />
            </div>
            <div className="absolute right-1/5 bottom-1/3 opacity-20 dark:opacity-30">
              <Fan className="h-10 w-10 text-primary" />
            </div>
          </div>

          <div className="relative overflow-hidden pt-24 pb-20">
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                {/* 404 Error Icon */}
                <div className="flex justify-center mb-8 relative">
                  <div className="relative">
                    <div className="rounded-full p-8 bg-primary/10 backdrop-blur-sm border border-primary/20">
                      <Gamepad2 className="h-20 w-20 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl mb-6 animate-fade-in">
                  <span className="inline-block">404</span>
                  <span className="inline-block mx-4 text-primary">|</span>
                  <span className="inline-block">Connection Lost</span>
                </h1>

                <div className="relative">
                  <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-8">
                    Oops! This page seems to be experiencing some lag.
                    <br/>
                    Don't worry, our network team is on it. Let's get you back online.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="flex items-center gap-2 transition-transform hover:scale-105 hover:shadow-lg group"
                    asChild
                  >
                    <Link href="/">
                      <HomeIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
                      <span className="relative">
                        Return Home
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-foreground/40 scale-x-0 group-hover:scale-x-100 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex items-center gap-2 transition-transform hover:scale-105 hover:shadow-lg group"
                    asChild
                  >
                    <Link href="/">
                      <BookOpen className="h-5 w-5 transition-transform group-hover:rotate-12" />
                      <span className="relative">
                        Browse Documentation
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/40 scale-x-0 group-hover:scale-x-100 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}