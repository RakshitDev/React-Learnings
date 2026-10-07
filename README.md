# React Learnings

Learning React from the basics to advanced topics, one project at a time. Every project is a real UI built around one concept, the kind of screen that comes up in frontend machine coding rounds.

**Goal:** become job ready as a frontend React developer.

## How I work

For each project I:

1. Look at what the finished UI should do.
2. Build it step by step, task by task.
3. Note the concepts I learned and the interview questions they cover.
4. Commit and push the project to this repo.

## Roadmap

22 projects across 5 stages. ✅ = done, 🚧 = in progress, ⬜ = not started.

### Stage 1: Foundations
Components, props, state, forms and immutable lists.

| # | Concept | Project | Status |
|---|---|---|---|
| 01 | JSX and props | [Team profile cards](Team-Profile-Card/) | 🚧 |
| 02 | State and events | Star rating widget | ⬜ |
| 03 | Forms | Signup form with validation | ⬜ |
| 04 | Lists and CRUD | Todo app with filters | ⬜ |
| 05 | Lifting state | FAQ accordion with tabs | ⬜ |

### Stage 2: Hooks and data
Effects, fetching, custom hooks, refs and timers.

| # | Concept | Project | Status |
|---|---|---|---|
| 06 | useEffect and fetch | User directory with API | ⬜ |
| 07 | Custom hooks | Search autocomplete | ⬜ |
| 08 | Pagination | Paginated product grid | ⬜ |
| 09 | useRef and DOM | OTP input | ⬜ |
| 10 | Timers and cleanup | Stopwatch with laps | ⬜ |

### Stage 3: App architecture
Routing, context, reducers, recursive UIs and portals.

| # | Concept | Project | Status |
|---|---|---|---|
| 11 | Routing | Multi-page course site | ⬜ |
| 12 | Context API | Cafe menu with theme and cart | ⬜ |
| 13 | useReducer | Kanban board | ⬜ |
| 14 | Recursive UI | File explorer | ⬜ |
| 15 | Portals and modals | Accessible modal and toasts | ⬜ |

### Stage 4: Advanced React
Form libraries, Redux Toolkit, server state, performance and TypeScript.

| # | Concept | Project | Status |
|---|---|---|---|
| 16 | Form libraries | Multi-step job application | ⬜ |
| 17 | Redux Toolkit | Store cart with Redux Toolkit | ⬜ |
| 18 | Server state | Infinite feed with optimistic likes | ⬜ |
| 19 | Performance | 10,000-row virtualized list | ⬜ |
| 20 | TypeScript | Generic DataTable in TypeScript | ⬜ |

### Stage 5: Job ready
Testing and a full Next.js capstone.

| # | Concept | Project | Status |
|---|---|---|---|
| 21 | Testing | Testing a component | ⬜ |
| 22 | Next.js capstone | DevHire job board | ⬜ |

## Project 01: Team profile cards

A grid of team cards with avatar initials, role, city, skill tags and an "Open to work" badge, all rendered from an array.

**Concepts:** JSX and expressions, function components, props and destructuring, spreading props, the `children` prop, rendering lists with `map`, keys, conditional rendering with `&&` and ternaries.

## Running a project

Each project is a separate Vite + React app.

```bash
cd Team-Profile-Card
npm install
npm run dev
```

Then open http://localhost:5173.

## Tech stack

React, Vite, JavaScript, and later React Router, Redux Toolkit, TanStack Query, TypeScript, Testing Library and Next.js.

## Daily log

| Date | Project | What I learned |
|---|---|---|
| 2026-10-07 | 01 Team profile cards | Set up Vite, components, props, rendering lists with keys |
