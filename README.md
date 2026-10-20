# CaféConnect – Standard MERN Project

CaféConnect is an operational café ordering, kitchen queue, and ingredient availability platform built with MongoDB, Express.js, React.js, and Node.js.

## Run locally

```bash
npm run install:all
# copy .env.example to backend/.env and enter MONGO_URI and JWT_SECRET
npm run seed
npm run dev:backend
# in another terminal
npm run dev:frontend
```

Backend: `http://localhost:5000`  
Frontend: `http://localhost:5173`

## Approved workflow

Customer registration/login → dynamic menu → search/filter → availability → cart → dine-in/takeaway → order number and total → KOT → status tracking → recipe-based ingredient deduction → low-stock alert and availability update → completed-order sales report.

No payment gateway or payment records are included.
