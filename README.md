# NEX_TRADE - Stock Trading Platform

A full-stack stock trading application with a marketing landing page and interactive trading dashboard.

## Project Structure

```
NEX_TRADE(Stock Trading Platform)/
├── backend/          # Node.js/Express API server
├── frontend/         # React marketing landing page
├── dashboard/        # React trading dashboard
└── README.md
```

## Features

- **Landing Page**: Marketing pages for home, about, pricing, products, support, and signup
- **Trading Dashboard**: Holdings, positions, orders, watchlist, and real-time charts
- **Backend API**: RESTful API with MongoDB integration for trading data

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

## Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```
MONGO_URL=your_mongodb_connection_string
PORT=3002
```

Start the backend server:
```bash
npm start
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run on `http://localhost:3001`

### 3. Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

Dashboard will run on `http://localhost:3000`

## Connecting Frontend to Dashboard

To connect the landing page signup to the dashboard, you can:

1. **Simple Link**: Add a link in the signup page to `http://localhost:3000`
2. **Integrated**: Merge dashboard components into the frontend application

## API Endpoints

- `GET http://localhost:3002/allHoldings` - Get all holdings
- `GET http://localhost:3002/allPositions` - Get all positions  
- `POST http://localhost:3002/newOrder` - Create new order

## Technology Stack

- **Frontend**: React 19, React Router, Axios
- **Dashboard**: React 19, Material UI, Chart.js, React ChartJS 2
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: Passport, Passport Local, Passport Local Mongoose

## Development

The project consists of three separate applications that can be developed independently:
- Backend runs on port 3002
- Frontend runs on port 3001 (default React port)
- Dashboard runs on port 3000 (default React port)

## Future Improvements

- Merge frontend and dashboard into a single React application
- Add authentication flow between landing page and dashboard
- Implement user authentication and authorization
- Add real-time stock price updates
- Deploy to cloud platforms (Vercel, Netlify, etc.)