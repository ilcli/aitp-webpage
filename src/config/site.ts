const BASE_SCHEDULE_URL = 'https://calendly.com/elifishbakh/30min';

// Create schedule URL with UTM parameters
export const createScheduleUrl = (source: string = 'website', medium: string = 'cta', campaign: string = 'consultation') => {
  const url = new URL(BASE_SCHEDULE_URL);
  url.searchParams.set('utm_source', source);
  url.searchParams.set('utm_medium', medium);
  url.searchParams.set('utm_campaign', campaign);
  return url.toString();
};

// Default schedule URL
export const SCHEDULE_URL = createScheduleUrl();

export const siteConfig = {
  name: 'Synqer.ai',
  description: 'Smart Municipal Solutions - Transform outdated municipal systems into smart, automated solutions.',
  url: 'https://synqer.ai',
  scheduleUrl: SCHEDULE_URL,
  createScheduleUrl,
} as const;