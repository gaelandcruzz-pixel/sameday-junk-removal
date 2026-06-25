import type { MetadataRoute } from 'next'

const BASE = 'https://samedayjunkremoval.ca'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                      priority: 1,   changeFrequency: 'weekly'  },
    { url: `${BASE}/services`,                        priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/contact`,                         priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/about`,                           priority: 0.5, changeFrequency: 'monthly' },
    { url: `${BASE}/service-areas`,                   priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/service-areas/brampton`,          priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/service-areas/mississauga`,       priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/service-areas/toronto`,           priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/service-areas/vaughan`,           priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/service-areas/oakville`,          priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/service-areas/milton`,            priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/service-areas/etobicoke`,         priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/service-areas/north-york`,        priority: 0.8, changeFrequency: 'monthly' },
  ]
}
