# CodeSpace Club Website

Welcome to the CodeSpace Club official website! This is a modern, responsive web application built to showcase our tech community, events, blogs, and team.

## 🚀 Live Demo

**URL**: https://lovable.dev/projects/24d4b3ca-4723-45e7-9f73-8fbef171b87d

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Populating Data](#populating-data)
- [Available Routes](#available-routes)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [Contact](#contact)

## 🎯 About

CodeSpace is a tech club dedicated to fostering innovation, learning, and collaboration among tech enthusiasts. This website serves as our digital hub where members and visitors can:

- Learn about our club and mission
- Browse upcoming events and workshops
- Read technical blogs and articles
- Meet our team members
- Get in touch with us

## 🛠️ Tech Stack

This project is built with modern web technologies:

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate

## 📁 Project Structure

```
codespace-website/
├── public/
│   ├── robots.txt              # SEO configuration
│   └── favicon.ico             # Site favicon
├── src/
│   ├── assets/                 # Static assets (images, logos)
│   │   ├── codespace-logo.png
│   │   └── team-photo.png
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn-ui components
│   │   ├── About.tsx           # About section component
│   │   ├── BlogSection.tsx     # Blog listing component
│   │   ├── ContactSection.tsx  # Contact form component
│   │   ├── Footer.tsx          # Footer with social links
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with logo
│   │   └── NavLink.tsx         # Navigation link component
│   ├── data/                   # Data files
│   │   ├── blogPosts.ts        # Blog posts data
│   │   └── events.ts           # Events data
│   ├── pages/                  # Page components
│   │   ├── Index.tsx           # Home page
│   │   ├── About.tsx           # About page
│   │   ├── Blogs.tsx           # Blog listing page
│   │   ├── BlogPost.tsx        # Individual blog post page
│   │   ├── Events.tsx          # Events listing page
│   │   ├── EventDetails.tsx    # Individual event page
│   │   ├── Team.tsx            # Team members page
│   │   └── NotFound.tsx        # 404 page
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── App.tsx                 # Main app component with routing
│   ├── index.css               # Global styles and design tokens
│   └── main.tsx                # Application entry point
├── supabase/
│   └── functions/              # Edge functions
│       └── send-contact-email/ # Contact form email handler
├── tailwind.config.ts          # Tailwind configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or bun package manager
- Git

### Local Development Setup

1. **Clone the repository**

```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**

```bash
npm install
# or
bun install
```

3. **Start the development server**

```bash
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:8080`

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Lint code
npm run lint
```

## 📝 Populating Data

### Adding Blog Posts

Edit `src/data/blogPosts.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "unique-slug",
    title: "Your Blog Title",
    excerpt: "Brief description of the blog post...",
    content: "Full blog content in markdown or HTML...",
    author: "Author Name",
    date: "2024-01-15",
    image: "/path-to-image.jpg",
    tags: ["tag1", "tag2"]
  },
  // Add more posts...
];
```

### Adding Events

Edit `src/data/events.ts`:

```typescript
export const events: Event[] = [
  {
    id: "unique-event-id",
    title: "Event Title",
    description: "Event description...",
    date: "2024-03-20",
    time: "6:00 PM - 8:00 PM",
    location: "Event Location",
    image: "/path-to-image.jpg",
    registrationLink: "https://registration-link.com",
    tags: ["workshop", "coding"]
  },
  // Add more events...
];
```

### Adding Images

1. Place images in `src/assets/` directory
2. Import in components:

```typescript
import myImage from "@/assets/my-image.png";

// Use in component
<img src={myImage} alt="Description" />
```

### Updating Social Media Links

Edit `src/components/Footer.tsx` to update social media links:

```typescript
const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/codespaceclub/", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/codespaceclub/", icon: Instagram },
  { name: "Twitter", href: "https://x.com/codespaceclub", icon: () => <TwitterIcon /> },
  { name: "Github", href: "https://github.com/codespace-club", icon: Github },
];
```

### Updating Contact Email

The contact form sends emails to: `Codespace.it@glbitm.ac.in`

To change this, edit `src/components/ContactSection.tsx` or the edge function in `supabase/functions/send-contact-email/index.ts`.

## 🌐 Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Index | Home page with hero, about, blogs, and contact |
| `/about` | About | Detailed about page |
| `/blogs` | Blogs | Blog listing page |
| `/blogs/:id` | BlogPost | Individual blog post |
| `/events` | Events | Events listing page |
| `/events/:id` | EventDetails | Individual event details |
| `/team` | Team | Team members page |
| `*` | NotFound | 404 error page |

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the Repository**
   - Click the "Fork" button at the top right of this page

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/codespace-website.git
   cd codespace-website
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   - Follow the existing code style
   - Add comments where necessary
   - Test your changes thoroughly

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your changes"
   ```

   Commit message format:
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for updates to existing features
   - `Docs:` for documentation changes

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes in detail
   - Submit the pull request

### Contribution Guidelines

- **Code Quality**: Write clean, readable, and maintainable code
- **TypeScript**: Use TypeScript for type safety
- **Components**: Create reusable, focused components
- **Styling**: Use Tailwind CSS and follow the design system in `index.css`
- **Responsiveness**: Ensure all changes work on mobile, tablet, and desktop
- **Accessibility**: Follow accessibility best practices
- **Performance**: Optimize images and avoid unnecessary re-renders
- **Testing**: Test your changes in different browsers

### What to Contribute

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ♿ Accessibility improvements
- 🌐 Translations
- 📱 Mobile responsiveness fixes
- ⚡ Performance optimizations

### Code Style

- Use functional components with hooks
- Follow the existing folder structure
- Use semantic HTML elements
- Use meaningful variable and function names
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use TypeScript interfaces for props and data structures

### Need Help?

If you have questions or need help:
- Open an issue on GitHub
- Contact us at `Codespace.it@glbitm.ac.in`
- Join our community channels

## 🚀 Deployment

### Deploy with Lovable

Simply open [Lovable](https://lovable.dev/projects/24d4b3ca-4723-45e7-9f73-8fbef171b87d) and click on **Share → Publish**.

### Custom Domain

To connect a custom domain:
1. Navigate to Project > Settings > Domains
2. Click Connect Domain
3. Follow the instructions

[Read more about custom domains](https://docs.lovable.dev/features/custom-domain#custom-domain)

### Self-Hosting

Build the project for production:

```bash
npm run build
```

The `dist/` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server (nginx, Apache)

## 📧 Contact

- **Email**: Codespace.it@glbitm.ac.in
- **Instagram**: [@codespaceclub](https://www.instagram.com/codespaceclub/)
- **LinkedIn**: [CodeSpace Club](https://www.linkedin.com/company/codespaceclub/)
- **Twitter**: [@codespaceclub](https://x.com/codespaceclub)
- **GitHub**: [codespace-club](https://github.com/codespace-club)

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ by CodeSpace Club**

For more information about Lovable, visit [docs.lovable.dev](https://docs.lovable.dev/)
