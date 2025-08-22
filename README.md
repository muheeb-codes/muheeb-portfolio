# 🚀 Muheeb Ahmed - Portfolio Website

A modern, responsive portfolio website showcasing my development skills, projects, and professional journey. Built with React, TypeScript, and modern web technologies.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-purple)
![Vite](https://img.shields.io/badge/Vite-5.0-orange)

## ✨ Features

### 🎨 **Design & UX**
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion powered animations
- **Custom Cursor**: Interactive custom cursor with hover effects
- **Scroll Progress**: Visual scroll progress indicator
- **Responsive Design**: Perfect on all devices and screen sizes
- **Beautiful Splash Screen**: Animated loading screen

### 🛠️ **Functionality**
- **Contact Form**: Working contact form with mailto integration
- **Project Showcase**: Interactive project cards with live demos
- **Skills Visualization**: Radar chart and skill cards
- **Command Palette**: Quick navigation with ⌘K shortcut
- **Theme Customizer**: Advanced theme customization options
- **Smooth Scrolling**: Seamless navigation between sections

### 📱 **Performance**
- **Optimized Performance**: Throttled animations and events
- **Fast Loading**: Vite build optimization
- **SEO Ready**: Meta tags and structured data
- **Accessibility**: ARIA labels and keyboard navigation

## 🏗️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Hook Form** - Form handling and validation
- **Lucide React** - Beautiful icon library

### **Build Tools**
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **ESLint** - Code linting and formatting

### **Libraries**
- **Chart.js** - Data visualization for skills
- **React Chart.js 2** - React wrapper for Chart.js
- **Yup** - Schema validation
- **@hookform/resolvers** - Form validation integration

## 🚀 Live Demo

**🌐 [View Live Portfolio](https://)**

## 📸 Screenshots

### Desktop View
![Desktop View](https://via.placeholder.com/800x500/3B82F6/FFFFFF?text=Desktop+View)

### Mobile View
![Mobile View](https://via.placeholder.com/400x600/8B5CF6/FFFFFF?text=Mobile+View)

### Dark Mode
![Dark Mode](https://via.placeholder.com/800x500/1F2937/FFFFFF?text=Dark+Mode)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/muheeb-codes/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── CustomCursor.tsx # Custom cursor
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   └── SplashScreen.tsx # Loading screen
├── hooks/              # Custom React hooks
│   └── useDarkMode.ts  # Dark mode hook
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎯 Key Features Explained

### **Dark Mode Implementation**
- Uses `useDarkMode` custom hook
- Persists preference in localStorage
- Respects system preference
- Smooth theme transitions

### **Contact Form**
- React Hook Form for validation
- Yup schema validation
- Mailto integration for immediate functionality
- Success/error notifications
- Form reset after submission

### **Project Showcase**
- Interactive project cards
- Live demo and GitHub links
- Technology tags
- Detailed project modals
- Case study integration

### **Performance Optimizations**
- Throttled scroll and mouse events
- Optimized animations
- Lazy loading components
- Efficient re-renders with useCallback

## 🎨 Customization

### **Colors & Themes**
Edit `tailwind.config.js` to customize:
- Primary colors
- Dark mode colors
- Animation durations
- Custom gradients

### **Content Updates**
- **Personal Info**: Update `Hero.tsx` and `About.tsx`
- **Projects**: Modify `Projects.tsx` array
- **Skills**: Update `Skills.tsx` data
- **Contact**: Change email in `Contact.tsx`

### **Styling**
- **Global Styles**: Edit `src/index.css`
- **Component Styles**: Use Tailwind classes
- **Animations**: Modify Framer Motion variants

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### **Environment Variables**
Create a `.env` file for custom configurations:
```env
VITE_SITE_URL=your-site-url
VITE_CONTACT_EMAIL=your-email@example.com
```

### **Build Configuration**
- **Vite Config**: Optimized for production builds
- **Chunk Splitting**: Separate vendor and app bundles
- **Asset Optimization**: Compressed images and fonts

## 🚀 Deployment

### **Netlify (Recommended)**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### **Vercel**
1. Import your GitHub repository
2. Vercel auto-detects Vite configuration
3. Deploy with zero configuration

### **GitHub Pages**
1. Add `base: '/your-repo-name/'` to `vite.config.ts`
2. Set up GitHub Actions for deployment
3. Enable GitHub Pages in repository settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Chart.js** for data visualization
- **React Hook Form** for form handling

## 📞 Contact

- **Email**: muheebtechsec@gmail.com
- **LinkedIn**: [Muheeb Ahmed](https://www.linkedin.com/in/muheeb-ahmed-4a7b83367/)
- **GitHub**: [@muheeb-codes](https://github.com/muheeb-codes)
- **Twitter**: [@MuheebAhme2025](https://x.com/MuheebAhme2025)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Muheeb Ahmed](https://github.com/muheeb-codes)

</div>
