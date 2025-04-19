This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
Here’s a concise yet powerful `README.md` for your **Agro Fix Assignment** project:

---

```markdown
# 🌾 Agro Fix Assignment

A full-stack Next.js application designed to streamline agro-product discovery and cart management. Built with performance, simplicity, and modern dev practices in mind.

## 🚀 Features

- 🔎 **Product Listing** – Dynamic fetch from PostgreSQL with `axios`
- 🛒 **Cart Functionality** – Global cart state via `zustand`
- 🧾 **Checkout Form** – Validated using `react-hook-form` + `yup`
- 📦 **API Routes** – Modular Next.js handlers for products and orders
- 🌐 **Responsive UI** – Built with modern CSS Modules

---

## 🛠️ Local Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/SravanKumarMekala/agro-fix-assignment.git
   cd agro-fix-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up `.env.local`**
   ```
   DATABASE_URL=postgresql://your_user:your_password@localhost:5432/agrodb
   ```

4. **Run the dev server**
   ```bash
   npm run dev
   ```
   App runs at `http://localhost:3000`

---

## 🗃️ PostgreSQL Setup

1. **Create the database**
   ```sql
   CREATE DATABASE agrodb;
   ```

2. **Create the `products` table**
   ```sql
   CREATE TABLE products (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255),
     description TEXT,
     price NUMERIC,
     image_url TEXT
   );
   ```

3. *(Optional)*: Seed some data:
   ```sql
   INSERT INTO products (name, description, price, image_url)
   VALUES ('Wheat Seed', 'High-yield variety', 120.00, '/images/default.jpg');
   ```

---

## 📌 Notes

- Ensure Postgres is running locally and accessible via the `DATABASE_URL`.
- Add `/public/images/default.jpg` or update paths accordingly.
- API routes are available at `/api/products` and `/api/orders`.

---

## 🤝 Contribution

Forks, PRs, and feedback are welcome! Let’s build smart, sustainable agro-tech—together.

```

---

Let me know if you want badges, deploy instructions, or a diagram. Ready to take this to Vercel or Dockerize?