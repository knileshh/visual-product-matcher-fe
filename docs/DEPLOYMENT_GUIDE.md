# Visual Product Matcher - Frontend Deployment Guide

## 📋 Pre-Deployment Checklist

✅ All components implemented
✅ API integration complete
✅ Theme toggle functional
✅ Responsive design tested
✅ Environment variables configured

## 🚀 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Set Environment Variables:**
   ```bash
   vercel env add VITE_API_BASE_URL production
   # Enter: https://vsearch.knileshh.com
   ```

5. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

### Option 2: Vercel Dashboard

1. **Connect GitHub Repository:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository

2. **Configure Build Settings:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Add Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add: `VITE_API_BASE_URL` = `https://vsearch.knileshh.com`

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete

## 🔧 Environment Variables

Required environment variables:

```env
VITE_API_BASE_URL=https://vsearch.knileshh.com
```

## 📦 Build Locally

To test the production build locally:

```bash
npm run build
npm run preview
```

## 🌐 Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Wait for SSL certificate

## 🧪 Testing After Deployment

1. **Health Check:**
   - Verify API connection
   - Test upload functionality
   - Test URL search

2. **Performance:**
   - Check Lighthouse scores
   - Test on mobile devices
   - Verify loading times

3. **Features:**
   - Theme toggle
   - Demo images
   - Similarity controls
   - Results display

## 📊 Performance Optimization

Already implemented:
- ✅ Lazy loading for images
- ✅ Code splitting
- ✅ Optimized assets
- ✅ CDN for images (Cloudinary)

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### API Connection Issues

- Verify `VITE_API_BASE_URL` is set correctly
- Check API CORS settings
- Test API endpoint directly

### Styling Issues

```bash
# Rebuild Tailwind
npm run build
```

## 📝 Post-Deployment

1. **Update DNS** (if using custom domain)
2. **Test all features**
3. **Monitor analytics** (if added)
4. **Share URL** with stakeholders

## 🎉 Your App is Live!

The Visual Product Matcher frontend is now deployed and ready to use!

---

Created by Nilesh Kumar | [knileshh.com](https://knileshh.com)
