# 🤝 Contributing to Visual Product Matcher

First off, thank you for considering contributing to Visual Product Matcher! It's people like you that make this project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please be respectful and constructive in all interactions.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Setup

```bash
# Fork the repository on GitHub

# Clone your fork
git clone https://github.com/YOUR_USERNAME/visual-product-matcher-fe.git
cd visual-product-matcher-fe

# Add upstream remote
git remote add upstream https://github.com/knileshh/visual-product-matcher-fe.git

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

## 🎯 How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, browser, Node version)

**Example:**

```markdown
## Bug: Theme toggle doesn't persist on refresh

### Steps to Reproduce
1. Open the app in dark mode
2. Toggle to light mode
3. Refresh the page
4. Theme reverts to dark

### Expected
Theme should persist across refreshes

### Environment
- OS: Windows 11
- Browser: Chrome 120
- Node: 18.17.0
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Include:

- **Clear title and description**
- **Use case** - why is this needed?
- **Mockups** (if applicable)
- **Implementation ideas** (optional)

### Pull Requests

1. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow style guidelines
   - Add comments for complex logic

3. **Test thoroughly**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**

## 🔄 Development Workflow

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates
- `style/` - Code style changes
- `test/` - Test additions/modifications

**Examples:**
- `feature/search-filters`
- `fix/mobile-layout`
- `refactor/api-client`

### Making Changes

1. **Keep changes focused**
   - One feature/fix per PR
   - Don't mix unrelated changes

2. **Write meaningful commits**
   - Follow commit message guidelines
   - Reference issues when applicable

3. **Update documentation**
   - Update README if needed
   - Add JSDoc comments
   - Update API documentation

4. **Test your changes**
   - Test in multiple browsers
   - Test responsive design
   - Test both themes

## 🎨 Style Guidelines

### JavaScript/React

```javascript
// ✅ Good
const handleSearch = async (params) => {
  try {
    const response = await api.search(params);
    setResults(response.data);
  } catch (error) {
    console.error('Search failed:', error);
  }
};

// ❌ Avoid
function handleSearch(params){
const response=api.search(params)
setResults(response.data)
}
```

### Component Structure

```jsx
// Component template
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function MyComponent({ prop1, prop2 }) {
  const { theme } = useTheme();
  const [state, setState] = useState(null);

  // Event handlers
  const handleClick = () => {
    // Logic here
  };

  // Render
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`container ${theme === 'dark' ? 'dark-class' : 'light-class'}`}
    >
      {/* Content */}
    </motion.div>
  );
}
```

### CSS/Tailwind

```jsx
// ✅ Good - Organized classes
className="flex items-center gap-4 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 transition-smooth"

// ❌ Avoid - Random order
className="text-white transition-smooth from-indigo-600 hover:scale-105 flex rounded-lg to-purple-600 items-center bg-gradient-to-r px-6 gap-4 py-3"
```

**Class Order:**
1. Layout (flex, grid, position)
2. Sizing (w-, h-, p-, m-)
3. Typography (text-, font-)
4. Colors (bg-, text-, border-)
5. Effects (shadow-, opacity-)
6. Interactions (hover:, transition-)

### Naming Conventions

```javascript
// Components: PascalCase
MyComponent.jsx

// Files: camelCase
myUtility.js
apiClient.js

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = '...';

// Functions: camelCase
const handleSubmit = () => {};

// Classes: camelCase
const className = 'my-class';
```

## 📝 Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, missing semi-colons, etc)
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```bash
# Feature
feat(search): add filter by price range

# Bug fix
fix(theme): persist theme selection across sessions

# Documentation
docs(readme): update installation instructions

# Refactor
refactor(api): simplify error handling logic

# Multiple changes
feat(search): add advanced filters

- Add price range filter
- Add category filter
- Add sort options
- Update UI for new filters

Closes #123
```

## 🔍 Pull Request Process

### Before Submitting

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No console errors
- [ ] Tested in multiple browsers
- [ ] Responsive design verified
- [ ] Both themes tested

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots
Add screenshots if applicable

## Checklist
- [ ] Code follows guidelines
- [ ] Self-reviewed
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No console errors
- [ ] Tested thoroughly
```

### Review Process

1. Maintainer reviews your PR
2. Address any feedback
3. Approval required before merge
4. Squash and merge to master

## 🐛 Debugging Tips

### Development

```bash
# Check for errors
npm run lint

# Build and check for issues
npm run build

# Test production build
npm run preview
```

### Common Issues

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173
```

**Module not found:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## 🙋 Getting Help

- **GitHub Issues** - For bugs and features
- **Email** - hey@knileshh.com
- **Documentation** - Check README and docs

## 🎉 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Forever appreciated! 💖

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing! 🚀**
