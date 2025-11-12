# Tinashe Makamure - Professional Portfolio

A modern, professional portfolio website showcasing the expertise and experience of Tinashe Makamure, a Senior Software & AI Engineer specializing in Cloud Architecture, Machine Learning, and Data Engineering.

## Features

- **Modern Hero Section** - Eye-catching landing page with professional branding
- **About Section** - Comprehensive bio highlighting education and expertise
- **Skills Showcase** - Detailed breakdown of technical skills across multiple domains
- **Interactive Resume** - Timeline-based professional experience and education
- **Projects Portfolio** - Showcase of completed projects with detailed descriptions
- **Blog Section** - Placeholder for future technical blog posts with markdown support
- **Contact Form** - Professional contact section for collaboration inquiries
- **Responsive Design** - Fully responsive across all devices
- **SEO Optimized** - Proper metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Configured for AWS S3 + CloudFront static hosting

## Color Scheme

- Primary: `#050915` (Dark Navy)
- Accent: `#D4AF37` (Gold)
- Background: White and Off-white
- Supporting colors for gradients and highlights

## Project Structure

```
professional-portfolio/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog page
│   ├── projects/          # Projects showcase page
│   ├── resume/            # Resume timeline page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── ProjectsShowcase.tsx
│   ├── ResumeTimeline.tsx
│   └── Skills.tsx
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── CV_Tinashe_Makamure__Software_Engineer.pdf
└── ...config files
```

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build
```

### Export for S3 Deployment

The project is configured with `output: "export"` in `next.config.ts`, which generates a static site in the `out/` directory:

```bash
npm run build
```

The `out/` directory can then be uploaded to your S3 bucket.

## Deployment to AWS S3 + CloudFront

1. **Build the static site**:
   ```bash
   npm run build
   ```

2. **Upload to S3**:
   - Upload the contents of the `out/` directory to your S3 bucket
   - Ensure the bucket is configured for static website hosting

3. **CloudFront Configuration**:
   - Point your CloudFront distribution to the S3 bucket
   - Configure custom domain and SSL certificate as needed
   - Set up proper caching rules

## Key Sections

### Home Page
- Hero section with professional introduction
- About section with bio and achievements
- Skills breakdown across 6 major categories
- Contact form with social links

### Resume Page
- Educational background
- Complete work history timeline
- Professional certifications
- Downloadable PDF resume

### Projects Page
- 8+ major projects showcased
- Detailed achievements and technologies
- Categorized by domain (AI, Cloud, Data, etc.)

### Blog Page
- Currently showing "Coming Soon" message
- Configured for future markdown-based posts
- Categories: AI/ML, Cloud, Data Engineering, Software Development

## Customization

### Adding Blog Posts
Future blog posts can be added as markdown files. The blog page is ready for integration with markdown rendering using `react-markdown` and `remark-gfm`.

### Contact Form
The contact form currently shows a success message. For production, integrate with:
- AWS SES (Simple Email Service)
- Formspree
- Custom API endpoint

### Images
Replace placeholder images in `public/images/` with actual professional photos.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Tinashe Makamure. All rights reserved.

## Contact

For inquiries, reach out via:
- Email: tmakamure32@gmail.com
- LinkedIn: [linkedin.com/in/tinashe-makamure](https://linkedin.com/in/tinashe-makamure)
- GitHub: [github.com/tinashe](https://github.com/tinashe)
