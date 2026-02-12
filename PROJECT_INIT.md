# Project Initialization Documentation

## Overview
This is a React + TypeScript application built with Vite, using shadcn/ui components and Tailwind CSS. It appears to be a landing page for YISU (Yewon International Science University), showcasing the institution's programs, leadership, and campus.

## Tech Stack
- **Framework**: React 18.3.1 with TypeScript 5.8.3
- **Build Tool**: Vite 5.4.19
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 6.30.1
- **State Management**: TanStack React Query 5.83.0
- **Forms**: React Hook Form 7.61.1 with Zod validation
- **Testing**: Vitest 3.2.4 with Testing Library
- **Linting**: ESLint 9.32.0

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components (button, card, dialog, etc.)
│   │   ├── Header.tsx   # Main navigation header
│   │   ├── HeroSection.tsx       # Landing hero banner
│   │   ├── LeadershipSection.tsx # Leadership profiles
│   │   ├── AboutSnapshot.tsx      # About section
│   │   ├── SchoolsPrograms.tsx    # Academic programs
│   │   ├── IndustryPartners.tsx   # Partner organizations
│   │   ├── WhyYISU.tsx            # Value proposition
│   │   ├── Testimonials.tsx       # Student/testimonial section
│   │   ├── NoticesSection.tsx     # Announcements/updates
│   │   ├── CampusSection.tsx      # Campus information
│   │   ├── CTASection.tsx         # Call-to-action
│   │   ├── Footer.tsx             # Site footer
│   │   └── NavLink.tsx            # Navigation link component
│   ├── hooks/
│   │   ├── use-toast.ts           # Toast notifications
│   │   └── use-mobile.tsx         # Mobile detection hook
│   ├── lib/
│   │   └── utils.ts               # Utility functions (cn for classnames)
│   ├── pages/
│   │   ├── Index.tsx              # Main landing page
│   │   └── NotFound.tsx           # 404 page
│   ├── App.tsx                    # Root component with routing
│   ├── main.tsx                   # Application entry point
│   ├── index.css                  # Global styles
│   ├── App.css                    # App-specific styles
│   └── assets/                    # Static assets
├── public/                        # Public static files
├── package.json                   # Dependencies and scripts
├── vite.config.ts                 # Vite configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── components.json                # shadcn/ui component configuration
```

## Available Scripts

```bash
npm run dev          # Start development server (Vite)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # Run ESLint
npm run preview      # Preview production build
npm run test         # Run tests (Vitest)
npm run test:watch   # Run tests in watch mode
```

## Key Components Overview

### Main Layout
- **App.tsx**: Root component providing QueryClient, routing, and toast providers
- **Index.tsx**: Main landing page composing all sections
- **Header.tsx**: Navigation with responsive menu
- **Footer.tsx**: Site footer with links and information

### Content Sections
The landing page is divided into multiple sections:
1. **HeroSection**: Main banner with headline and CTA
2. **LeadershipSection**: Profiles of institution leadership
3. **AboutSnapshot**: Quick overview of the institution
4. **SchoolsPrograms**: Academic programs and departments
5. **IndustryPartners**: Partner logos and organizations
6. **WhyYISU**: Key differentiators and benefits
7. **Testimonials**: Student/faculty testimonials
8. **NoticesSection**: Recent announcements
9. **CampusSection**: Campus information
10. **CTASection**: Final call-to-action

## shadcn/ui Components

The project uses shadcn/ui components located in `src/components/ui/`. These are copy-paste components, not a library. To add new components:
1. Run `npx shadcn@latest add [component-name]`
2. Components are added to `src/components/ui/`

Available UI components include: accordion, alert, avatar, badge, button, calendar, card, carousel, chart, checkbox, dialog, dropdown-menu, form, input, label, navigation-menu, select, separator, sheet, skeleton, slider, switch, table, tabs, toast, tooltip, and more.

## Styling Approach

- Uses **Tailwind CSS** for styling
- **Class Variance Authority (CVA)** for component variants
- **tailwind-merge** with `cn()` utility for merging classes
- **clsx** for conditional classes
- Theme: Dark/light mode support via `next-themes`
- Design tokens defined in `tailwind.config.ts`

## State Management

- **TanStack Query**: For server state management (currently minimal usage)
- React state: For local component state
- React Hook Form: For form handling
- Zod: Schema validation

## Routing

- **React Router DOM**: Client-side routing
- Routes defined in `App.tsx`
- Current routes:
  - `/`: Main landing page (Index)
  - `*`: 404 page (NotFound)

## Testing

- **Vitest**: Test runner
- **Testing Library React**: Component testing
- **jsdom**: DOM environment for tests
- Test files in `src/test/`
- Run `npm run test` to execute tests

## Development Workflow

1. Start dev server: `npm run dev`
2. Make changes to components or pages
3. Hot reload automatically applies changes
4. Run `npm run lint` before committing
5. Run `npm run test` to ensure tests pass
6. Build with `npm run build` for production

## Linting & Type Checking

- **ESLint**: Code linting with React hooks and refresh plugins
- **TypeScript**: Type checking enabled
- Run `npm run lint` to check code quality

## Important Notes

- The project uses **Path Aliases**: `@/` maps to `src/`
- All components use TypeScript
- The application is a Single Page Application (SPA)
- No backend currently - all content is static/frontend
- shadcn/ui components are customized, not installed as a package

## Adding New Features

1. Create new components in `src/components/`
2. Add new pages in `src/pages/`
3. Add routes in `App.tsx`
4. Use existing UI components from `src/components/ui/`
5. Follow Tailwind CSS conventions
6. Maintain TypeScript types
7. Add tests if adding new logic

## Common Patterns

- **Conditional Classes**: Use `cn(baseClass, condition && activeClass)`
- **Form Handling**: Use React Hook Form with Zod schema
- **API Calls**: Use TanStack Query's `useQuery` and `useMutation`
- **Responsive Design**: Use Tailwind's `md:`, `lg:` prefixes
- **Icons**: Use `lucide-react` for consistent icon set