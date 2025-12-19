# Logo Setup Instructions

## Adding Your Logo Images

To complete the logo setup, please add your three logo image files to this directory:

1. **logo-1.png** - Simple serif font logo
2. **logo-2.png** - Handwritten style with palm trees (CURRENTLY IN USE)
3. **logo-3.png** - Handwritten style (simple)

## File Requirements

- **Format**: PNG (with transparent background recommended)
- **Recommended size**: 
  - Width: 300-400px
  - Height: Auto (maintain aspect ratio)
  - For logo-2.png: Ensure it looks good at both desktop (48px height) and mobile (40px height)

## Where Logos Are Used

### Next.js Version (Main Application)
- **Navbar**: `components/Navbar.tsx` - Uses logo-2.png
- **Footer**: `components/Footer.tsx` - Uses logo-2.png
- **Path**: `/images/logos/logo-2.png` (served from `public/` directory)

### Static HTML Version
- **Navbar**: `index.html` - Uses logo-2.png
- **Footer**: `index.html` - Uses logo-2.png
- **Path**: `public/images/logos/logo-2.png` (relative to HTML file)

## Switching Logos

To switch to a different logo, update the image filename in:
1. `components/Navbar.tsx` - Change `logo-2.png` to `logo-1.png` or `logo-3.png`
2. `components/Footer.tsx` - Change `logo-2.png` to `logo-1.png` or `logo-3.png`
3. `index.html` - Change `logo-2.png` to `logo-1.png` or `logo-3.png` (in both navbar and footer)

## Testing

After adding your logo files:
1. For Next.js: Run `npm run dev` and check the navbar and footer
2. For static HTML: Open `index.html` in a browser (or use a local server)

## Notes

- The logo images should have transparent backgrounds for best results
- The CSS automatically scales the logos for responsive design
- Logo colors should work well on both white (navbar) and dark (footer) backgrounds

