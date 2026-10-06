# Todo App

A simple, stylish todo list app built with vanilla JavaScript and styled entirely
with [Tailwind CSS](https://tailwindcss.com/), powered by [Vite](https://vitejs.dev/) for fast development and optimized
production builds. No frameworks, no runtime dependencies.

## Features

- Add new tasks
- Mark tasks as complete (with strike-through styling)
- Remove tasks
- Reorder tasks with drag and drop
- Responsive, modern UI with animations
- Styled 100% with Tailwind, using reusable component classes
- No runtime dependencies (Vite and Tailwind are dev-only tooling)
- Fast dev server with hot module replacement (HMR)

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (included with Node.js)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Available Scripts

| Command           | Description                                     |
|-------------------|-------------------------------------------------|
| `npm run dev`     | Start the Vite dev server with hot reloading    |
| `npm run build`   | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally            |

## Project Structure

```
.
├── index.html       # App entry point (page-level Tailwind utilities live here)
├── src/
│   ├── main.js      # Application logic (uses semantic component class names)
│   └── style.css    # Tailwind import, theme tokens, and component classes
├── public/          # Static assets
├── package.json
└── vite.config.js   # Vite config with the Tailwind plugin
```

## Styling with Tailwind

Tailwind v4 is integrated through the official Vite plugin (`@tailwindcss/vite`), so there is no `tailwind.config.js` or
PostCSS setup.

`src/style.css` is organized in three parts:

1. **`@import "tailwindcss"`** loads Tailwind.
2. **`@theme`** defines the design tokens: brand colors (`primary`, `danger`, `ink`, `muted`, ...) and the `pop-in`
   animation. These generate utilities such as `bg-primary` and `animate-pop-in`.
3. **`@layer components`** defines reusable component classes built from Tailwind utilities with `@apply`. Unused
   component classes are still tree-shaken from the build.

### Component classes

| Class            | Used for                                                 |
|------------------|----------------------------------------------------------|
| `.card`          | Main white container                                     |
| `.card-title`    | Gradient heading                                         |
| `.task-form`     | Input and button row (stacks on small screens)           |
| `.task-input`    | Text input with focus ring                               |
| `.btn-add`       | Primary "Add new task" button                            |
| `.task-list`     | The `<ol>` that holds tasks                              |
| `.task-item`     | Each `<li>`, including the `.dragging` state             |
| `.task-row`      | Inner row with hover state and pop-in animation          |
| `.task-checkbox` | Custom checkbox with checkmark                           |
| `.task-text`     | Task label (strike-through when its checkbox is checked) |
| `.btn-remove`    | Remove (X) button                                        |

Component classes sit below utilities in the cascade, so you can override them in markup, for example
`class="card p-4"`. Page-level layout (the gradient background and centering) stays as utilities on `<body>` in
`index.html`.

To change the look of the app, edit the tokens or component classes in `src/style.css`.

## Usage

1. Type a task into the input field
2. Click **Add new task**
3. Check the checkbox to mark a task as done
4. Drag a task up or down to reorder it
5. Click **X** to remove a task

## Tech Stack

- **HTML**: structure
- **Tailwind CSS v4**: utility-first styling, theme tokens, and `@layer components` classes
- **JavaScript (ES modules)**: DOM manipulation, adding/removing tasks, and drag-and-drop reordering
- **Vite** (vanilla JavaScript template): dev server and build tooling
- **npm**: package management

## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).