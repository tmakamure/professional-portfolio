# Quick Start Guide

## Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

The static site will be generated in the `out/` directory.

## Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Create production build and export static site
- `npm run start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint to check code quality

## Project Pages

- **Home** - `/` - Hero, About, Skills, Contact sections
- **Resume** - `/resume` - Professional timeline and experience
- **Projects** - `/projects` - Portfolio of completed work
- **Blog** - `/blog` - Blog section (coming soon)

## Making Changes

### Updating Content

**Personal Information:**
- Edit [components/Hero.tsx](components/Hero.tsx) for hero section
- Edit [components/About.tsx](components/About.tsx) for bio
- Edit [components/Footer.tsx](components/Footer.tsx) for contact info

**Skills:**
- Edit [components/Skills.tsx](components/Skills.tsx)
- Modify `skillCategories` array to add/remove skills

**Projects:**
- Edit [components/ProjectsShowcase.tsx](components/ProjectsShowcase.tsx)
- Modify `projects` array to add/remove projects

**Resume:**
- Edit [components/ResumeTimeline.tsx](components/ResumeTimeline.tsx)
- Update `education` and `experience` arrays

### Updating Styles

**Colors:**
- Edit [tailwind.config.ts](tailwind.config.ts)
- Current scheme: `#050915` (primary), `#D4AF37` (accent)

**Global Styles:**
- Edit [app/globals.css](app/globals.css)

### Adding Images

1. Place images in `public/images/` directory
2. Reference with `/images/filename.png`
3. Use Next.js `Image` component for optimization (if not using static export)

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for AWS S3 + CloudFront deployment instructions.

### Quick Deploy to S3
```bash
# Build
npm run build

# Upload to S3 (replace bucket name)
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront cache (replace distribution ID)
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
PORT=3001 npm run dev
```

### Build errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Module not found errors
```bash
npm install
```

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Markdown:** react-markdown (for future blog posts)

## File Structure

```
├── app/              # Next.js app router pages
├── components/       # React components
├── public/          # Static assets
│   ├── images/      # Image files
│   └── *.pdf        # Documents
├── .gitignore       # Git ignore rules
├── next.config.ts   # Next.js configuration
├── tailwind.config.ts # Tailwind configuration
└── tsconfig.json    # TypeScript configuration
```

## Support

For issues or questions:
- Check [README.md](README.md) for detailed documentation
- Review [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- Check [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for project overview
