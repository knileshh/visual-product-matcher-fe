import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export default function UploadZone({ onImageSelect, selectedImage, onClear }) {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      const file = acceptedFiles[0];
      onImageSelect(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageSelect]);

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

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!preview ? (
          <motion.div
            key="dropzone"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            {...getRootProps()}
            className={cn(
              'relative cursor-pointer transition-smooth',
              'border-2 border-dashed rounded-2xl p-12',
              'glass glass-dark hover:bg-white/15',
              isDragActive ? 'border-dark-primary bg-dark-primary/10' : 'border-white/20'
            )}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className={cn(
                'p-4 rounded-full transition-smooth',
                isDragActive ? 'bg-dark-primary/20' : 'bg-white/5'
              )}>
                {isDragActive ? (
                  <ImageIcon className="w-8 h-8 text-dark-primary" />
                ) : (
                  <Upload className="w-8 h-8 text-white/60" />
                )}
              </div>
              <div>
                <p className="text-lg font-medium mb-1">
                  {isDragActive ? 'Drop your image here' : 'Drag & drop an image'}
                </p>
                <p className="text-sm text-white/50">
                  or click to browse (JPEG, PNG, WebP)
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative glass glass-dark rounded-2xl p-4"
          >
            <button
              onClick={handleClear}
              className="absolute top-6 right-6 z-10 p-2 rounded-full glass glass-dark hover:bg-white/20 transition-smooth"
              aria-label="Remove image"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-auto max-h-96 object-contain rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
