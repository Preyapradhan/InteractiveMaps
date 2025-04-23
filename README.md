# 🌍 InteractiveMaps - React + Leaflet + Strip.io

A modern interactive map application built with **React**, **Leaflet**, and **Strip.io** for a dynamic and feature-rich experience. This project allows users to explore categorized locations and view place-specific details, all managed via **Strip.io**'s powerful backend capabilities.

![Interactive Map Banner](https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800)

## 🚀 Features

### 🌐 For Users
- 🗺️ Explore an interactive Leaflet-based map
- 📍 View real-time location and nearby places
- 🧭 Filter by categories (restaurants, events, landmarks, etc.)
- 🖼️ Browse image-rich location details from Strip.io
- 📱 Mobile-friendly responsive design

### 🧑‍💻 For Developers
- 💡 Data management using Strip.io (categories, places, media)
- ⚙️ Modular components for easy customization
- 🔄 Real-time updates via API
- 🎯 Extendable marker and popup system

## 🛠️ Tech Stack

- **Frontend:**
  - React 18 + Vite
  - Leaflet.js
  - Tailwind CSS
  - Zustand (State Management)
  - React Router DOM

- **Data Backend:**
  - **Strip.io** for categories, place data, and image management

## 🏗️ Architecture

- Modern component-based UI
- State management using Zustand
- Secure API interaction with Strip.io
- Integrated Leaflet map components
- Clean separation of concerns

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/InteractiveMaps.git
cd InteractiveMaps
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
VITE_STRIPIO_API_KEY=your_stripio_api_key
VITE_MAPBOX_TOKEN=your_mapbox_token
```

4. **Run the development server**
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/       # UI & map elements
├── pages/            # App pages
├── store/            # Zustand state store
├── lib/              # Utilities for Strip.io and Leaflet
├── types/            # TypeScript types
└── assets/           # Static files and images
```

## 🔐 Security

- Environment variables via `.env` file
- API keys kept client-side safe
- Option to integrate backend for secure querying and uploads

## 🗺️ Mapping Features

- Leaflet with custom markers and themes
- Categorized views
- Strip.io-powered image galleries
- Location details and filtering
- User location tracking and centering

## 📊 Strip.io Integration

- Category and place information managed via Strip.io
- Media/image storage and delivery handled by Strip.io
- Real-time place updates and syncing with Strip.io API

## 📦 Deployment

- Easy deployment on Vercel, Netlify, or Firebase
- Minimal server-side setup required

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/yourFeature`)
3. Commit your changes
4. Push your branch and open a Pull Request

## 🙏 Acknowledgments

- Maps by Leaflet.js
- Data and media by Strip.io
- Icons by Lucide React
- UI inspiration from modern app designs

## 🖼️ Website Images

![Screenshot 2025-04-19 224931](https://github.com/user-attachments/assets/a73afae2-6027-4f93-841e-123d03b49024)


![Screenshot 2025-04-19 224951](https://github.com/user-attachments/assets/c9ac9295-72bb-4809-895d-6484dcafe41e)

