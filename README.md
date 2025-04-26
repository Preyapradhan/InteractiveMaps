# 🌍 InteractiveMaps - React + Leaflet + Strip.io

A modern web application that provides interactive map functionality using multiple mapping libraries. The project consists of a React-based frontend and a Strapi-powered backend.

![Interactive Map Banner](https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800)

## 🚀 Features

- Interactive maps using both Leaflet and Google Maps
- Marker clustering for better visualization
- Responsive design
- RESTful API backend
- Type-safe development with TypeScript
- Modern development workflow with Vite

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Leaflet.js
- React-Leaflet
- @changey/react-leaflet-markercluster
- @react-google-maps/api
- Axios
- Animate.css
- TypeScript
- ESLint

### Backend
- Strapi (Headless CMS)
- TypeScript
- Node.js
- RESTful API

## 📦 Project Structure

```
.
├── my-map-app/          # Frontend application
│   ├── src/            # Source files
│   ├── public/         # Static assets
│   └── package.json    # Frontend dependencies
│
└── my-strapi-api/      # Backend application
    ├── src/           # Source files
    ├── config/        # Configuration files
    ├── database/      # Database files
    └── package.json   # Backend dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- Git

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd my-map-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd my-strapi-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Strapi server:
   ```bash
   npm run develop
   ```

## 🔧 Environment Variables

### Frontend (.env)
Create a `.env` file in the `my-map-app` directory:
```
VITE_API_URL=http://localhost:1337
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### Backend (.env)
Create a `.env` file in the `my-strapi-api` directory:
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
JWT_SECRET=your_jwt_secret
```

## 📝 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run develop` - Start development server
- `npm run start` - Start production server
- `npm run build` - Build for production
- `npm run strapi` - Run Strapi CLI commands


## 🙏 Acknowledgments

- Leaflet.js team
- Google Maps team
- Strapi team
- React team

## 🖼️ Website Images

![Screenshot 2025-04-19 224931](https://github.com/user-attachments/assets/a73afae2-6027-4f93-841e-123d03b49024)


![Screenshot 2025-04-19 224951](https://github.com/user-attachments/assets/c9ac9295-72bb-4809-895d-6484dcafe41e)

