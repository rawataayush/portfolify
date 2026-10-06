# Architecture

## Architecture Goals

- Maintainability
- Separation of concerns
- Reusable components
- Template independence
- Clear data flow
- Future extensibility

## V1 Architecture

```
User
↓
Editor
↓
Portfolio State
↓
Shared Portfolio Data
↓
Template
↓
Live Preview
```

- **User:** Interacts with the landing page and the editor.
- **Editor:** Collects and edits portfolio information.
- **Portfolio State:** The current state of the portfolio in the React app.
- **Shared Portfolio Data:** A single data structure used across the editor and templates.
- **Template:** Renders the shared data in a specific visual style.
- **Live Preview:** The editor's changes are reflected immediately because the preview consumes the same data.

## Portfolio Data Model

Conceptual structure:

```
portfolio
├── personal
├── about
├── skills
├── projects
├── experience
├── education
├── socialLinks
└── settings
```

This is a conceptual model. Implementation details may evolve as the editor and templates land.

## Content vs Presentation

Portfolio content should not be hardcoded into templates. Templates should consume portfolio data.

```
Portfolio data → Template A
The same data → Template B
```

Users should not have to recreate content when changing templates.

## State Management

For V1, portfolio state will be managed within the React application. Do not prematurely introduce Redux or another state-management library unless complexity later justifies it.

## Persistence

V1: React state ↔ localStorage. localStorage is temporary V1 persistence, not the final architecture.

## Component Architecture

Intended separation:

- **Pages** — route-level views (landing, create, editor, preview, templates)
- **Editor components** — section editors for personal info, about, skills, projects, etc.
- **Preview components** — render the portfolio without the editor UI
- **Common UI** — buttons, inputs, cards, dialogs, navigation
- **Templates** — consume shared portfolio data (e.g., TemplateOne)
- **Context/state** — PortfolioContext providing portfolio state and actions
- **Utilities** — helpers (validation, storage, formatting)

Do not prescribe dozens of components that do not yet exist.

## Routing

Intended initial routes:

- `/` — Landing page
- `/create` — Create portfolio flow
- `/editor` — Portfolio editor
- `/preview` — Dedicated preview
- `/templates` — Template selection

Routing may evolve.

## Template Architecture

Templates should consume a common portfolio data structure. Adding Template B should not require rewriting Template A or the editor.

## Future Architecture

V1: React + localStorage.

V3 direction:

```
React
↓
API
↓
Node.js / Express
↓
MongoDB
```

This is a future direction, not current implementation.

## Architectural Risks

- Tightly coupled editor/template logic
- Inconsistent data structures between templates
- Oversized components
- Premature abstraction
- State becoming difficult to manage as features grow
- Template-specific assumptions leaking into shared data

## Architecture Rules

- Do not hardcode user portfolio content into templates.
- Do not make templates responsible for editor state.
- Do not duplicate portfolio data structures between templates.
- Avoid unnecessary global state.
- Prefer simple architecture until complexity requires more.
- Keep future extensibility in mind without overengineering V1.
