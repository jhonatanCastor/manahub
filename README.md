# ManaHub

**Your cards. Your decks. Your community.**

ManaHub is a Magic: The Gathering community platform designed to connect players, collectors, and card sellers through a unified marketplace and social experience.

## Overview

ManaHub allows users to:

- Create an account using email/password or Google OAuth.
- Manage their personal card collections.
- Create, import, and publish complete Magic decks.
- Browse cards with official card images and metadata.
- Buy, sell, and negotiate individual cards or complete decks.
- Communicate through private real-time conversations.
- Discover local game stores, events, and tournaments.
- Follow weekly card trends, market references, and official Magic news.
- Track banned and restricted cards by format.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Full-stack React framework |
| React.js | User interface |
| TypeScript | Static typing |
| Tailwind CSS | Styling |
| GraphQL | API layer |
| Prisma ORM | Database access |
| PostgreSQL | Relational database |
| Auth.js | Authentication |
| Google OAuth | Social login |
| Jest | Unit and integration tests |
| Testing Library | Component testing |
| GitHub Actions | CI/CD |
| Vercel | Application deployment |
| Scryfall API | Magic card database |
| MTGJSON | Supplementary Magic data |

## Architecture

The application follows a modular monolith architecture.

Main modules:

- Authentication
- Users
- Cards
- Collections
- Decks
- Marketplace
- Conversations
- Negotiations
- Dashboard
- News
- Banlists
- Venues
- Events
- Administration

## Project Requirements

- Node.js LTS
- npm
- PostgreSQL
- Git
- GitHub account
- Google OAuth credentials for social authentication

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jhonatanCastor/manahub.git

cd manahub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root.

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/manahub"

AUTH_SECRET="your-generated-secret"

AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"

SCRYFALL_API_URL="https://api.scryfall.com"

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

Never commit `.env` files or expose credentials in the repository.

### 4. Configure Prisma

```bash
npx prisma generate

npx prisma migrate dev --name init
```

### 5. Start the application

```bash
npm run dev
```

Application:

http://localhost:3000

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build production application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Jest tests |
| `npm run test:watch` | Run Jest in watch mode |
| `npm run test:coverage` | Generate test coverage |
| `npx prisma generate` | Generate Prisma Client |
| `npx prisma migrate dev` | Run database migrations |
| `npx prisma studio` | Open Prisma Studio |

## Testing Strategy

ManaHub uses Jest and Testing Library.

### Unit Tests

Validate individual functions and business rules:

- Authentication validation
- Card data transformation
- Deck calculations
- Marketplace pricing calculations
- User validation

### Integration Tests

Validate interactions between modules and external services:

- Authentication and database
- Card API integration
- Deck creation and persistence
- Marketplace listings
- Conversation and message persistence
- Negotiation workflows

### Coverage

Coverage reports are generated using:

```bash
npm run test:coverage
```

Critical business logic must have automated tests.

## Git Workflow

The project follows a feature branch workflow.

Branch naming conventions:

- `feat/` — New features
- `fix/` — Bug fixes
- `refactor/` — Code refactoring
- `test/` — Automated tests
- `docs/` — Documentation
- `chore/` — Configuration and maintenance

Example:

```bash
git checkout -b feat/google-oauth-authentication
```

Commit conventions:

```bash
feat(auth): implement Google OAuth

fix(cards): correct card search pagination

test(deck): add deck validation tests

docs(readme): update installation instructions
```

Every feature should be developed in an isolated branch and merged through a GitHub Pull Request.

## Scrum Methodology

Project management is organized using Scrum principles.

- Sprint duration: 2 weeks
- Product Backlog: ClickUp
- Source control: GitHub
- Sprint planning: Before each sprint
- Daily Scrum: Short daily progress update
- Sprint Review: Demonstration of completed features
- Sprint Retrospective: Improvements for the next sprint

Each task must contain:

- Task name
- Branch name
- Technical description
- Priority
- Time estimate
- Acceptance criteria
- Testing requirements

## Deployment

Production deployment is planned through Vercel.

The deployment pipeline will include:

1. GitHub integration.
2. Automated lint and test checks.
3. Production build validation.
4. Environment variable configuration.
5. Database migration strategy.
6. Production deployment.

## Security and Privacy

- Passwords must be stored using secure password hashing.
- Authentication sessions must be protected.
- User data must follow LGPD requirements.
- Private addresses must never be exposed publicly.
- Chat conversations must be accessible only to authorized participants.
- API credentials must be stored in environment variables.
- Marketplace actions must validate ownership and permissions.

## External Resources

- Scryfall API: https://scryfall.com/docs/api
- MTGJSON: https://www.mtgjson.com/
- Auth.js: https://authjs.dev/
- Prisma: https://www.prisma.io/docs
- Next.js: https://nextjs.org/docs
- Jest: https://jestjs.io/docs/getting-started
- GraphQL: https://graphql.org/

## License

Project licensing and third-party data usage policies must be reviewed before public distribution.

---

**ManaHub — Connecting the Magic community.**