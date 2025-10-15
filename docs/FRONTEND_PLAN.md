# Visual Product Matcher - Frontend Development Plan

**Created:** October 15, 2025  
**API Base URL:** https://vsearch.knileshh.com/  
**Deployment:** Vercel

---

## 🎨 Design Decisions

### Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **HTTP Client:** Axios
- **Image Handling:** React Dropzone

### Design System

#### Typography (Google Fonts)
- **Headings:** Sora (modern, geometric)
- **Body:** Inter (clean, readable)
- **Brand:** Dancing Script (cursive for "nilesh")

#### Color Schemes (With Theme Toggle)

**Dark Theme:**
- Background: `#0a0e27` → `#1a1f3a` (gradient)
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#ec4899` (Pink)
- Glass: `rgba(255, 255, 255, 0.05)`

**Light Theme:**
- Background: `#f8fafc` → `#e0e7ff` (gradient)
- Primary: `#4f46e5` (Indigo)
- Secondary: `#7c3aed` (Purple)
- Accent: `#db2777` (Pink)
- Glass: `rgba(255, 255, 255, 0.7)`

#### Glassmorphism Values
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

---

## 📱 Page Structure (Single Page)

### Sections
1. **Hero Section**
   - Animated gradient background
   - Brand: "Visual Product Matcher by *nilesh*"
   - Tagline with glassmorphic card
   - Theme toggle (top-right)

2. **Search Interface**
   - Dual upload options:
     - Drag & drop zone
     - URL input
   - Controls:
     - Similarity threshold slider (0-100%)
     - Results count (5-50)
   - Demo images (shoes, scarf, bag, etc.)

3. **Results Grid**
   - Masonry layout
   - Product cards with:
     - Image
     - Product name & category
     - Similarity score (circular progress)
     - Hover effects

4. **Features Section**
   - 4 glass cards:
     - AI-Powered Search
     - 42,700+ Products
     - Lightning Fast
     - Cloud Storage

5. **Footer**
   - "Created by Nilesh Kumar"
   - Email & website link
   - Minimal, glass effect

---

## 🔌 API Integration

### Endpoints Used
1. `GET /api/health` - Health check
2. `POST /api/upload` - Upload image & search
3. `POST /api/search-url` - Search by URL
4. `GET /api/stats` - Get statistics

### Environment Variables
```
VITE_API_BASE_URL=https://vsearch.knileshh.com
```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn components
│   ├── Hero.jsx
│   ├── SearchInterface.jsx
│   ├── UploadZone.jsx
│   ├── UrlSearch.jsx
│   ├── ResultsGrid.jsx
│   ├── ProductCard.jsx
│   ├── Features.jsx
│   ├── Footer.jsx
│   └── ThemeToggle.jsx
├── lib/
│   ├── api.js           # API calls
│   └── utils.js
├── hooks/
│   ├── useSearch.js
│   └── useTheme.js
├── context/
│   └── ThemeContext.jsx
├── assets/
│   └── demo/            # Demo images
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🚀 Implementation Strategy

### Git Commit Strategy
Small, meaningful commits:
1. Initial Vite setup
2. Tailwind configuration
3. Design system setup
4. Each component individually
5. API integration
6. Theme toggle
7. Responsive polish
8. Final optimizations

### Mobile-First Approach
- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- Touch-friendly controls
- Optimized images
- Fast load times

---

## 🎯 Key Features

1. **Glassmorphism UI** - Modern, translucent design
2. **Theme Toggle** - Dark/Light mode
3. **Drag & Drop** - Easy image upload
4. **URL Search** - Search by image URL
5. **Demo Images** - Pre-loaded samples
6. **Adjustable Controls** - Threshold & result count
7. **Masonry Grid** - Beautiful results layout
8. **Animations** - Smooth transitions with Framer Motion
9. **Responsive** - Perfect on all devices
10. **Fast** - Optimized for performance

---

## ✅ Deliverables

- ✅ Production-ready React app
- ✅ Glassmorphic design system
- ✅ Theme toggle (dark/light)
- ✅ API integration with vsearch.knileshh.com
- ✅ Demo images for testing
- ✅ Mobile-first responsive design
- ✅ Vercel deployment ready
- ✅ Clean, documented code
- ✅ .env.example for configuration
- ✅ README.md with setup instructions
