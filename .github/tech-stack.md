## 🚀 The Stack

- **Frontend:** React 18 + Vite + Tailwind CSS
  - [ShadCN UI](https://ui.shadcn.com/docs)
  - [Sonner (Toasts)](https://ui.shadcn.com/docs/components/sonner)
  - [Lucide Icons](https://lucide.dev)
- **Backend:** Express.js (REST API, `backend/`)
- **Database:** SQLite via [Prisma ORM](https://www.prisma.io/docs)
- **Authentication:** JWT (cookie-based)
- **API Client:** Axios
- **Dev Environment:** GitHub Codespaces (with `.devcontainer`)

---

## 📁 Directory Overview

my-app/
├── .devcontainer/ # Codespaces config
├── .github/
│ └── copilot-instructions.md
├── backend/
│ ├── prisma/ # Prisma schema/migrations
│ ├── routes/ # Express REST endpoints
│ └── index.js # Main server file
├── frontend/
│ ├── src/components/ # ShadCN/Lucide UI
│ ├── src/pages/ # Main pages (Home, Login, etc)
│ └── src/App.tsx
├── agent/ # Agent prompts & scripts
├── README.md
└── .env.example

---

## 📚 Documentation

**Always check official docs before major changes, refactoring, or installing dependencies.**  
**Do not guess—confirm implementation with the current documentation.**

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [ShadCN UI](https://ui.shadcn.com/docs)
- [Sonner Toasts](https://ui.shadcn.com/docs/components/sonner)
- [Lucide Icons](https://lucide.dev)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/docs)
- [JWT Intro](https://jwt.io/introduction)
- [Axios](https://axios-http.com/)
- [Codespaces](https://docs.github.com/en/codespaces)
- [Copilot Agent/MCP](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp)
