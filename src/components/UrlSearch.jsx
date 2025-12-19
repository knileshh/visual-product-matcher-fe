import { useEffect, useRef, useState } from 'react';
import { Link as LinkIcon, Search } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { useTheme } from '../context/ThemeContext';

export default function UrlSearch({ onUrlSubmit, isLoading }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [url, setUrl] = useState('');
  const [previewStatus, setPreviewStatus] = useState('idle'); // idle | loading | loaded | error
  const [previewMessage, setPreviewMessage] = useState('');
  const previewRequestIdRef = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onUrlSubmit(url.trim());
    }
  };

  useEffect(() => {
    const nextUrl = url.trim();
    if (!nextUrl) {
      setPreviewStatus('idle');
      setPreviewMessage('');
      return;
    }

    const requestId = ++previewRequestIdRef.current;
    setPreviewStatus('loading');
    setPreviewMessage('');

    let protectedHint = false;

    // Best-effort hint: if CORS allows, HEAD can tell us 401/403.
    // If CORS blocks, we'll fall back to image onerror messaging.
    if (nextUrl.startsWith('http://') || nextUrl.startsWith('https://')) {
      fetch(nextUrl, { method: 'HEAD', mode: 'cors' })
        .then((res) => {
          if (requestId !== previewRequestIdRef.current) return;
          if (res.status === 401 || res.status === 403) {
            protectedHint = true;
          }
        })
        .catch(() => {
          // Ignore CORS/network failures here; the image load check below is authoritative for UI.
        });
    }

    const img = new Image();
    img.onload = () => {
      if (requestId !== previewRequestIdRef.current) return;
      setPreviewStatus('loaded');
      setPreviewMessage('');
    };
    img.onerror = () => {
      if (requestId !== previewRequestIdRef.current) return;
      setPreviewStatus('error');
      setPreviewMessage(
        protectedHint
          ? "This link appears protected (auth required), so the image can't be accessed."
          : "Image preview couldn't load. The link may be protected, expired, or blocking hotlinking."
      );
    };
    img.src = nextUrl;

    return () => {
      // Invalidate callbacks for prior URL.
      // Some browsers don't reliably cancel image fetches, so we just gate by requestId.
    };
  }, [url]);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <LinkIcon className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
            isDark ? 'text-white/40' : 'text-gray-400'
          }`} />
          <Input
            type="url"
            placeholder="Paste image URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="pl-12"
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          disabled={!url.trim() || isLoading}
          className="sm:w-auto w-full"
        >
          <Search className="w-4 h-4 mr-2" />
          {isLoading ? 'Searching...' : 'Search'}
        </Button>
      </div>

      {url.trim() && (
        <div
          className={`mt-3 rounded-xl p-3 transition-smooth ${
            isDark
              ? 'bg-white/5 backdrop-blur-md border border-white/10'
              : 'bg-white/70 backdrop-blur-md border-2 border-violet-200'
          }`}
        >
          {previewStatus === 'loading' && (
            <p className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
              Loading preview...
            </p>
          )}

          {previewStatus === 'error' && (
            <p className={`text-xs ${isDark ? 'text-amber-300/90' : 'text-amber-700'}`}>
              {previewMessage}
            </p>
          )}

          {previewStatus === 'loaded' && (
            <img
              key={url.trim()}
              src={url.trim()}
              alt="URL preview"
              className="w-full max-h-64 object-contain rounded-lg"
              onError={() => {
                setPreviewStatus('error');
                setPreviewMessage(
                  "Image preview couldn't load. The link may be protected, expired, or blocking hotlinking."
                );
              }}
            />
          )}
        </div>
      )}
    </form>
  );
}
