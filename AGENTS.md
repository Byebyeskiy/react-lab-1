# AGENTS.md

A single-page app on React 19 and Vite 8, using JavaScript and JSX.
User-facing text is in Ukrainian. No TypeScript or React Compiler yet.

## Commands

- `npm install`: install dependencies.
- `npm run dev`: start the development server at http://localhost:5173.
- `npm run lint`: check ESLint rules.
- `npm run format`: format files with Prettier.
- `npm run format:check`: check formatting.
- `npm run build`: create the production build in `dist/`.
- `npm run preview`: preview the production build.

A task is done only after lint, format:check and build pass. Run all three
and report their results.

## Structure

- `index.html`: HTML entry with the root element.
- `src/main.jsx`: createRoot and StrictMode.
- `src/App.jsx`: root component and profile data.
- `src/components/`: one PascalCase component per file.
- `public/`: static files copied unchanged.

## React rules

- Use function components and hooks only, never class components.
- Use createRoot, never ReactDOM.render, propTypes or function defaultProps.
- Call hooks only at the top level, before early returns.
- Keep rendering pure; calculate derived values during render instead of effects.
- Give list items stable keys from data, never array indexes.
- Use semantic HTML, buttons for actions, labels for fields and alt on images.
- Never use dangerouslySetInnerHTML.

## Dependencies and configuration

- Ask before adding, removing or upgrading packages, and explain why.
- Never run npm audit fix --force.
- Change configuration or package scripts only when the task requires it.
- Never disable ESLint rules or add eslint-disable comments.
- Never put secrets in source code; VITE variables are public.

## Workflow

- Read relevant files and list planned files before editing.
- Keep changes limited to the task.
- Summarise changes and report all three checks.

