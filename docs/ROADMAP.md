# V0 — Product Definition

### Purpose
Define the product, target users, problem, positioning, requirements, architecture direction, design principles, and roadmap before significant implementation.

### Work
- Write PRODUCT.md, REQUIREMENTS.md, ARCHITECTURE.md, DESIGN.md, ROADMAP.md, DECISIONS.md
- Establish the V0–V6 roadmap
- Set up the repository structure

### Deliverables
- The six documentation files in docs/
- This roadmap
- Project folder structure in place

### Explicitly Out of Scope
- Writing application code
- Building UI
- Backend, database, authentication

### Definition of Done
- All six docs exist and are filled
- Product direction is documented and agreed upon
- No implementation has started beyond scaffolding

---

# V1 — Frontend MVP

### Purpose
Build the first functional frontend-only version.

### Work — Implementation Sequence
1. Project setup
2. Folder architecture
3. Routing
4. Landing page
5. Portfolio data model
6. Editor shell
7. Personal information
8. About
9. Skills
10. Projects
11. Experience
12. Education
13. Social links
14. First template
15. Live preview
16. Appearance customization
17. localStorage persistence
18. Preview page
19. Validation
20. Responsive design
21. Accessibility pass
22. Testing
23. README/documentation update
24. Deployment

### Deliverables
- Landing page
- Create portfolio flow
- Portfolio editor (personal info, about, skills, projects, experience, education, social links)
- Appearance customization
- Live preview
- One polished portfolio template
- localStorage persistence
- Responsive design
- Basic validation
- Dedicated preview page

### Explicitly Out of Scope
- Authentication
- Backend
- Database
- Payments
- AI generation
- Analytics
- Custom domains
- Admin dashboard
- Cloud storage

### Definition of Done
- A user can create, edit, preview, and persist a portfolio locally
- One polished template renders it
- Builder and portfolio are responsive and pass a basic accessibility review
- Deployed publicly

---

# V2 — Builder + Template System

### Purpose
Turn the frontend MVP into a flexible portfolio builder.

### Work
- Multiple templates
- Shared portfolio data model enforced
- Template switching
- Theme customization
- Section configuration
- Section ordering/reordering
- Improved builder UX

### Deliverables
- At least two templates sharing one data model
- Template switcher
- Theme/appearance settings
- Section configuration and ordering

### Explicitly Out of Scope
- Backend, auth, payments, AI

### Definition of Done
- User can switch templates without re-entering data
- Sections can be configured and reordered
- Adding a template does not require rewriting the app

---

# V3 — Real User Product

### Purpose
Introduce backend persistence and real user accounts.

### Work
- Authentication
- User accounts
- Portfolio database
- Multiple portfolios per user
- Dashboard
- Draft/published state
- Autosave
- Backend API

Likely stack: React, Node.js, Express, MongoDB. Detailed backend schema is not designed yet.

### Deliverables
- Working auth and accounts
- Persisted portfolios in a database
- Dashboard for managing multiple portfolios
- Draft/published states and autosave

### Explicitly Out of Scope
- Public publishing platform features (V4)
- Monetization (V6)

### Definition of Done
- A user can sign in, create multiple portfolios, edit them with autosave, and see draft/published status

---

# V4 — Publishing Platform

### Purpose
Allow users to publish portfolios publicly.

### Work
- Public portfolio URLs
- User slugs
- Public portfolio pages
- SEO metadata
- Social sharing
- Custom not-found page
- Portfolio analytics

### Deliverables
- Publicly accessible portfolio URLs
- SEO and social metadata
- 404 handling for portfolios
- Basic portfolio analytics

### Explicitly Out of Scope
- Payments, premium features

### Definition of Done
- A published portfolio is publicly viewable at a stable URL with correct metadata

---

# V5 — Production Hardening

### Purpose
Make the product robust for real-world use.

### Work
- Security
- Authorization
- Input validation
- Rate limiting
- File-upload security
- Performance
- Image optimization
- Error handling
- Accessibility
- Monitoring
- Database optimization
- Reliability

### Deliverables
- Security review passed
- Hardened inputs and uploads
- Reasonable performance and error handling
- Accessibility compliance pass
- Monitoring in place

### Explicitly Out of Scope
- New product features

### Definition of Done
- The product withstands realistic abuse and load, and failures are observable and handled

---

# V6 — Monetization / Scale

### Purpose
Only pursue this if real user demand justifies it.

### Potential Features
- Premium templates
- Advanced customization
- Custom domains
- Analytics
- Portfolio limits
- Payments/subscriptions
- Feature gating

These are possibilities, NOT commitments.

### Definition of Done
- Only defined once demand is validated
