# Design Direction

## Design Goals

Portfolify should feel professional, focused, modern, clear, trustworthy, and useful. Avoid unnecessary visual complexity.

## Target Experience

A student or developer should understand what to do next without needing technical knowledge. The builder should guide them through entering information, choosing a template, customizing appearance, and previewing — with no friction or guesswork.

## Information Architecture

Main product areas:

```
Landing → Create → Editor → Preview
```

Later:

```
Dashboard → Portfolio → Publish
```

## Visual Principles

- Strong hierarchy
- Readable typography
- Deliberate spacing
- Clear actions
- Restrained use of visual effects
- Consistent components
- Meaningful contrast

## Avoid Generic AI-Generated Design Patterns

The product should avoid:

- Excessive gradients
- Unnecessary glassmorphism
- Excessive blur
- Decorative 3D elements without purpose
- Excessive animation
- Oversized typography without hierarchy
- Random card grids
- Visual effects that don't improve usability

These are not banned forever — the principle is that every visual decision should have a purpose.

## Typography

No final font is locked in yet. Typography principles:

- Readable
- Strong hierarchy
- Consistent scale
- Appropriate line height
- Suitable for professional portfolios

## Color

No final colors are locked in yet. The system should use a controlled color system rather than arbitrary colors throughout the interface.

## Components

Expected component categories:

- Navigation
- Buttons
- Inputs
- Textareas
- Cards
- Dialogs/modals
- Editor controls
- Preview sections
- Template controls

No implementation files are prescribed here.

## Responsive Design

Expectations for mobile, tablet, and desktop. Both the builder and generated portfolios need responsive behavior.

## Accessibility

- Semantic HTML
- Keyboard navigation
- Visible focus
- Labels
- Accessible form errors
- Sufficient contrast
- Meaningful alt text
- Reduced-motion consideration

## Animation

Animation should communicate state, provide feedback, improve transitions, and support hierarchy. Avoid animation purely for decoration.

## Empty/Error/Loading States

These must be intentionally designed. Examples:

- No projects yet
- No experience
- Invalid form
- Failed operation
- Missing portfolio

## Generated Portfolio Quality

The final portfolio produced by Portfolify should look professional even when the user provides minimal content. However, do not hide poor or missing user data through excessive UI decoration.
