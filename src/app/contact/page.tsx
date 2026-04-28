'use client'

import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/constants/site'

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  projectType: string
  message: string
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
}

const projectTypes = [
  'Residential',
  'Commercial',
  'Data Center',
  'Healthcare',
  'Industrial',
  'Infrastructure',
  'Other',
]

const offices = [
  { city: 'Tema HQ',        address: '14 Industrial Area, Tema',       phone: '+233 302 000 001' },
  { city: 'Accra Office',   address: '5 Ring Road Central, Accra',     phone: '+233 302 000 002' },
  { city: 'Takoradi Office', address: '8 Harbour Road, Takoradi',      phone: '+233 312 000 003' },
]

// Shared input class — extracted to avoid repeating the same long string inline
const inputClass =
  'w-full border border-gray-200 px-md py-sm font-body text-sm focus:outline-none focus:border-brand-green-mid transition-colors'

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>(initialFormState)

  // Single handler for all text-based inputs and textarea
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Tell us about your project and we will put you in touch with the right team."
        breadcrumb="Contact"
        eyebrow="Get In Touch"
      />

      <section className="bg-white py-xxl">
        <div className="container mx-auto px-lg grid grid-cols-5 gap-xxl">

          {/* Left — contact form */}
          <div className="col-span-3">
            <div className="flex items-center gap-3 mb-md">
              <span className="block w-8 h-px bg-brand-green-mid" />
              <span className="font-body text-brand-green-mid text-sm uppercase tracking-widest">
                Send Us a Message
              </span>
            </div>
            <h2 className="font-display text-5xl leading-none text-brand-charcoal mb-xxl">
              Start a Conversation
            </h2>

            <form className="flex flex-col gap-md" onSubmit={(e) => e.preventDefault()}>

              {/* Name row */}
              <div className="grid grid-cols-2 gap-md">
                <div className="flex flex-col gap-sm">
                  <label className="font-body text-xs uppercase tracking-widest text-brand-charcoal/60">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-sm">
                  <label className="font-body text-xs uppercase tracking-widest text-brand-charcoal/60">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-sm">
                <label className="font-body text-xs uppercase tracking-widest text-brand-charcoal/60">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-sm">
                <label className="font-body text-xs uppercase tracking-widest text-brand-charcoal/60">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Project type */}
              <div className="flex flex-col gap-sm">
                <label className="font-body text-xs uppercase tracking-widest text-brand-charcoal/60">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formState.projectType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-sm">
                <label className="font-body text-xs uppercase tracking-widest text-brand-charcoal/60">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-brand-green-dark text-white px-xxl py-md font-body font-semibold text-sm uppercase tracking-wider hover:bg-brand-green-mid transition-colors"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

          {/* Right — office locations */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-md">
              <span className="block w-8 h-px bg-brand-green-mid" />
              <span className="font-body text-brand-green-mid text-sm uppercase tracking-widest">
                Our Offices
              </span>
            </div>
            <h2 className="font-display text-5xl leading-none text-brand-charcoal mb-xxl">
              Find Us
            </h2>

            {offices.map((office) => (
              <div
                key={office.city}
                className="border-t-2 border-brand-purple-mid p-xl mb-lg bg-brand-off-white"
              >
                <p className="font-display text-xl text-brand-charcoal mb-sm">{office.city}</p>
                <p className="font-body text-sm text-brand-charcoal/60">{office.address}</p>
                <p className="font-body text-sm text-brand-charcoal/60">{office.phone}</p>
              </div>
            ))}

            {/* Email card */}
            <div className="border-t-2 border-brand-green-mid p-xl bg-brand-off-white">
              <p className="font-body text-xs uppercase tracking-widest text-brand-charcoal/60 mb-sm">
                Email Us
              </p>
              <p className="font-display text-xl text-brand-charcoal">{siteConfig.email}</p>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
