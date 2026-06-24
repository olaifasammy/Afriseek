# Frontend Architecture Guidelines

This directory adheres to a **Mobile-First / High-Density Desktop** design philosophy.

## Design Principles
1. **Mobile-First Layout:** Default styles (no prefix) must target mobile viewports. Use responsive prefixes (`sm:`, `md:`, `lg:`, etc.) to enhance layouts for larger screens.
2. **Productivity-First Interaction:** For administrative and data-intensive components, ensure desktop views provide high-density information architecture (e.g., tables, split-panes) that remains accessible via simplified interfaces on mobile.
3. **Consistency:** All new components must use the predefined Tailwind breakpoints. Do not introduce arbitrary screen sizes.

## Tailwind Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Mandatory Implementation Pattern
All new pages/views **MUST** use the `ResponsivePageTemplate` (`frontend/src/shared/templates/ResponsivePageTemplate.tsx`) as the base wrapper. This ensures consistent responsive behavior for page headers, padding, and layout stacking.
