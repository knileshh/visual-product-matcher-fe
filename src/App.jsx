import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import SearchInterface from './components/SearchInterface';
import ResultsGrid from './components/ResultsGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import BackendNotice from './components/BackendNotice';
import { uploadAndSearch, searchByUrl } from './lib/api';
import { useTheme } from './hooks/useTheme';

// Demo images data (will be replaced with actual images later)
const demoImages = [
  {
    label: 'Sneakers',
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    path: 'demo/sneakers.jpg'
  },
  {
    label: 'Handbag',
    thumbnail: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
    path: 'demo/handbag.jpg'
  },
  {
    label: 'Scarf',
    thumbnail: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop',
    path: 'demo/scarf.jpg'
  },
  {
    label: 'Watch',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    path: 'demo/watch.jpg'
  }
];

function AppContent() {
  const { theme } = useTheme();
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setIsLoading(true);
    setError(null);
    
    try {
      let response;
      
      if (searchParams.type === 'upload') {
        response = await uploadAndSearch(
          searchParams.file,
          searchParams.k,
          searchParams.threshold
        );
      } else if (searchParams.type === 'url') {
        response = await searchByUrl(
          searchParams.url,
          searchParams.k,
          searchParams.threshold
        );
      } else if (searchParams.type === 'demo') {
        // For demo, use URL search with the demo image URL
        response = await searchByUrl(
          demoImages.find(d => d.path === searchParams.imagePath)?.thumbnail,
          searchParams.k,
          searchParams.threshold
        );
      }

      if (response?.success && response?.products) {
        setResults(response.products);
      } else {
        setError('No results found');
        setResults([]);
      }
    } catch (err) {
      console.error('Search error:', err);
      setError(err.message || 'Failed to search. Please try again.');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-noise">
      {/* Animated Dual-Tone Gradient Background */}
      <div className={`fixed inset-0 -z-10 transition-opacity duration-1000 ${
        theme === 'dark' ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Dark Mode Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#151937] to-[#1a1f3a]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-[100px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        </div>
      </div>

      {/* Light Mode Background */}
      <div className={`fixed inset-0 -z-10 transition-opacity duration-1000 ${
        theme === 'light' ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4ff] via-[#e8edff] to-[#dbeafe]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-violet-300/30 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-300/30 blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-cyan-300/25 blur-[100px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        </div>
      </div>

      {/* Content */}
      <div className={`relative transition-colors duration-500 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        <ThemeToggle />
        <Hero />
        <SearchInterface 
          onSearch={handleSearch} 
          isLoading={isLoading}
          demoImages={demoImages}
        />
        
        {error && (
          <div className="px-4 max-w-4xl mx-auto">
            <div className="glass glass-dark rounded-xl p-4 border-l-4 border-red-500">
              <p className="text-red-400">{error}</p>
            </div>
          </div>
        )}
        
        <ResultsGrid results={results} isLoading={isLoading} />
        <Features />
        <Footer />
        <BackendNotice />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

