'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/constants/site'

export default function Sectors() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSector = siteConfig.sectors[activeIndex]

  return (
    <section className="bg-brand-green-dark text-white py-xxl">
      <div className="container mx-auto px-lg">

        {/* Section header */}
        <div className="mb-xxl">
          <div className="flex items-center gap-3 mb-md">
            <span className="block w-8 h-px bg-brand-green-light" />
            <span className="font-body text-brand-green-light text-sm uppercase tracking-widest">
              Markets We Serve
            </span>
          </div>
          <h2 className="font-display text-5xl leading-none">Our Sectors</h2>
        </div>

        {/* Two-column layout — tab list left, detail panel right */}
        <div className="grid grid-cols-3 gap-xxl">

          {/* Tab list */}
          <div className="col-span-1 flex flex-col">
            {siteConfig.sectors.map((sector, index) => (
              <button
                key={sector.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  'w-full flex justify-between cursor-pointer items-center py-md px-lg border-b border-white/10 transition-colors',
                  index === activeIndex
                    ? 'text-brand-green-light border-l-2 border-brand-green-light pl-md'
                    : 'text-white/60 hover:text-white',
                ].join(' ')}
              >
                <span className="font-body text-sm">{sector.title}</span>
                <span className="font-body text-xs text-white/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="col-span-2 bg-white/5 border-t-2 border-brand-green-light p-xxl">
            <h3 className="font-display text-4xl leading-none mb-lg">
              {activeSector.title}
            </h3>
            <p className="font-body text-white/70 leading-relaxed mb-xxl">
              {activeSector.description}
            </p>

            {/* Capability pills */}
            <div className="flex flex-wrap gap-sm">
              {activeSector.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="border border-white/20 px-md py-xs font-body text-sm text-white/70 "
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
