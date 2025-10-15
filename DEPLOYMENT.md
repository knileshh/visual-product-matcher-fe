# 🚀 Deployment Guide

This guide will help you deploy the Visual Product Matcher frontend to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] All tests pass
- [ ] Environment variables configured
- [ ] API endpoint is accessible
- [ ] Build succeeds locally
- [ ] No console errors in production build
- [ ] Favicon and meta tags are correct
- [ ] All assets are optimized

## 🌐 Vercel (Recommended)

Vercel is the recommended platform for deploying Vite applications.

### Method 1: GitHub Integration (Automatic)

1. **Push to GitHub**
   ```bash
   git push origin master
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration

3. **Configure Environment Variables**
   - Add `VITE_API_BASE_URL` in Vercel dashboard
   - Go to Settings → Environment Variables
   - Add production values

4. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys automatically
   - Get your production URL

### Method 2: Vercel CLI (Manual)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables in Vercel

```env
VITE_API_BASE_URL=https://your-api-domain.com
```

## 🚢 Netlify

### Method 1: Drag and Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to deploy
   - Configure domain

### Method 2: GitHub Integration

1. **Connect Repository**
   - New site from Git
   - Connect GitHub repository

2. **Configure Build**
   ```yaml
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add `VITE_API_BASE_URL`

4. **Deploy**

### netlify.toml Configuration

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 📦 Static Hosting (Generic)

### Build for Production

```bash
# Install dependencies
npm install

# Build
npm run build

# The dist/ folder contains your production build
```

### Deploy to Any Static Host

Upload the `dist` folder to:
- **AWS S3 + CloudFront**
- **Google Cloud Storage**
- **Azure Static Web Apps**
- **GitHub Pages**
- **Cloudflare Pages**

### Important Considerations

1. **SPA Routing**
   Configure server to redirect all routes to `index.html`

2. **Environment Variables**
   Set `VITE_API_BASE_URL` in your hosting platform

3. **CORS**
   Ensure your API allows requests from your domain

## 🐳 Docker Deployment

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Build and Run

```bash
# Build image
docker build -t visual-product-matcher-fe .

# Run container
docker run -p 80:80 visual-product-matcher-fe
```

## 🔧 Environment Variables

### Development (.env.development)

```env
VITE_API_BASE_URL=http://localhost:8000
```

### Production (.env.production)

```env
VITE_API_BASE_URL=https://api.yourdomain.com
```

## 🌍 Custom Domain

### Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records (Vercel provides instructions)
4. Wait for SSL certificate provisioning

### Netlify

1. Go to Domain settings
2. Add custom domain
3. Configure DNS
4. SSL auto-provisioned

## 🔒 SSL/HTTPS

All recommended platforms (Vercel, Netlify) provide free SSL certificates automatically via Let's Encrypt.

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Lazy load images

2. **Code Splitting**
   - Already configured in Vite
   - Automatic route-based splitting

3. **Build Analysis**
   ```bash
   npm run build -- --mode production
   ```

4. **Remove Console Logs**
   - Vite automatically removes in production

### After Deployment

1. **Enable Compression**
   - Gzip/Brotli (usually automatic)

2. **CDN Configuration**
   - Cache static assets
   - Set proper cache headers

3. **Monitor Performance**
   - Use Lighthouse
   - Check Core Web Vitals

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install

# Rebuild
npm run build
```

### 404 on Refresh

Configure server for SPA routing (see platform-specific guides above)

### Environment Variables Not Working

- Ensure variables start with `VITE_`
- Restart dev server after changes
- Check platform environment variable settings

### API Connection Issues

- Verify `VITE_API_BASE_URL` is correct
- Check CORS settings on backend
- Ensure API is accessible from deployed domain

## 📈 Monitoring

### Recommended Tools

- **Vercel Analytics** (built-in)
- **Google Analytics**
- **Sentry** (error tracking)
- **LogRocket** (session replay)

### Add Analytics

```javascript
// src/main.jsx
import { analytics } from './lib/analytics'

analytics.init('YOUR_TRACKING_ID')
```

## 🔄 Continuous Deployment

### GitHub Actions

```yaml
name: Deploy

on:
  push:
    branches: [master]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist
```

## 📝 Deployment Notes

### Current Setup

- **Frontend**: Static files (HTML, CSS, JS)
- **Backend**: Separate API server
- **Images**: Cloudinary CDN
- **Search**: FAISS vector database

### Scaling Considerations

1. **Frontend**: Scales automatically on CDN
2. **Backend**: May need load balancing
3. **Database**: Consider managed FAISS services

## 🎉 Post-Deployment

1. **Test Thoroughly**
   - All search methods
   - Theme switching
   - Mobile responsiveness
   - Cross-browser compatibility

2. **Update DNS**
   - Point domain to deployment

3. **Share**
   - Update GitHub repository link
   - Share on social media
   - Add to portfolio

## 📞 Support

For deployment issues:
- Check platform documentation
- Open GitHub issue
- Email: hey@knileshh.com

---

**Ready to deploy? Let's go! 🚀**
