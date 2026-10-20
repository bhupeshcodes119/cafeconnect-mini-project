# CaféConnect MERN Demonstration Guide

## Terminal 1 – backend

```bash
cd backend
npm install
copy .env.example .env
# enter the MongoDB Atlas URI and JWT secret in backend/.env
npm run seed
npm run dev
```

## Terminal 2 – frontend

```bash
cd frontend
npm install
npm run dev
```

## Teacher demonstration

1. Show the folder tree: `backend`, `frontend`, `docs`.
2. Show `backend/config/db.js` and `backend/models`.
3. Show `backend/controllers/orderController.js`.
4. Show the backend terminal with `MongoDB connected`.
5. Open the React menu.
6. Add items, choose dine-in/takeaway, and place an order.
7. Explain that the backend reads the recipe, checks stock, deducts ingredients, creates the KOT, and creates a low-stock alert if required.
8. Open MongoDB Atlas Data Explorer and show the `orders` and `ingredients` collections.
9. Show Git status, commit, and push commands.
