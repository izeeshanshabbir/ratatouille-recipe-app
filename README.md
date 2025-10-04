# 🍲 Ratatouille Recipe App

A beautiful, modern recipe application inspired by Pixar's *Ratatouille*. Built with the latest **Nuxt 4** for cutting-edge performance and developer experience. Because as Chef Gusteau said, **"Anyone can cook!"**

![Nuxt 4](https://img.shields.io/badge/Nuxt_4-4.1.2-00DC82?style=flat&logo=nuxt.js&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-3.5.22-4FC08D?style=flat&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎨 **Elegant French-inspired Design** - Custom color palette featuring golden warmth, wine red, and parchment backgrounds
- 📱 **Fully Responsive** - Seamless experience across all devices
- ⚡ **Built with Nuxt 4** - Leveraging the latest features for optimal performance and SEO
- 🖼️ **Optimized Images** - Automatic image optimization with Nuxt Image
- 🎭 **Smooth Page Transitions** - Elegant fade animations between pages
- 🔍 **SEO Optimized** - Complete meta tags and Open Graph support
- ♿ **Accessible** - Built with accessibility best practices
- 📝 **Type-Safe** - Full TypeScript support throughout

## 🎯 Demo

Browse recipes, view detailed cooking instructions, and explore the joy of French-inspired cuisine!

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/izeeshanshabbir/ratatouille-recipe-app.git

# Navigate to project directory
cd ratatouille-recipe-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the app in action!

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build

# Setup
npm run postinstall  # Prepare Nuxt
```

## 🏗️ Project Structure

```
ratatouille-recipe-app/
├── assets/
│   └── css/
│       └── main.css         # Global styles and transitions
├── components/
│   ├── BaseBtn.vue          # Reusable button component
│   ├── BaseNavigation.vue   # Header navigation
│   └── RecipeCard.vue       # Recipe card component
├── layouts/
│   └── default.vue          # Default layout wrapper
├── pages/
│   ├── index.vue            # Homepage with recipe grid
│   ├── about.vue            # About page
│   └── recipes/
│       └── [id].vue         # Dynamic recipe detail page
├── types/
│   └── types.ts             # TypeScript interfaces
├── public/                  # Static assets
├── app.vue                  # Root component
├── error.vue                # Custom error page
├── nuxt.config.ts           # Nuxt configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Color Palette

```css
--rat-gold: #f79f1a    /* Golden warmth */
--rat-red: #7B2D26     /* Wine red */
--rat-navy: #2C3E50    /* Deep navy */
--rat-cream: #F5F3E7   /* Parchment background */
--rat-green: #708238   /* Herb accent */
```

### Typography

- **Playfair Display** - Elegant serif for headings
- **Montserrat** - Clean sans-serif for body text

## 🔧 Tech Stack

- **Framework:** Nuxt 4.1.2 (Latest)
- **Frontend:** Vue 3.5.22
- **Language:** TypeScript
- **Styling:** Tailwind CSS 6.14.0
- **Icons:** Nuxt Icon 2.0.0
- **Images:** Nuxt Image 1.11.0
- **Fonts:** Google Fonts (Montserrat, Playfair Display)
- **API:** DummyJSON Recipes API

## 📄 Pages

### Home (`/`)
- Hero section with call-to-action
- Grid of featured recipes (12 recipes)
- Smooth scroll to recipes section

### Recipe Detail (`/recipes/[id]`)
- Full recipe information
- Interactive ingredient checklist
- Step-by-step instructions
- Cooking time, calories, and ratings

### About (`/about`)
- Story behind the app
- Inspiration from Ratatouille

## 🌐 API Integration

This app uses the [DummyJSON Recipes API](https://dummyjson.com/docs/recipes) to fetch recipe data:

```typescript
// Fetch multiple recipes
GET https://dummyjson.com/recipes?limit=12

// Fetch single recipe
GET https://dummyjson.com/recipes/{id}
```

## 🎭 Custom Features

### Interactive Ingredient Checklist
Check off ingredients as you gather them with a custom checkbox design.

### Page Transitions
Smooth fade-in/fade-out animations between route changes.

### Error Handling
Custom error page with elegant design and easy navigation back home.

## 🚢 Deployment

This project is optimized for deployment on **Vercel**.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/izeeshanshabbir/ratatouille-recipe-app)

**One-click deployment:**
1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Vercel will automatically detect Nuxt 4 and configure everything
4. Your app will be live in minutes!

**Manual deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build Commands
Vercel automatically detects Nuxt 4 and uses:
- **Build Command:** `nuxt build`
- **Output Directory:** `.output`
- **Install Command:** `npm install`

### Other Platforms

You can also deploy to:
- **Netlify** - Full SSR support
- **Cloudflare Pages** - Edge deployment
- **Railway** - Containerized deployment

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by Pixar's *Ratatouille*
- Recipe data from [DummyJSON](https://dummyjson.com/)
- Icons from [Material Design Icons](https://pictogrammers.com/library/mdi/)

## 📬 Contact

Zeeshan Shabbir Abbasi - [@izeeshanshabbir](https://github.com/izeeshanshabbir)

Project Link: [https://github.com/izeeshanshabbir/ratatouille-recipe-app](https://github.com/izeeshanshabbir/ratatouille-recipe-app)

---

Made with ❤️ by Zeeshan Shabbir Abbasi

**Remember: Anyone can cook!** 👨‍🍳✨