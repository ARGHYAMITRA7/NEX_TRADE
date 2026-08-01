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

## Authentication Flow

The application now has a complete authentication system that connects the frontend and dashboard:

### How It Works

1. **User Registration**: Users sign up through the frontend signup page (`/signup`)
2. **Token Generation**: Backend generates JWT token upon successful signup/login
3. **Token Storage**: Token is stored in localStorage along with user data
4. **Dashboard Access**: User is redirected to dashboard (`http://localhost:3000`)
5. **Authentication Check**: Dashboard verifies token validity before granting access
6. **Protected Routes**: Dashboard routes are protected with authentication checks

### Authentication Features

- **Secure Password Storage**: Passwords are hashed using bcryptjs
- **JWT Token Authentication**: Tokens expire after 24 hours
- **Protected Dashboard**: Unauthorized users are redirected to login
- **User State Management**: Login state is maintained across frontend and dashboard
- **Logout Functionality**: Users can securely logout from both frontend and dashboard

### API Authentication Endpoints

- `POST http://localhost:3002/api/auth/signup` - User registration
- `POST http://localhost:3002/api/auth/login` - User login
- `GET http://localhost:3002/api/auth/verify` - Token verification

### Frontend Pages

- `/signup` - User registration page
- `/login` - User login page
- Updated navbar with authentication state
- Dashboard link appears when user is logged in

### Dashboard Protection

- AuthCheck component verifies authentication before rendering dashboard
- Redirects to login page if token is invalid or missing
- Logout button in dashboard clears authentication state

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
