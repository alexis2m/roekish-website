'use client';
import React from 'react';
import { ArrowRight, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Toaster } from 'sonner';
import OpenSeats from './components/openSeats';
import Process from './components/process';
import TextTransition, { presets } from 'react-text-transition';

export default function Home() {
  const TEXTS = ['startup', 'TPE', 'PME'];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const BgLightGrid5 = () => {
    return (
      <div className="relative h-full w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
    );
  };

  const BgDarkGrid3 = () => {
    return (
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
    );
  };

  const [preview, setPreview] = useState<null | React.ReactNode>(
    BgLightGrid5()
  );
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const resetBg = () => {
    setPreview(null);
    setTheme('light');
  };

  return (
    <>
      <Toaster />
      <div className={`${theme}`}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          {preview ? preview : null}
        </div>
        <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
          <header className="flex items-center justify-between py-8">
            <div />
            <nav className="flex gap-6">
              <a
                href="https://twitter.com/alexis2md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Twitter
                  className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="https://github.com/alexis2m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Github
                  className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                  strokeWidth={1.5}
                />
              </a>
            </nav>
          </header>
          <div className="pt-8">
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <div className="mb-8 flex">
                <a href="#openseats" className="inline-flex">
                  <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                    <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                      Des places 💺
                      <span className="inline-flex items-center pl-2 text-black dark:text-white">
                        sont ouvertes{' '}
                        <ArrowRight
                          className="pl-0.5 text-black dark:text-white"
                          size={16}
                        />
                      </span>
                    </div>
                  </span>
                </a>
              </div>
              <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
                Développeurs de logiciels pour{' '}
                <span className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                  <TextTransition
                    className='className="inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-black dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400'
                    springConfig={presets.default}
                  >
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                </span>
              </h2>
              <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
                Transformons votre startup avec des outils fiables, et une
                équipe performante. Nous développons et maintenons vos logiciels
                en <span className="cursor-wait opacity-70">intégrant</span>{' '}
                votre équipe.
              </p>
              <div className="mt-10 flex gap-4">
                <a
                  href="https://tally.so/r/nW5R4k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button>
                    Passer le questionnaire{' '}
                    <ArrowRight className="pl-0.5" size={16} />
                  </Button>{' '}
                </a>
                <a
                  href="https://cal.com/alexismaison/discutons-de-votre-projet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button variant="secondary">Prendre rendez-vous</Button>
                </a>
              </div>
            </div>
          </div>
          <section id="process">
            <Process />
          </section>
          <section id="openseats">
            <OpenSeats />
          </section>

          <footer>
            <div className="flex items-center justify-center py-8">
              <span className="text-sm text-neutral-800 dark:text-neutral-200">
                Créé par
                <a
                  href="https://alexismaison.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-neutral-950 dark:text-neutral-100"
                >
                  Alexis Maison
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
