# Visual Product Matcher - Frontend

> 🎨 Modern, glassmorphic React frontend for AI-powered visual product search

**Created by [Nilesh Kumar](https://knileshh.com)** | [hey@knileshh.com](mailto:hey@knileshh.com)

## 🌟 Features

- ✨ **Glassmorphism UI** - Modern, translucent design with backdrop blur
- 🎨 **Dark/Light Theme** - Beautiful color schemes for both modes
- 📱 **Mobile-First** - Responsive design that works on all devices
- 🚀 **Fast & Smooth** - Optimized performance with Framer Motion animations
- 🔍 **Dual Search** - Upload images or search by URL
- 🎯 **Adjustable Controls** - Fine-tune similarity threshold and results count
- 📊 **Real-Time Results** - Beautiful masonry grid with similarity scores
- 🖼️ **Demo Images** - Pre-loaded samples to try instantly

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Custom glassmorphic components
- **Icons:** Lucide React
- **HTTP Client:** Axios
- **File Upload:** React Dropzone

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your API URL:
   ```env
   VITE_API_BASE_URL=https://vsearch.knileshh.com
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Set environment variables:**
   ```bash
   vercel env add VITE_API_BASE_URL
   ```

### Manual Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/              # Base UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   └── Slider.jsx
│   ├── Hero.jsx         # Hero section
│   ├── SearchInterface.jsx  # Main search UI
│   ├── UploadZone.jsx   # Drag & drop upload
│   ├── UrlSearch.jsx    # URL input
│   ├── ResultsGrid.jsx  # Results display
│   ├── ProductCard.jsx  # Individual product card
│   ├── Features.jsx     # Features section
│   ├── Footer.jsx       # Footer
│   └── ThemeToggle.jsx  # Theme switcher
├── context/
│   └── ThemeContext.jsx # Theme management
├── hooks/
│   └── useTheme.js      # Theme hook
├── lib/
│   ├── api.js           # API integration
│   └── utils.js         # Utility functions
├── App.jsx              # Main app
└── main.jsx             # Entry point
```

## 🎨 Design System

### Colors

**Dark Theme:**
- Background: `#0a0e27` → `#1a1f3a`
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#ec4899` (Pink)

**Light Theme:**
- Background: `#f8fafc` → `#e0e7ff`
- Primary: `#4f46e5` (Indigo)
- Secondary: `#7c3aed` (Purple)
- Accent: `#db2777` (Pink)

### Typography

- **Headings:** Sora (modern, geometric)
- **Body:** Inter (clean, readable)
- **Brand:** Dancing Script (cursive)

### Glassmorphism

```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

## 🔌 API Integration

The app connects to the Visual Product Matcher API:

**Base URL:** `https://vsearch.knileshh.com`

**Endpoints Used:**
- `POST /api/upload` - Upload image and search
- `POST /api/search-url` - Search by image URL
- `GET /api/health` - Health check
- `GET /api/stats` - Get statistics

## 🤝 Contributing

This is a personal project by Nilesh Kumar. For questions or suggestions, reach out at [hey@knileshh.com](mailto:hey@knileshh.com).

## 📄 License

© 2025 Nilesh Kumar. All rights reserved.

## 🔗 Links

- **Portfolio:** [knileshh.com](https://knileshh.com)
- **Email:** [hey@knileshh.com](mailto:hey@knileshh.com)
- **API Documentation:** See `docs/` folder

---

Made with ❤️ by *nilesh*
