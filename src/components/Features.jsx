import { motion } from 'framer-motion';
import { Brain, Zap, Database, Cloud } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Search',
    description: 'OpenAI CLIP model for semantic visual understanding',
  },
  {
    icon: Database,
    title: '42,700+ Products',
    description: 'Comprehensive fashion catalog with FAISS indexing',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Search results in under 100ms across entire catalog',
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'Cloudinary CDN for globally distributed images',
  },
];

export default function Features() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <section className="relative px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Powered by Advanced Technology
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-white/60' : 'text-gray-600'
          }`}>
            Enterprise-grade visual search with production-ready performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:scale-105 transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDark 
                      ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
                      : 'bg-gradient-to-br from-indigo-500 to-purple-500'
                  }`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-heading font-semibold text-lg mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${
                      isDark ? 'text-white/60' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
