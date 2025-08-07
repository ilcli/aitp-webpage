# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workflow Instructions

When working on any task in this repository, follow these steps:

1. **First think through the problem** - Read the codebase for relevant files and write a plan to tasks/todo.md
2. **Create a todo list** - The plan should have a list of todo items that you can check off as you complete them
3. **Check in before starting** - Before beginning work, verify the plan with the user
4. **Work through tasks** - Begin working on the todo items, marking them as complete as you go
5. **Provide high-level explanations** - At every step, give a high-level explanation of what changes were made
6. **Keep changes simple** - Make every task and code change as simple as possible. Avoid massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7. **Review and document** - Finally, add a review section to the todo.md file with a summary of the changes made and any other relevant information

## Project Overview

This is a landing page project for AITP (AI Training & Process) - a consultancy focused on AI automation and training solutions. The project is designed to be a clean, modern website showcasing services and capturing leads.

## Tech Stack

- **Framework**: Next.js 14+ (App Router optional)
- **Styling**: TailwindCSS 3.x
- **Language**: TypeScript
- **Features**: Responsive design (mobile-first), Dark/light mode toggle
- **Deployment**: Vercel

## Project Structure

Currently, this appears to be a new/empty repository with only a README.md file containing the project specifications. The actual implementation has not yet been started.

## Development Commands

Since no package.json or build configuration exists yet, standard Next.js commands will apply once the project is initialized:

```bash
# Initialize Next.js project (when ready)
npx create-next-app@latest . --typescript --tailwind --app

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Page Architecture (From Requirements)

The landing page should include these sections in order:
1. **Navbar** - Sticky with logo, 3 links, "Let's Talk" CTA, dark mode toggle
2. **Hero Section** - Bold headline, subheading, CTA button, optional AI animation
3. **Logos/Social Proof** - Client logos with "Trusted by teams working in..." heading
4. **Features/Services** - 3-6 value cards covering AI Automation, Training & Change, No-Code Systems
5. **Mid-page CTA** - Block quote/image with action-focused messaging
6. **Footer** - Contact info, dark mode toggle, copyright

## Design Guidelines

- Use clean layouts with grid/flexbox and ample padding
- Typography: Inter, Open Sans, or Manrope from Google Fonts
- Buttons: Pill-shaped with hover shadows, fully responsive
- Soft gradients or light glass effects where appropriate
- Mobile-first responsive design approach

## Testing Requirements

- Manual testing across mobile, tablet, desktop viewports
- Lighthouse performance and accessibility audits
- Vercel preview deployments for review

## Stretch Goals

- Claude integration for dynamic content generation
- Client dashboard functionality
- Blog/use cases section