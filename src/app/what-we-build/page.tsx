'use client'

import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import CTABand from '@/components/home/CTABand'

interface Project {
  title: string
  location: string
  sector: string
  gradient: string
}

const projects: Project[] = [
  { title: 'Apex Tier-IV Data Hub',       location: 'Lagos',      sector: 'Data Center',    gradient: 'bg-gradient-to-br from-green-950 to-green-800'   },
  { title: 'Greenview Estate',            location: 'Accra',      sector: 'Residential',    gradient: 'bg-gradient-to-br from-purple-950 to-purple-800'  },
  { title: 'Crown Office Park',           location: 'Takoradi',   sector: 'Commercial',     gradient: 'bg-gradient-to-br from-slate-900 to-slate-700'    },
  { title: 'Unity Medical Centre',        location: 'Kumasi',     sector: 'Healthcare',     gradient: 'bg-gradient-to-br from-stone-950 to-amber-900'    },
  { title: 'Northern Corridor Road',      location: 'Tema',       sector: 'Infrastructure', gradient: 'bg-gradient-to-br from-indigo-950 to-indigo-800'  },
  { title: 'Meridian Warehouse Complex',  location: 'Ogun State', sector: 'Industrial',     gradient: 'bg-gradient-to-br from-slate-950 to-slate-700'    },
  { title: 'Pinnacle Academy Campus',     location: 'Kumasi',     sector: 'Education',      gradient: 'bg-gradient-to-br from-green-950 to-green-700'    },
  { title: 'Harbour View Mall',           location: 'Accra',      sector: 'Commercial',     gradient: 'bg-gradient-to-br from-purple-950 to-purple-700'  },
]

// Set deduplicates values; Array.from converts it back to an array for mapping
const sectors = Array.from(new Set(projects.map((p) => p.sector)))

// Diagonal texture — no Tailwind utility exists for repeating diagonal lines
const diagonalPattern: React.CSSProperties = {
  backgroundImage:
    'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 12px)',
}

export default function WhatWeBuildPage() {
  const [activeSector, setActiveSector] = useState<string | null>(null)

  const filteredProjects = activeSector
    ? projects.filter((p) => p.sector === activeSector)
    : projects

  return (
    <>
      <PageHero
        title="What We Build"
        subtitle="A portfolio of complex, impactful projects delivered across residential, commercial, industrial and critical infrastructure sectors."
        breadcrumb="What We Build"
        eyebrow="Our Portfolio"
      />

      {/* Sticky sector filter bar */}
      <div className="bg-white border-b border-gray-200 py-md sticky top-14 z-40">
        <div className="container mx-auto px-lg flex items-center gap-sm flex-wrap">
          <button
            type="button"
            onClick={() => setActiveSector(null)}
            className={[
              'px-lg py-sm font-body text-sm font-medium transition-colors cursor-pointer',
              activeSector === null
                ? 'bg-brand-green-dark text-white'
                : 'bg-transparent text-brand-charcoal hover:bg-brand-off-white',
            ].join(' ')}
          >
            All
          </button>

          {sectors.map((sector) => (
            <button
              key={sector}
              type="button"
              onClick={() => setActiveSector(sector)}
              className={[
                'px-lg py-sm font-body text-sm font-medium transition-colors cursor-pointer',
                activeSector === sector
                  ? 'bg-brand-green-dark text-white'
                  : 'bg-transparent text-brand-charcoal hover:bg-brand-off-white',
              ].join(' ')}
            >
              {sector}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <section className="bg-brand-off-white py-xxl">
        <div className="container mx-auto px-lg">
          <div className="grid grid-cols-3 gap-md">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className={`relative overflow-hidden min-h-56 ${project.gradient}`}
              >
                {/* Diagonal line texture */}
                <div className="absolute inset-0" style={diagonalPattern} />

                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Card content */}
                <div className="absolute bottom-0 left-0 right-0 p-lg flex flex-col gap-2">
                  <span className="self-start px-3 py-1 bg-brand-purple-mid text-white font-body text-xs uppercase tracking-wider">
                    {project.sector}
                  </span>
                  <h3 className="font-display text-2xl leading-tight text-white">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-white/60">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
