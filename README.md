# 📚 Book Loop

Book Loop is a free book discovery platform where you can browse, search, and filter books by category. Users can create an account, update their profile, and access book details after signing in.

---

## About the Project

Book Loop was built as a full-stack Next.js application using the App Router. The goal was to create a clean, fast, and user-friendly platform where book lovers can find their next great read without any hassle. It supports light and dark mode, is fully responsive, and keeps things simple with a warm editorial design.

---

## Tech Used

**Next.js** — The core framework. We use the App Router for routing, server components for data fetching, and middleware for protecting private routes like book detail pages and the profile page.

**Tailwind CSS** — Used for all styling throughout the app. Utility classes keep the code clean and consistent without writing any custom CSS.

**HeroUI** — A React component library built on top of Tailwind. Used for UI elements like the Drawer, Accordion, Cards, Buttons, and Input fields.

**Better Auth** — Handles all authentication including email/password sign in, sign up, Google OAuth, and session management. User data like name and profile photo can be updated directly through the `authClient.updateUser()` method.

**MongoDB Atlas** — Cloud database where all user data and session information is stored. Connected through Better Auth's MongoDB adapter.

**React Hook Form** — Used to handle form state and validation on the sign in and sign up pages cleanly without unnecessary re-renders.

**React Hot Toast** — Lightweight toast notification library for showing success and error messages after actions like login, logout, and profile update.

**next-themes** — Handles dark and light mode switching, synced with the user's system preference by default.

---

## Getting Started

1. Clone the repo and run `npm install`
2. Create a `.env.local` file and add your MongoDB URI, Better Auth secret, and Google OAuth credentials
3. Run `npm run dev` and open `http://localhost:3000`