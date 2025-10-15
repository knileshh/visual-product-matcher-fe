import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import SearchInterface from './components/SearchInterface';
import ResultsGrid from './components/ResultsGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import { uploadAndSearch, searchByUrl } from './lib/api';

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

function App() {
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
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] dark:from-[#0a0e27] dark:to-[#1a1f3a] light:from-[#f8fafc] light:to-[#e0e7ff] text-white dark:text-white light:text-gray-900">
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
      </div>
    </ThemeProvider>
  );
}

export default App;

