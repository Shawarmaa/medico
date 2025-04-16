# 🩺 MedicoTutoring

A modern, full-stack web application built with **Next.js**, **TypeScript**, **TailwindCSS**, and **API Routes**. Designed with scalability and modularity in mind, Medico Virid is aimed at delivering an efficient and developer-friendly codebase, deployed on [Vercel](https://vercel.com).

🔗 **Live Demo**: [medico-virid.vercel.app](https://medico-virid.vercel.app)

---

## 📁 Project Structure

```bash
├── .next/                  # Next.js build output (auto-generated)
├── app/
│   ├── api/                # Serverless API endpoints
│   │   ├── send-email/     # Email sending logic
│   │   └── subscribe/      # Subscription logic
│   ├── globals.css         # Global styles (Tailwind & custom)
│   ├── layout.tsx          # Global layout wrapper
│   └── page.tsx            # Main landing page
├── components/             # Reusable UI components
├── lib/                    # Utilities, helpers or data-fetching logic
├── node_modules/           # Installed dependencies
├── public/                 # Static assets
├── .env.local              # Environment variables (not committed)
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Files to ignore in Git
├── components.json         # (Possibly Storybook or external config)
├── next-env.d.ts           # TypeScript type support for Next.js
├── next.config.mjs         # Next.js configuration
├── package.json            # NPM scripts and dependencies
├── package-lock.json       # Exact dependency tree
├── postcss.config.mjs      # PostCSS plugins configuration
├── README.md               # Project documentation
├── tailwind.config.ts      # TailwindCSS configuration
└── tsconfig.json           # TypeScript configuration
```


⸻

🚀 Getting Started

1. Clone the Repository
```bash
git clone https://github.com/your-username/medico-virid.git
cd medico-virid
```
2. Install Dependencies
```bash
npm install
# or
yarn install
```
3. Create Environment Variables
```bash
Create a .env.local file at the root and add necessary keys, e.g.:

NEXT_PUBLIC_API_BASE_URL=https://your-api.com
EMAIL_SERVICE_API_KEY=your-api-key
```
4. Run the Dev Server
```bash
npm run dev
# or
yarn dev
```
Then open http://localhost:3000

⸻

🧩 Features
	•	✅ Next.js App Router
	•	🔷 TypeScript for static typing
	•	💨 TailwindCSS for utility-first styling
	•	📨 Serverless API Routes for sending emails and handling subscriptions
	•	🌍 Vercel Deployment with CI/CD
	•	♻️ Modular architecture for reusability and scalability

⸻

🛠️ Scripts

Script	Description
dev	Run development server
build	Create an optimized production build
start	Start production server
lint	Run ESLint on project files
format	Format code using Prettier (optional)



⸻

🧪 Testing (Optional)

If you plan to include testing in the future:
	•	Jest for unit tests
	•	React Testing Library for component testing
	•	Playwright/Cypress for end-to-end testing

⸻

📦 Deployment

This project is continuously deployed on Vercel. Every push to the main branch triggers a new deployment.

⸻

📄 License

😔

⸻

✍️ Author

Built with ❤️ by Muhammad Abdullah
For more info or contributions, feel free to connect!

⸻

📬 Feedback

Have suggestions or ideas? Create an issue or drop a message via the contact form on the website.

⸻
