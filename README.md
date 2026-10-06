# Todo App

A simple, stylish todo list app built with vanilla HTML, CSS, and JavaScript, powered by [Vite](https://vitejs.dev/) for
fast development and optimized production builds. No frameworks, no runtime dependencies.

## Features

- Add new tasks
- Mark tasks as complete (with strike-through styling)
- Remove tasks
- Responsive, modern UI with animations
- No runtime dependencies, and Vite is the only dev dependency
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
├── index.html       # App entry point
├── src/
│   ├── main.js      # Application logic
│   └── style.css    # Styles
├── public/          # Static assets
├── package.json
└── vite.config.js   # Vite configuration (optional)
```

## Usage

1. Type a task into the input field
2. Click **Add new task**
3. Check the checkbox to mark a task as done
4. Click **X** to remove a task

## Tech Stack

- **HTML**: structure
- **CSS**: styling (custom checkboxes, gradients, animations, responsive layout)
- **JavaScript (ES modules)**: DOM manipulation for adding/removing tasks
- **Vite** (vanilla JavaScript template): dev server and build tooling
- **npm**: package management

## Browser Support

Uses modern CSS (`:has()`). Works in Chrome 105+, Safari 15.4+, Firefox 121+, and Edge 105+.

## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). See
the [LICENSE](LICENSE) file for details.