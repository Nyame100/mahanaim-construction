'use client'

import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import CTABand from '@/components/home/CTABand'

interface Article {
  title: string
  date: string
  category: string
  excerpt: string
  gradient: string
}

const articles: Article[] = [
  {
    title: "How Data Center Construction Is Reshaping Africa's Digital Future",
    date: 'April 10, 2026',
    category: 'Technology',
    excerpt: "Africa's infrastructure boom is accelerating demand for carrier-neutral facilities built to meet global Tier-IV standards.",
    gradient: 'bg-gradient-to-br from-green-950 to-purple-900',
  },
  {
    title: 'Green Building Practices We Have Adopted in 2026',
    date: 'March 28, 2026',
    category: 'Sustainability',
    excerpt: 'A look at the sustainable construction methods and materials shaping our projects this year.',
    gradient: 'bg-gradient-to-br from-purple-950 to-purple-800',
  },
  {
    title: 'Inside the Apex Data Hub: A Year in Review',
    date: 'March 12, 2026',
    category: 'Projects',
    excerpt: 'Twelve months on from handover — how the Apex Tier-IV facility has performed against its design benchmarks.',
    gradient: 'bg-gradient-to-br from-green-950 to-green-800',
  },
  {
    title: 'Mahanaim Wins Best Construction Firm 2025 at BuildAfrica Awards',
    date: 'February 18, 2026',
    category: 'Awards',
    excerpt: 'Recognised for our contribution to infrastructure development across Ghana.',
    gradient: 'bg-gradient-to-br from-blue-950 to-blue-800',
  },
  {
    title: 'The Future of Smart Buildings in West Africa',
    date: 'January 30, 2026',
    category: 'Thought Leadership',
    excerpt: 'How IoT and automation are changing what clients expect from modern buildings.',
    gradient: 'bg-gradient-to-br from-slate-950 to-slate-700',
  },
  {
    title: 'Mahanaim at the Ghana Real Estate Summit 2026',
    date: 'January 12, 2026',
    category: 'Events',
    excerpt: "Key takeaways from our participation at this year's flagship property event.",
    gradient: 'bg-gradient-to-br from-green-950 to-green-700',
  },
]

// Set deduplicates values; Array.from converts it back to an array for mapping
const categories = Array.from(new Set(articles.map((a) => a.category)))

export default function NewsAllPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredArticles = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles

  return (
    <>
      <PageHero
        title="News & Insights"
        subtitle="Thought leadership, project stories, industry perspectives and company news from Mahanaim Construction."
        breadcrumb="News & Insights"
        eyebrow="Latest From Us"
      />

      {/* Sticky category filter bar */}
      <div className="bg-white border-b border-gray-200 py-md sticky top-14 z-40">
        <div className="container mx-auto px-lg flex items-center gap-sm flex-wrap">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={[
              'px-lg py-sm font-body text-sm font-medium transition-colors cursor-pointer',
              activeCategory === null
                ? 'bg-brand-green-dark text-white'
                : 'bg-transparent text-brand-charcoal hover:bg-brand-off-white',
            ].join(' ')}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={[
                'px-lg py-sm font-body text-sm font-medium transition-colors cursor-pointer',
                activeCategory === category
                  ? 'bg-brand-green-dark text-white'
                  : 'bg-transparent text-brand-charcoal hover:bg-brand-off-white',
              ].join(' ')}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles grid */}
      <section className="bg-brand-off-white py-xxl">
        <div className="container mx-auto px-lg">
          <div className="grid grid-cols-3 gap-lg">
            {filteredArticles.map((article) => (
              <div
                key={article.title}
                className="bg-white hover:-translate-y-1 transition-transform flex flex-col"
              >
                {/* Thumbnail */}
                <div className={`relative h-48 ${article.gradient}`}>
                  <span className="absolute bottom-3 left-3 px-3 py-1 bg-brand-purple-mid text-white font-body text-xs uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-lg flex flex-col gap-3 flex-1">
                  <p className="font-body text-xs text-brand-charcoal/50 uppercase tracking-wider">
                    {article.date}
                  </p>
                  <h3 className="font-display text-xl leading-snug text-brand-charcoal">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-brand-charcoal/55 leading-relaxed">
                    {article.excerpt}
                  </p>
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
