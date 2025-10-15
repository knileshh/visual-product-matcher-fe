import { useState } from 'react';
import { Link as LinkIcon, Search } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

export default function UrlSearch({ onUrlSubmit, isLoading }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onUrlSubmit(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <LinkIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
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
    </form>
  );
}
