# NEX_TRADE - Stock Trading Platform

A full-stack stock trading application with a marketing landing page and interactive trading dashboard.

## 🎉 NEW: Unified Application!

The project has been transformed into a **single, production-ready application**. The frontend and dashboard are now merged into one unified React application for easier deployment and better security.

## Project Structure

```
NEX_TRADE(Stock Trading Platform)/
├── backend/          # Node.js/Express API server
├── unified-app/      # ⭐ NEW: Unified React application (frontend + dashboard)
├── frontend/         # OLD: Kept for reference (can be deleted)
├── dashboard/        # OLD: Kept for reference (can be deleted)
└── README.md
```

## Features

- **Unified Application**: Single React app with both marketing pages and trading dashboard
- **Landing Page**: Marketing pages for home, about, pricing, products, support, and signup
- **Trading Dashboard**: Holdings, positions, orders, watchlist, and real-time charts
- **Backend API**: RESTful API with MongoDB integration for trading data
- **Secure Authentication**: JWT-based authentication with protected routes

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

## Quick Start

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory (copy from `.env.example`):
```
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret_key
FRONTEND_URL=http://localhost:3000
```

Start the backend server:
```bash
npm start
```

### 2. Unified Frontend Setup

```bash
cd unified-app
npm install
```

Create a `.env` file in the unified-app directory (copy from `.env.example`):
```
PORT=3000
REACT_APP_BACKEND_URL=http://localhost:3002
```

Start the unified application:
```bash
npm start
```

**Access the application at:** `http://localhost:3000`

## Authentication Flow

The unified application has a secure authentication system:

### How It Works

1. **User Registration**: Users sign up through `/signup`
2. **Token Generation**: Backend generates JWT token upon successful signup/login
3. **Token Storage**: Token is stored in localStorage (shared across entire app)
4. **Dashboard Access**: User navigates to `/dashboard` (protected route)
5. **Authentication Check**: Protected route verifies token validity
6. **Seamless Navigation**: No page reloads needed - React Router handles navigation

### Authentication Features

- **Secure Password Storage**: Passwords are hashed using bcryptjs
- **JWT Token Authentication**: Tokens expire after 24 hours
- **Protected Routes**: Dashboard routes are protected with authentication checks
- **Shared localStorage**: Token accessible across entire application
- **No URL Token Passing**: Secure navigation without exposing tokens in URLs
- **Logout Functionality**: Users can securely logout

### API Authentication Endpoints

- `POST http://localhost:3002/api/auth/signup` - User registration
- `POST http://localhost:3002/api/auth/login` - User login
- `GET http://localhost:3002/api/auth/verify` - Token verification

### Application Routes

- `/` - Home page
- `/signup` - User registration page
- `/login` - User login page
- `/dashboard` - Trading dashboard (protected)
- `/about` - About page
- `/product` - Products page
- `/pricing` - Pricing page
- `/support` - Support page

## API Endpoints

- `GET http://localhost:3002/allHoldings` - Get all holdings
- `GET http://localhost:3002/allPositions` - Get all positions
- `POST http://localhost:3002/newOrder` - Create new order

## Technology Stack

- **Unified Frontend**: React 19, React Router, Axios, Material UI, Chart.js
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: JWT tokens, bcryptjs for password hashing

## Development

The project now consists of two main components:
- Backend runs on port 3002
- Unified frontend runs on port 3000

## Deployment

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

### Quick Deployment Options:

1. **Vercel + Render** (Recommended)
   - Frontend: Deploy `unified-app/` to Vercel
   - Backend: Deploy `backend/` to Render

2. **Netlify + Railway**
   - Frontend: Deploy `unified-app/` to Netlify
   - Backend: Deploy `backend/` to Railway

## Git Repository

The project is git-ready with proper `.gitignore` configuration:
- Environment variables are excluded
- Node modules are excluded
- Build outputs are excluded
- Example `.env` files provided for reference

## Migration from Old Structure

If you were using the old multi-app structure:
1. The `frontend/` and `dashboard/` folders are kept for reference
2. Use the new `unified-app/` for all development
3. Delete old folders once you're comfortable with the new structure
4. Update any deployment scripts to use `unified-app/`

## Future Improvements

- Add real-time stock price updates
- Implement advanced charting features
- Add user portfolio analytics
- Integrate payment gateway for deposits
- Add mobile-responsive design improvements
- Implement comprehensive testing suite
