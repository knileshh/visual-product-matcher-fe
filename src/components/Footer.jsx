import { Heart, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative px-4 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* Creator Credit */}
          <div className="flex items-center gap-2 text-white/80">
            <span>Created with</span>
            <Heart className="w-4 h-4 text-dark-accent fill-current" />
            <span>by</span>
            <span className="font-cursive text-2xl text-gradient">nilesh</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://knileshh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-smooth"
            >
              <ExternalLink className="w-4 h-4" />
              knileshh.com
            </a>
            <a
              href="mailto:hey@knileshh.com"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-smooth"
            >
              <Mail className="w-4 h-4" />
              hey@knileshh.com
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Visual Product Matcher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
