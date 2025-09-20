# Sanshi H2O 💧

**Kill your thirst.** A modern, full-stack e-commerce website for Sanshi H2O, a beverage company offering a refreshing range of drinks. This project is built with React and Node.js (Express), featuring a clean design and a robust backend.

---

## ✨ Key Features

* **Product Catalog:** Browse a dynamic grid of all available beverages with details and images.
* **Category Filtering:** Easily filter products by category (e.g., Soda, Mineral Water).
* **Secure Order Placement:** A secure checkout process that calculates totals on the server to ensure data integrity.
* **Contact Form:** A functional contact form that stores user submissions directly in the database.
* **Responsive Design:** A mobile-first approach ensuring a seamless experience on all devices.
* **(In-Progress) Admin Dashboard:** Future-proofed with placeholders for product, order, and submission management.

---

## 🚀 Tech Stack

-   **Frontend:** React, React Router, CSS Modules, Bootstrap
-   **Backend:** Node.js, Express.js
-   **Database:** PostgreSQL (managed via Supabase)
-   **Deployment:** Netlify (Frontend), Render (Backend)

---

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js (v18 or later)
* npm
* A free Supabase account for the database.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/sanshi-h2o-website.git](https://github.com/your-username/sanshi-h2o-website.git)
    cd sanshi-h2o-website
    ```

2.  **Setup the Backend (`server`):**
    ```bash
    cd server
    npm install
    ```
    -   Create a `.env` file in the `server` directory and add the required environment variables (see below).
    -   Start the backend server:
    ```bash
    npm run dev
    ```
    The server will be running on `http://localhost:5000`.

3.  **Setup the Frontend (`client`):**
    -   Open a new terminal window.
    ```bash
    cd client
    npm install
    ```
    -   Start the frontend development server:
    ```bash
    npm run dev
    ```
    The React app will open and run on `http://localhost:5173` (or another port if 5173 is busy).

---