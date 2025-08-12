/**
 * Centralized Links Configuration
 * Update all links from this single file to maintain consistency across the codebase
 */

export const EXTERNAL_LINKS = {
  // Calendly & Scheduling
  calendly: {
    baseUrl: "https://calendly.com/synqer-ai",
    // Auto-generates URLs with UTM parameters via createScheduleUrl()
  },

  // Contact Information
  contact: {
    email: "hello@synqer.ai",
    legalEmail: "legal@synqer.ai",
    privacyEmail: "privacy@synqer.ai",
    phone: "+972 52-288-3402",
    phoneDisplay: "+972 52-288-3402",
    address: "Tel Aviv, Israel",
  },

  // Social Media & Professional
  social: {
    linkedin: "#", // Placeholder - Update with actual LinkedIn URL
    twitter: "#", // Placeholder - Update with actual Twitter/X URL
    github: "#", // Placeholder - Update with actual GitHub URL
  },

  // Government & Compliance
  government: {
    innovationAuthority: "https://innovationisrael.org.il",
    gdprInfo: "https://gdpr-info.eu",
    israelPrivacyLaw:
      "https://www.gov.il/en/departments/the_privacy_protection_authority",
  },

  // Technology Partners
  partners: {
    whatsappBusiness: "https://business.whatsapp.com",
    azure: "https://azure.microsoft.com",
    railway: "https://railway.app",
    meta: "https://developers.facebook.com/products/whatsapp-business/",
  },

  // Legal Documents (can be internal or external)
  legal: {
    privacyPolicy: "/privacy",
    termsOfService: "/terms",
    cookiePolicy: "/cookies",
    accessibility: "/accessibility",
    security: "/security",
    compliance: "/compliance",
  },

  // Internal Navigation
  internal: {
    home: "/",
    services: "/services",
    about: "/about",
    contact: "/contact",
    // Hebrew variants
    homeHe: "/he",
    servicesHe: "/he/services",
    aboutHe: "/he/about",
    contactHe: "/he/contact",
  },

  // Demo & Resources
  resources: {
    interactiveDemo: "https://demo.synqer.ai", // When available
    caseStudies: "/case-studies", // Future
    whitepapers: "/resources", // Future
  },
} as const;

/**
 * UTM Campaign Configuration
 * Customize UTM parameters for different link sources
 */
export const UTM_CAMPAIGNS = {
  "hero-section": {
    source: "hero-section",
    medium: "website",
    campaign: "consultation",
  },
  "services-section": {
    source: "services-section",
    medium: "website",
    campaign: "consultation",
  },
  "cta-section": {
    source: "cta-section",
    medium: "website",
    campaign: "consultation",
  },
  footer: { source: "footer", medium: "website", campaign: "consultation" },
  navbar: { source: "navbar", medium: "website", campaign: "consultation" },
  "funding-consultation": {
    source: "funding-consultation",
    medium: "website",
    campaign: "consultation",
  },
  website: { source: "website", medium: "website", campaign: "consultation" },
  // Legacy support
  hero: { source: "hero-section", medium: "website", campaign: "consultation" },
  services: {
    source: "services-section",
    medium: "website",
    campaign: "consultation",
  },
  cta: { source: "cta-section", medium: "website", campaign: "consultation" },
} as const;

/**
 * Creates a properly formatted Calendly URL with UTM parameters
 * Supports both new campaign-based approach and legacy direct parameter approach
 */
export function createScheduleUrl(
  sourceOrParams: keyof typeof UTM_CAMPAIGNS | string = "cta",
  medium?: string,
  campaign?: string,
  additionalParams?: Record<string, string>
): string {
  const url = new URL(EXTERNAL_LINKS.calendly.baseUrl);

  // Handle legacy direct parameter approach (for backwards compatibility)
  if (medium && campaign) {
    url.searchParams.set("utm_source", sourceOrParams as string);
    url.searchParams.set("utm_medium", medium);
    url.searchParams.set("utm_campaign", campaign);
  } else {
    // Handle new campaign-based approach
    const campaignKey = sourceOrParams as keyof typeof UTM_CAMPAIGNS;
    const campaignConfig = UTM_CAMPAIGNS[campaignKey] || UTM_CAMPAIGNS["cta"];

    url.searchParams.set("utm_source", campaignConfig.source);
    url.searchParams.set("utm_medium", campaignConfig.medium);
    url.searchParams.set("utm_campaign", campaignConfig.campaign);
  }

  // Add any additional parameters
  if (additionalParams) {
    Object.entries(additionalParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  return url.toString();
}

/**
 * Helper function to get contact email with subject pre-filled
 */
export function createContactEmail(subject?: string, body?: string): string {
  const url = new URL(`mailto:${EXTERNAL_LINKS.contact.email}`);

  if (subject) {
    url.searchParams.set("subject", subject);
  }

  if (body) {
    url.searchParams.set("body", body);
  }

  return url.toString();
}

/**
 * Type definitions for better TypeScript support
 */
export type ExternalLink = typeof EXTERNAL_LINKS;
export type UTMCampaign = keyof typeof UTM_CAMPAIGNS;
