# G&L Quality Goods Website

A modern, responsive HTML website for G&L Quality Goods - a consolidation platform that brings together different premium brands in one place.

## Features

- 🎨 Modern, beautiful UI with custom CSS
- 📱 Fully responsive design
- ⚡ Fast loading with vanilla JavaScript
- 🎯 Brand showcase with category filtering
- 🚀 Smooth animations and transitions
- ♿ Accessible and SEO-friendly

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with modern features
- **Vanilla JavaScript** - No frameworks, pure JS

## Getting Started

### Simple Setup

1. Open `index.html` in your web browser
   - Double-click the file, or
   - Right-click and select "Open with" → your browser

2. That's it! No build process needed.

### Using a Local Server (Recommended)

For the best experience, use a local server:

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js (http-server)**
```bash
npx http-server -p 8000
```

**Option 3: VS Code Live Server**
- Install the "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

Then open `http://localhost:8000` in your browser.

## Project Structure

```
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization

### Adding Brands

Edit the `brands` array in `script.js`:

```javascript
const brands = [
    {
        id: 1,
        name: 'Your Brand',
        description: 'Brand description',
        category: 'home',
        emoji: '🏠',
        color: 'from-blue-500 to-blue-600',
    },
    // Add more brands...
];
```

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-600: #0284c7;
    --primary-700: #0369a1;
    /* ... */
}
```

### Adding Pages

Create new HTML files and link them in the navigation.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © G&L Quality Goods
