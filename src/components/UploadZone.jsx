import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon, X } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

export default function UploadZone({ onImageSelect, onClear, selectedImage }) {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      const file = acceptedFiles[0];
      onImageSelect(file);
    }
  }, [onImageSelect]);

  useEffect(() => {
    if (!selectedImage) {
      setPreview(null);
      return;
    }

    let isActive = true;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (isActive) {
        setPreview(e.target.result);
      }
    };
    reader.readAsDataURL(selectedImage);

    return () => {
      isActive = false;
    };
  }, [selectedImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    multiple: false
  });

  const handleClear = () => {
    setPreview(null);
    onClear();
  };

  const handlePaste = (e) => {
    const clipboardData = e.clipboardData;
    if (!clipboardData?.items?.length) return;

    const items = Array.from(clipboardData.items);
    const imageItem = items.find((item) => item.kind === 'file' && item.type?.startsWith('image/'));
    if (!imageItem) return;

    const file = imageItem.getAsFile();
    if (!file) return;

    e.preventDefault();
    onImageSelect(file);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!preview ? (
          <Motion.div
            key="dropzone"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            {...getRootProps({
              onPaste: handlePaste,
              tabIndex: 0
            })}
            className={cn(
              'relative cursor-pointer transition-smooth',
              'border-2 border-dashed rounded-2xl p-6 sm:p-12',
              isDarkTheme 
                ? 'bg-white/10 backdrop-blur-md hover:bg-white/15' 
                : 'bg-white/80 backdrop-blur-md hover:bg-white/90',
              isDragActive 
                ? isDarkTheme 
                  ? 'border-violet-500 bg-violet-500/10' 
                  : 'border-violet-500 bg-violet-100/50'
                : isDarkTheme 
                  ? 'border-white/20' 
                  : 'border-violet-200'
            )}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className={cn(
                'p-4 rounded-full transition-smooth',
                isDragActive 
                  ? isDarkTheme 
                    ? 'bg-violet-500/20' 
                    : 'bg-violet-200'
                  : isDarkTheme 
                    ? 'bg-white/5' 
                    : 'bg-violet-50'
              )}>
                {isDragActive ? (
                  <ImageIcon className={`w-8 h-8 ${
                    isDarkTheme ? 'text-violet-400' : 'text-violet-600'
                  }`} />
                ) : (
                  <Upload className={`w-8 h-8 ${
                    isDarkTheme ? 'text-white/60' : 'text-gray-400'
                  }`} />
                )}
              </div>
              <div>
                <p className={`text-lg font-medium mb-1 ${
                  isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>
                  {isDragActive ? 'Drop your image here' : 'Drag & drop an image'}
                </p>
                <p className={`text-sm ${
                  isDarkTheme ? 'text-white/50' : 'text-gray-500'
                }`}>
                  or click to browse / paste (Ctrl+V)
                </p>
              </div>
            </div>
          </Motion.div>
        ) : (
          <Motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`relative rounded-2xl p-4 ${
              isDarkTheme 
                ? 'bg-white/10 backdrop-blur-md border border-white/20' 
                : 'bg-white/90 backdrop-blur-md border-2 border-violet-200'
            }`}
          >
            <button
              onClick={handleClear}
              className={`absolute top-6 right-6 z-10 p-2 rounded-full transition-smooth ${
                isDarkTheme 
                  ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
                  : 'bg-white hover:bg-violet-100 border-2 border-violet-200'
              }`}
              aria-label="Remove image"
            >
              <X className={`w-5 h-5 ${
                isDarkTheme ? 'text-white' : 'text-gray-700'
              }`} />
            </button>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-auto max-h-96 object-contain rounded-xl"
            />
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
