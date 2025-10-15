# 🎨 Visual Product Matcher

<div align="center">

![Visual Product Matcher](https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge&logo=openai)
![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

**AI-powered visual search engine for fashion products**

[Live Demo](https://vsearch.knileshh.com) • [API Documentation](./API_DOCUMENTATION.md) • [Report Bug](https://github.com/knileshh/visual-product-matcher-fe/issues)

</div>

---

## ✨ Features

- 🔍 **AI-Powered Search** - OpenAI CLIP model for semantic visual understanding
- ⚡ **Lightning Fast** - Search through 42,700+ products in under 100ms
- 🎨 **Modern UI** - Glassmorphic design with dark/light theme support
- 📱 **Mobile First** - Fully responsive design with smooth animations
- 🎵 **Interactive** - Sound effects, scroll animations, and Framer Motion magic
- 🖼️ **Dual Input** - Upload images or paste URLs for search
- 🎯 **Customizable** - Adjustable similarity threshold and result count
- 🌐 **Cloud Ready** - Vercel deployment configuration included

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Running backend server (see [API Documentation](./API_DOCUMENTATION.md))

### Installation

```bash
# Clone the repository
git clone https://github.com/knileshh/visual-product-matcher-fe.git
cd visual-product-matcher-fe

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://vsearch.knileshh.com
```

## 🏗️ Tech Stack

### Core
- **React 19.1** - UI library with latest features
- **Vite 7.1** - Next-generation frontend tooling
- **Tailwind CSS 3** - Utility-first CSS framework

### Libraries
- **Framer Motion** - Advanced animations and transitions
- **Axios** - HTTP client for API requests
- **React Dropzone** - Drag-and-drop file uploads
- **rc-slider** - Professional slider component
- **Lucide React** - Beautiful icon library

### Features
- **Web Audio API** - Notification sounds
- **Intersection Observer** - Scroll-based animations
- **Theme System** - Dark/light mode with localStorage persistence

## 📁 Project Structure

```
visual-product-matcher-fe/
├── public/
│   ├── favicon.svg          # Custom AI-themed favicon
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Slider.jsx
│   │   ├── BackendNotice.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ResultsGrid.jsx
│   │   ├── SearchInterface.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── UploadZone.jsx
│   │   └── UrlSearch.jsx
│   ├── context/
│   │   └── ThemeContext.jsx # Theme management
│   ├── hooks/
│   │   └── useTheme.js      # Theme hook
│   ├── lib/
│   │   ├── api.js           # API client
│   │   └── utils.js         # Utility functions
│   ├── utils/
│   │   └── notificationSound.js # Sound effects
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .env.example             # Environment variables template
├── vercel.json              # Vercel deployment config
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json

```

## 🎨 Design System

### Colors

#### Dark Mode
- **Background**: `#0a0e27` → `#1a1f3a` (gradient)
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#ec4899` (Pink)

#### Light Mode
- **Background**: `#f0f4ff` → `#dbeafe` (gradient)
- **Primary**: `#4f46e5` (Indigo)
- **Secondary**: `#7c3aed` (Purple)
- **Accent**: `#db2777` (Pink)

### Typography
- **Headings**: Sora (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Brand**: Dancing Script (Google Fonts)

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🎯 Features Breakdown

### Search Interface
- **Upload Method**: Drag-and-drop or click to upload images
- **URL Method**: Paste image URLs for instant search
- **Demo Images**: Pre-loaded examples for quick testing
- **Controls**: 
  - Similarity threshold slider (0-100%)
  - Results count slider (5-50 items)

### Results Display
- **Grid Layout**: Responsive 1-4 column grid
- **Product Cards**: 
  - Image with hover effects
  - Product title
  - Similarity percentage
  - View on Cloudinary link
- **Animations**: Staggered entrance animations

### Theme System
- **Auto Detection**: Respects system preferences
- **Manual Toggle**: Switch between dark/light modes
- **Persistence**: Theme saved to localStorage
- **Smooth Transition**: 500ms color transitions

### Notifications
- **Backend Notice**: 
  - Appears after 5 seconds
  - Auto-fades after 15 seconds
  - Pleasant sound effect
  - Highlight animation
  - Desktop only (hidden on mobile)

## 🔌 API Integration

The frontend connects to the Visual Product Matcher API:

```javascript
// Search by upload
POST /search
Content-Type: multipart/form-data
Body: { file, k, threshold }

// Search by URL
POST /search-by-url
Content-Type: application/json
Body: { imageUrl, k, threshold }
```

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for complete API details.

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      dark: {
        primary: '#your-color',
        // ...
      }
    }
  }
}
```

### Modifying Animations

Edit animation durations in components or `tailwind.config.js`:

```javascript
animation: {
  'float': 'float 6s ease-in-out infinite',
}
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nilesh Kumar**

- Website: [knileshh.com](https://knileshh.com)
- Email: [hey@knileshh.com](mailto:hey@knileshh.com)
- GitHub: [@knileshh](https://github.com/knileshh)

## 🙏 Acknowledgments

- **OpenAI CLIP** - Visual understanding model
- **FAISS** - Efficient similarity search
- **Cloudinary** - Image hosting and CDN
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS

## 🐛 Known Issues

- Backend runs locally on developer's machine
- Available during development hours (9 AM - 2 AM IST)
- Cloud migration in progress

## 🚀 Roadmap

- [ ] Cloud deployment for 24/7 availability
- [ ] Support for more product categories
- [ ] User accounts and search history
- [ ] Advanced filtering options
- [ ] Batch image upload
- [ ] Mobile app (React Native)

## 📞 Support

For support, email [hey@knileshh.com](mailto:hey@knileshh.com) or open an issue on GitHub.

---

<div align="center">

Made with ❤️ by [Nilesh Kumar](https://knileshh.com)

⭐ Star this repo if you find it helpful!

</div>

