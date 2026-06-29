import type { MetadataRoute } from 'next'

const BASE = 'https://durajunk.ca'

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
    { url: `${BASE}/blog`,                                                          priority: 0.7, changeFrequency: 'weekly'  },
    { url: `${BASE}/blog/how-much-does-junk-removal-cost-brampton`,                priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/blog/5-signs-time-to-hire-junk-removal`,                       priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/blog/estate-cleanout-guide-brampton`,                          priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/blog/what-happens-to-your-junk`,                               priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/blog/garage-cleanout-tips-brampton`,                           priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/blog/carpet-removal-vs-junk-removal`,                          priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/blog/mattress-disposal-brampton`,                               priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/blog/appliance-removal-brampton`,                               priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/blog/renovation-debris-removal-gta`,                            priority: 0.7, changeFrequency: 'monthly' },
  ]
}
