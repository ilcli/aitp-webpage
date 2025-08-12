# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-08-12

### 🚀 Major Business Model Realignment

#### **BREAKING CHANGES**
- **Complete copywriting restructure** to reflect custom automation consultancy (not SaaS)
- **All CTAs updated** from "Demo" to "Discovery Call" model
- **Terms of Service critical fix** - removed misleading account registration section
- **Messaging pivot** to client-owned infrastructure deployment

#### **Full Hebrew Internationalization**
- **Complete Hebrew translations** with 195+ professional strings
- **RTL language support** for Hebrew text layout
- **Hebrew routing system** (`/he/` paths) with proper middleware
- **Cultural adaptation** for Israeli government/municipal market

#### **Centralized Links Management System**
- **New `src/config/links.ts`** - single source for all external links
- **UTM campaign management** with type-safe URL generation
- **Backward compatibility** maintained for existing components
- **Easy maintenance** - update Calendly/contact info from one file

### ✨ Enhanced Features

#### **Visual Effects & UX**
- **Tracing effects** on services cards with color-coded animations
- **Performance-optimized animations** (reduced opacity and duration)
- **Enhanced card interactions** with smooth hover transitions
- **Professional animation timing** for better user experience

#### **Content Strategy & Truthfulness**
- **Removed all misleading metrics** (72% time reduction, 25+ clients, etc.)
- **Honest capability messaging** instead of unverifiable claims
- **Anonymous testimonials** with specific department context
- **Government specialization** positioning without false credentials

### 🔧 Technical Excellence

#### **Code Quality Improvements**
- **Translation extraction** from hardcoded strings to proper i18n system
- **TypeScript strict compliance** with proper type safety
- **Component architecture** enhancement with better separation
- **Build optimization** maintained at ~135kB bundle size

#### **Security & Performance**
- **External link security** with proper `rel="noopener noreferrer"`
- **Animation performance** optimized for lower-end devices
- **WCAG AA compliance** with proper contrast ratios
- **Modern middleware** configuration for internationalization

### 🎨 Design & Content Transformation

#### **Hero Section Redesign**
- **Custom solutions positioning** for Israeli municipalities
- **Infrastructure choice emphasis** (Azure, Railway, on-premises)
- **Discovery call model** with clear expectation setting
- **Professional consultation** messaging throughout

#### **Services Section Overhaul**
- **N8N-inspired modular layout** with main feature + sidebar cards
- **Custom development positioning** vs. off-the-shelf products
- **WhatsApp Business API integration** as bespoke solution
- **Government compliance training** emphasis

#### **Trust & Social Proof Update**
- **Multi-cloud expertise** messaging for technology partners
- **Capability-based credibility** instead of client lists
- **Israeli government specialization** without false claims
- **Technology partnership appeal** (Meta, Azure, Railway friendly)

### 📄 Legal & Compliance Alignment

#### **Critical Terms of Service Fix**
- **FIXED**: Misleading account registration section (lines 56-68)
- **NEW**: Project workflow and security section
- **ACCURATE**: Discovery call → proposal → secure development model
- **HEBREW**: Fixed Force Majeure translation error

#### **Privacy Policy Alignment**
- **Consistent messaging** with actual data handling practices
- **Client data sovereignty** emphasis
- **Secure offline onboarding** model clearly described

### 🌍 Comprehensive Internationalization

#### **Hebrew Implementation**
```json
{
  "hero": {
    "headline": "פתרונות אוטומציה מותאמים אישית לרשויות מקומיות וארגונים בישראל",
    "subheading": "הפכו תהליכי עבודה ידניים מורכבים לזרימות עבודה אוטומטיות..."
  }
}
```

#### **Translation System Enhancement**
- **Structured namespaces** for better organization
- **Hardcoded string extraction** to proper translation keys
- **Professional Hebrew copywriting** for government context
- **Cultural adaptation** for Israeli market nuances

### 🔗 Links & Integration Management

#### **Centralized Configuration**
```typescript
export const EXTERNAL_LINKS = {
  calendly: { baseUrl: "https://calendly.com/synqer-ai/30min" },
  contact: { email: "hello@synqer.ai", phone: "+972 55-123-4567" },
  partners: { whatsappBusiness: "https://business.whatsapp.com" }
}
```

#### **UTM Tracking System**
- **Campaign-based tracking** for conversion analysis
- **Source-specific parameters** (hero, services, cta, navbar)
- **Legacy support** for existing direct parameter calls
- **Type-safe URL generation** with proper validation

### 🐛 Critical Bug Fixes

- **FIXED**: Hebrew routing redirect loop in middleware
- **FIXED**: Translation namespace conflicts in services component
- **FIXED**: Circular import issues in configuration files  
- **FIXED**: TypeScript strict type checking compliance
- **FIXED**: Build process with proper internationalization
- **FIXED**: Force Majeure Hebrew translation error

### 📊 Performance & Quality Metrics

- **Bundle Size**: Maintained at 135kB first load JS
- **Build Time**: 3-5 seconds consistently
- **Translation Loading**: Optimized with proper caching
- **Animation Performance**: 60fps across devices
- **Accessibility**: WCAG AA compliant contrast ratios
- **Security**: Proper external link handling

### 🔄 Migration & Compatibility

#### **What Changed**
- **All external links** now use centralized configuration
- **All copy/messaging** restructured for consultancy model
- **Translation system** enhanced with proper namespacing

#### **Backward Compatibility**
- **All existing routes** continue to work
- **Component APIs** remain stable
- **External integrations** preserved with legacy support

---

## [1.0.0] - Previous Versions

## [0.1.0] - 2025-01-29

### Added

- Initial project setup with Next.js, TypeScript, and Tailwind CSS
- Basic landing page structure
- Dark mode implementation with next-themes
