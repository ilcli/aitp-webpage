// Re-export from centralized links config
export { createScheduleUrl, EXTERNAL_LINKS } from './links';
import { createScheduleUrl } from './links';

// Default schedule URL  
export const SCHEDULE_URL = createScheduleUrl();

export const siteConfig = {
  name: 'Synqer.ai',
  description: 'Smart Municipal Solutions - Transform outdated municipal systems into smart, automated solutions.',
  url: 'https://synqer.ai',
  scheduleUrl: SCHEDULE_URL,
  createScheduleUrl,
} as const;