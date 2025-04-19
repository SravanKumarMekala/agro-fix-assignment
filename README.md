# Bulk Vegetable/Fruit Order Web Application

## Objective:

The goal of this project is to create a full-stack web application that allows buyers to browse and place bulk vegetable/fruit orders. Buyers can track the status of their orders, while admins can manage products and orders. This application aims to develop skills in Next.js/React.js, API development, database management, and deployment strategies.

---

## Project Setup and Initialization

### Step 1: Project Directory Setup

1. Create a new directory for the project:
    ```bash
    mkdir agro-order-app
    cd agro-order-app
    ```

2. Initialize the project using **Next.js** (with TypeScript support):
    ```bash
    npx create-next-app@latest . --typescript
    ```

3. Install the necessary dependencies:
    ```bash
    npm install axios react-hook-form yup pg
    npm install @hookform/resolvers
    ```

4. Initialize Git repository:
    ```bash
    git init
    ```

---

## Development Process

### 1. Database Setup

1. Set up PostgreSQL using [Neon.tech](https://neon.tech) or [Docker](https://www.docker.com/) for local database setup.

2. Design the database schema:
   - **products** table:
     - id
     - name
     - price
   - **orders** table:
     - id
     - buyer_name
     - buyer_contact
     - delivery_address
     - items (JSON serialized)
     - status

3. Optionally use an ORM such as **Prisma** or **Sequelize** to interact with the database.

### 2. Backend API Development

Create API routes in `pages/api/`:

- **GET /api/products**: Fetch the product catalogue.
- **POST /api/orders**: Place a new order.
- **GET /api/orders/:id**: View order details for buyers.
- **GET /api/orders**: View all orders (admin access).
- **PUT /api/orders/:id**: Update order status (admin access).
- **POST /api/products**: Add a new product (admin access).
- **PUT /api/products/:id**: Edit a product (admin access).
- **DELETE /api/products/:id**: Delete a product (admin access).

### 3. Frontend Development

1. **Product Catalogue Page**:
   - Display available products fetched from the API.

2. **Order Placement Form**:
   - Form to enter buyer's details, select products, and specify quantities and delivery information.
   - Use **react-hook-form** and **yup** for form management and validation.

3. **Order Tracking View**:
   - Allow buyers to check the status of their orders with order IDs.

4. **Admin Dashboard**:
   - Admin can view and manage orders and inventory.

5. **State Management**:
   - Use **React Context**, **Redux**, or **Zustand** for shared data management like product catalogue and user authentication status.

---

### Styling and Design

1. **UI Library/CSS Framework**:
   - Use a CSS framework like **Tailwind CSS**, **Material UI**, or **Chakra UI** for UI consistency.

2. **Responsive Design**:
   - Ensure that the web app works well across all devices.

3. **User Experience**:
   - Focus on intuitive navigation, clear user feedback, and easy-to-use interfaces.

---

## Deployment

1. **Vercel Deployment**:
   - Create an account on [Vercel](https://vercel.com).
   - Connect your GitHub repository to Vercel.
   - Configure environment variables (e.g., database credentials).

2. **Test Deployment**:
   - After deployment, verify that the app is functional by testing all features.

---

## Submission Guidelines

### GitHub Repository

1. **Source Code**: All source code should be pushed to the GitHub repository.
2. **README.md**: This file should be included with:
   - A brief description of the project and features implemented.
   - Setup instructions for running the application locally.
   - Instructions for setting up the database.
   - Other relevant information like dependencies, testing, and deployment.
3. **.env File**:
   - Database credentials should be stored in the `.env` file.
   - DO NOT commit the `.env` file to the repository. Instead, include instructions on how to set up the `.env` file.

### Database Setup

- For **Neon.tech** or **Docker**: Include instructions on configuring the database and necessary environment variables.

---

## Example `.env` file

```
DATABASE_URL=your_database_url_here
SECRET_KEY=your_secret_key_here
```

.

