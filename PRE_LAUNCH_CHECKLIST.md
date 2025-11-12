# Pre-Launch Checklist

Complete this checklist before deploying to production.

## Content Review

### Personal Information
- [ ] Verify email address in Contact section and Footer
- [ ] Update LinkedIn URL if different from placeholder
- [ ] Update GitHub URL if different from placeholder
- [ ] Confirm phone number (if adding one)
- [ ] Verify location information is correct

### Links & URLs
- [ ] Test all internal navigation links
- [ ] Test CV download link
- [ ] Verify external social media links work
- [ ] Check all resume/project links are functional

### Images
- [ ] Verify all images display correctly
- [ ] Ensure images are optimized for web
- [ ] Check image alt text for accessibility
- [ ] Confirm hero images load properly on all devices

### Content Accuracy
- [ ] Review all text for typos and grammar
- [ ] Verify technical skills are up-to-date
- [ ] Confirm project descriptions are accurate
- [ ] Check dates in resume timeline
- [ ] Verify certifications are current

## Technical Checks

### Build & Performance
- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Check bundle sizes are reasonable
- [ ] Verify all pages generate correctly in `out/` directory

### Responsive Design
- [ ] Test on mobile (iOS Safari, Chrome)
- [ ] Test on tablet
- [ ] Test on desktop (Chrome, Firefox, Safari, Edge)
- [ ] Check navigation menu on mobile
- [ ] Verify form layout on small screens

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

### Functionality
- [ ] Test navigation between all pages
- [ ] Verify smooth scroll to sections
- [ ] Test contact form (if backend integrated)
- [ ] Check all buttons work correctly
- [ ] Verify PDF download works

## SEO & Metadata

- [ ] Review page titles in browser tabs
- [ ] Check meta descriptions for each page
- [ ] Verify Open Graph tags (if added)
- [ ] Add favicon (if not already done)
- [ ] Test social media share previews

## Accessibility

- [ ] Keyboard navigation works
- [ ] All images have alt text
- [ ] Color contrast ratios are sufficient
- [ ] Form labels are properly associated
- [ ] ARIA labels on interactive elements

## Security

- [ ] No API keys or secrets in code
- [ ] Contact form has CSRF protection (if applicable)
- [ ] HTTPS will be enabled (via CloudFront)
- [ ] No mixed content warnings

## AWS Deployment Prep

### S3 Setup
- [ ] Create S3 bucket with unique name
- [ ] Configure bucket for static hosting
- [ ] Set up bucket policy for CloudFront OAI
- [ ] Test upload of `out/` directory

### CloudFront Setup
- [ ] Create CloudFront distribution
- [ ] Configure Origin Access Identity (OAI)
- [ ] Set default root object to `index.html`
- [ ] Configure error pages (404, 403)
- [ ] Enable HTTPS redirect
- [ ] Set up custom domain (if using)

### SSL Certificate
- [ ] Request ACM certificate in us-east-1
- [ ] Validate certificate via DNS/Email
- [ ] Attach certificate to CloudFront distribution

### DNS Configuration
- [ ] Create CNAME or Alias record for domain
- [ ] Verify DNS propagation
- [ ] Test domain resolves correctly

## Post-Deployment Testing

### Functionality
- [ ] Test all pages on live URL
- [ ] Verify navigation works
- [ ] Check images load correctly
- [ ] Test form submission (if integrated)
- [ ] Verify PDF download

### Performance
- [ ] Run Lighthouse audit
- [ ] Check page load times
- [ ] Verify CloudFront caching works
- [ ] Test from different geographic locations

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt (if created)
- [ ] Test structured data (if added)

## Analytics & Monitoring

- [ ] Set up Google Analytics (optional)
- [ ] Configure CloudWatch alarms
- [ ] Enable CloudFront logging
- [ ] Set up error tracking (Sentry, etc.)

## Backup & Version Control

- [ ] Code committed to Git
- [ ] Create GitHub/GitLab repository (if applicable)
- [ ] Tag release version
- [ ] Document deployment process

## Contact Form Integration (If Applicable)

- [ ] Set up backend (AWS SES, Lambda, or third-party)
- [ ] Test form submissions
- [ ] Configure email notifications
- [ ] Add spam protection (reCAPTCHA, etc.)
- [ ] Test error handling

## Final Checks

- [ ] Review entire site on production URL
- [ ] Have someone else review the site
- [ ] Test on different devices and browsers
- [ ] Verify all links work
- [ ] Check loading times are acceptable

## Marketing Preparation

- [ ] Prepare announcement for social media
- [ ] Update LinkedIn profile with portfolio link
- [ ] Add to resume/CV
- [ ] Share with network
- [ ] Add to email signature

## Documentation

- [ ] README.md is up-to-date
- [ ] DEPLOYMENT.md instructions verified
- [ ] Document any custom configurations
- [ ] Note deployment credentials location (securely)

## Future Enhancements Planned

- [ ] Blog content creation schedule
- [ ] Contact form backend integration
- [ ] Analytics integration
- [ ] Additional projects to showcase
- [ ] Testimonials section
- [ ] Case studies

---

## Quick Deployment Commands

```bash
# Build
npm run build

# Deploy to S3
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

## Emergency Rollback

If issues occur after deployment:

```bash
# Re-deploy previous version from Git
git checkout previous-tag
npm run build
aws s3 sync out/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

**Last Updated:** [Add date when checklist is completed]
**Deployed By:** [Your name]
**Deployment Date:** [Deployment date]
