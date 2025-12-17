import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders } from 'lucide-react';
import UploadZone from './UploadZone';
import UrlSearch from './UrlSearch';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Slider } from './ui/Slider';
import { Button } from './ui/Button';
import { useTheme } from '../context/ThemeContext';

export default function SearchInterface({ onSearch, isLoading, demoImages }) {
  const { theme } = useTheme();
  const [searchMethod, setSearchMethod] = useState('upload'); // 'upload' or 'url'
  const [selectedFile, setSelectedFile] = useState(null);
  const [threshold, setThreshold] = useState(30);
  const [resultsCount, setResultsCount] = useState(20);

  const handleImageSelect = (file) => {
    setSelectedFile(file);
  };

  const handleClearImage = () => {
    setSelectedFile(null);
  };

  const handleSearch = () => {
    if (selectedFile) {
      onSearch({
        type: 'upload',
        file: selectedFile,
        threshold: threshold / 100,
        k: resultsCount
      });
    }
  };

  const handleUrlSearch = (url) => {
    onSearch({
      type: 'url',
      url,
      threshold: threshold / 100,
      k: resultsCount
    });
  };

  const handleDemoImage = (imagePath) => {
    onSearch({
      type: 'demo',
      imagePath,
      threshold: threshold / 100,
      k: resultsCount
    });
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative px-4 -mt-16 pb-12"
    >
      <div className="max-w-4xl mx-auto">
        <Card className="backdrop-blur-xl shadow-2xl">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <CardTitle className="flex items-center gap-2">
                <Sliders className={`w-6 h-6 ${theme === 'dark' ? 'text-violet-400' : 'text-violet-600'}`} />
                Search for Similar Products
              </CardTitle>
              <span className={`text-xs font-medium ${
                theme === 'dark' 
                  ? 'text-amber-400/90 bg-amber-500/10 border border-amber-500/20' 
                  : 'text-amber-700 bg-amber-50 border border-amber-200'
              } px-3 py-1.5 rounded-full whitespace-nowrap`}>
                ℹ️ Fashion items only
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Method Tabs */}
            <div className={`flex gap-2 p-1 rounded-xl ${
              theme === 'dark' 
                ? 'bg-white/10 backdrop-blur-md border border-white/20' 
                : 'bg-gradient-to-r from-violet-100/50 to-blue-100/50 border border-violet-200'
            }`}>
              <button
                onClick={() => setSearchMethod('upload')}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-smooth ${
                  searchMethod === 'upload'
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25'
                    : theme === 'dark' 
                      ? 'text-white/60 hover:text-white hover:bg-white/5' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                Upload Image
              </button>
              <button
                onClick={() => setSearchMethod('url')}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-smooth ${
                  searchMethod === 'url'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                    : theme === 'dark' 
                      ? 'text-white/60 hover:text-white hover:bg-white/5' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                Image URL
              </button>
            </div>

            {/* Upload/URL Section */}
            <div>
              {searchMethod === 'upload' ? (
                <UploadZone
                  onImageSelect={handleImageSelect}
                  selectedImage={selectedFile}
                  onClear={handleClearImage}
                />
              ) : (
                <UrlSearch onUrlSubmit={handleUrlSearch} isLoading={isLoading} />
              )}
            </div>

            {/* Search Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Similarity Threshold */}
              <div className="space-y-2">
                <label className={`flex items-center justify-between text-sm font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <span>Similarity Threshold</span>
                  <span className={theme === 'dark' ? 'text-violet-400' : 'text-violet-700'}>{threshold}%</span>
                </label>
                <Slider
                  min={0}
                  max={100}
                  value={threshold}
                  onChange={(e) => setThreshold(Number(e.target.value))}
                  className="w-full"
                />
                <p className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>
                  Lower values show more results, higher values show only close matches
                </p>
              </div>

              {/* Results Count */}
              <div className="space-y-2">
                <label className={`flex items-center justify-between text-sm font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <span>Results Count</span>
                  <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}>{resultsCount}</span>
                </label>
                <Slider
                  min={5}
                  max={50}
                  step={5}
                  value={resultsCount}
                  onChange={(e) => setResultsCount(Number(e.target.value))}
                  className="w-full"
                />
                <p className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>
                  Number of similar products to display
                </p>
              </div>
            </div>

            {/* Search Button (for upload method) */}
            {searchMethod === 'upload' && selectedFile && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <Button
                  onClick={handleSearch}
                  disabled={isLoading}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {isLoading ? 'Searching...' : 'Find Similar Products'}
                </Button>
              </div>
            )}

            {/* Demo Images */}
            {demoImages && demoImages.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-white/80">
                  Try with demo images:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {demoImages.map((demo, index) => (
                    <button
                      key={index}
                      onClick={() => handleDemoImage(demo.path)}
                      disabled={isLoading}
                      className="group relative aspect-square rounded-xl overflow-hidden glass glass-dark hover:scale-105 transition-smooth disabled:opacity-50"
                    >
                      <img
                        src={demo.thumbnail}
                        alt={demo.label}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                        <span className="absolute bottom-2 left-2 right-2 text-xs font-medium text-white text-center">
                          {demo.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
