# Professional 3D Portfolio

A modern, professional portfolio built with React, Three.js, and Framer Motion. Features smooth animations, 3D elements, and a frontend-only email service.

## ✨ Features

- **3D Background Elements** - Interactive 3D shapes using Three.js
- **Smooth Animations** - Powered by Framer Motion for professional transitions
- **Responsive Design** - Works perfectly on all devices
- **Frontend Email Service** - EmailJS integration (no backend required)
- **Modern UI/UX** - Professional design with glassmorphism effects
- **GitHub Integration** - Automatically fetches your projects
- **Performance Optimized** - Lazy loading and optimized animations

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Three.js** - 3D graphics and animations
- **Framer Motion** - Smooth animations and transitions
- **EmailJS** - Frontend-only email service
- **CSS3** - Modern styling with gradients and effects

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_TOKEN=your_github_token
   REACT_APP_USERNAME=your_github_username
   ```

4. **Configure EmailJS** (for contact form)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and User ID
   - Update the Contact component with your IDs:
   ```jsx
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID',     // Replace with your service ID
     'YOUR_TEMPLATE_ID',    // Replace with your template ID
     formRef.current,
     'YOUR_USER_ID'         // Replace with your user ID
   );
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

## 🎨 Customization

### Personal Information
Update the following components with your information:

- **Hero.jsx** - Your name, title, and description
- **About.jsx** - Your personal story and experience
- **Contact.jsx** - Your contact details
- **Footer.jsx** - Your social media links

### Styling
The main styles are in `src/App.css`. You can customize:
- Color scheme (currently uses a blue-cyan theme)
- Typography
- Spacing and layout
- Animation timings

### 3D Elements
Modify the 3D background in `Hero.jsx`:
- Add/remove 3D shapes
- Change colors and transparency
- Adjust animation speeds
- Modify camera settings

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first approach
- Adaptive navigation
- Responsive grids
- Touch-friendly interactions

## 🚀 Deployment

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Configuration

### GitHub Projects
The portfolio automatically fetches your GitHub projects. Make sure:
- Your GitHub token has the necessary permissions
- Project names match the image files in `src/img/`
- Projects have descriptions

### EmailJS Setup
1. Create an EmailJS account
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the Contact component with your IDs

## 📁 Project Structure

```
src/
├── components/          # Main components
│   ├── LoadingScreen.jsx
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── img/                # Images and assets
├── App.js              # Main app component
├── App.css             # Global styles
└── index.js            # Entry point
```

## 🎯 Key Features Explained

### 3D Background
- Uses Three.js for 3D graphics
- Floating spheres and cubes with transparency
- Smooth rotation and movement
- Performance optimized

### Animations
- Framer Motion for smooth transitions
- Scroll-triggered animations
- Hover effects and micro-interactions
- Staggered animations for lists

### Email Service
- EmailJS for frontend-only email
- No backend required
- Form validation and status feedback
- Professional email templates

## 🐛 Troubleshooting

### Common Issues

1. **3D elements not showing**
   - Check browser WebGL support
   - Ensure Three.js is properly installed

2. **EmailJS not working**
   - Verify your service, template, and user IDs
   - Check EmailJS account status

3. **GitHub projects not loading**
   - Verify your GitHub token
   - Check network requests in browser dev tools

4. **Build errors**
   - Clear node_modules and reinstall
   - Check for syntax errors in components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Three.js community for 3D graphics
- Framer Motion team for animations
- EmailJS for email service
- React team for the amazing framework

---

**Built with ❤️ using modern web technologies**

For questions or support, feel free to reach out!
