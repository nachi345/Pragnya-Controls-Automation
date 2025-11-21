# Pragnya Controls & Automation Website

A modern, responsive React website for Pragnya Controls & Automation - an industrial control and automation solutions company.

## Features

- **4 Beautiful Pages**: Home, About, Services, and Contact
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Smooth Navigation**: React Router for seamless page transitions
- **Interactive Components**: Contact form with validation and feedback
- **Performance Optimized**: Fast loading with Vite bundler
- **Professional Styling**: Custom color scheme and typography

## Tech Stack

- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite 7** - Fast build tool
- **Lucide Icons** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd pragnya-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173/`

### Building

Build for production:
```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
pragnya-website/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx   # Navigation bar
│   │   └── Footer.jsx   # Footer section
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Home page
│   │   ├── About.jsx    # About us page
│   │   ├── Services.jsx # Services page
│   │   └── Contact.jsx  # Contact us page
│   ├── assets/          # Images and static assets
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## Pages

### Home
- Hero section with call-to-action buttons
- Features showcasing company strengths
- Conversion-focused CTA section

### About
- Company overview and history
- Key statistics and achievements
- Company values
- Timeline of milestones
- Leadership team

### Services
- Detailed service descriptions
- Features for each service
- Service delivery process
- Technology stack section
- Conversion CTA

### Contact
- Contact information
- Contact form with validation
- Why contact information
- FAQ section
- Location placeholder

## Customization

### Colors
Edit `tailwind.config.js` to customize the primary color and theme:
```javascript
colors: {
  primary: '#c41e3a',      // Change this to your brand color
  'primary-dark': '#9b1630'
}
```

### Content
Update the content in each page component (`src/pages/*.jsx`) with your actual company information.

### Images & Assets
Add your company logo and images to `src/assets/` and update the import paths in components.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify

### Traditional Server
1. Build: `npm run build`
2. Upload the `dist/` folder to your web server

## Performance

This website is optimized for:
- Fast loading times (Vite + code splitting)
- Mobile responsiveness
- SEO-friendly structure
- Accessibility standards

## Support

For questions or issues, please contact the development team.

## License

All rights reserved by Pragnya Controls & Automation.
# Pragnya-Controls-Automation
