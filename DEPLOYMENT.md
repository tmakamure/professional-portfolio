# AWS S3 + CloudFront Deployment Guide

This guide explains how to deploy your Next.js portfolio to AWS S3 with CloudFront for optimal performance and global distribution.

## Prerequisites

- AWS Account
- AWS CLI installed and configured
- Domain name (optional, but recommended)

## Step 1: Build the Static Site

```bash
npm run build
```

This will create an `out/` directory with your static site files.

## Step 2: Create S3 Bucket

1. **Via AWS Console:**
   - Go to S3 in AWS Console
   - Click "Create bucket"
   - Enter bucket name (e.g., `tinashe-portfolio`)
   - Select your preferred region
   - Uncheck "Block all public access" (we'll use CloudFront for access control)
   - Create bucket

2. **Via AWS CLI:**
   ```bash
   aws s3 mb s3://tinashe-portfolio --region us-east-1
   ```

## Step 3: Configure S3 Bucket for Static Website Hosting

1. **Via AWS Console:**
   - Go to bucket properties
   - Enable "Static website hosting"
   - Set Index document: `index.html`
   - Set Error document: `404.html`

2. **Via AWS CLI:**
   ```bash
   aws s3 website s3://tinashe-portfolio --index-document index.html --error-document 404.html
   ```

## Step 4: Upload Files to S3

**Via AWS CLI:**
```bash
aws s3 sync out/ s3://tinashe-portfolio --delete
```

The `--delete` flag removes files from S3 that are not in your local `out/` directory.

## Step 5: Create CloudFront Distribution

1. **Via AWS Console:**
   - Go to CloudFront in AWS Console
   - Click "Create Distribution"
   - Origin Settings:
     - Origin Domain: Select your S3 bucket
     - Origin Access: Legacy access identities (create new OAI)
     - Enable Origin Shield: No (optional for cost savings)

   - Default Cache Behavior:
     - Viewer Protocol Policy: Redirect HTTP to HTTPS
     - Allowed HTTP Methods: GET, HEAD
     - Cache Policy: CachingOptimized

   - Settings:
     - Price Class: Use all edge locations (or select based on your needs)
     - Alternate Domain Names (CNAMEs): Add your domain (e.g., tinashe.dev)
     - SSL Certificate: Request or import ACM certificate
     - Default Root Object: `index.html`

   - Create distribution

2. **Update S3 Bucket Policy** (via Console or CLI):
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "AllowCloudFrontOAI",
         "Effect": "Allow",
         "Principal": {
           "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity YOUR_OAI_ID"
         },
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::tinashe-portfolio/*"
       }
     ]
   }
   ```

## Step 6: Configure Custom Domain (Optional)

1. **Request SSL Certificate in ACM:**
   - Go to Certificate Manager in AWS Console (must be in `us-east-1` for CloudFront)
   - Request public certificate
   - Enter domain name (e.g., `tinashe.dev` and `www.tinashe.dev`)
   - Validate via DNS or Email

2. **Update DNS Records:**
   - Go to your domain registrar or Route 53
   - Create CNAME record:
     - Name: `www` (or `@` for root domain)
     - Value: CloudFront distribution domain (e.g., `d111111abcdef8.cloudfront.net`)

   - For root domain, use Route 53 Alias record pointing to CloudFront

## Step 7: Invalidate CloudFront Cache (After Updates)

After deploying updates, invalidate the CloudFront cache:

```bash
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## Automated Deployment Script

Create a `deploy.sh` script in your project root:

```bash
#!/bin/bash

echo "Building the project..."
npm run build

echo "Uploading to S3..."
aws s3 sync out/ s3://tinashe-portfolio --delete

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run deployment:
```bash
./deploy.sh
```

## Environment Variables for CI/CD

If using GitHub Actions or other CI/CD:

```yaml
name: Deploy to S3

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '20'

    - name: Install dependencies
      run: npm install

    - name: Build
      run: npm run build

    - name: Configure AWS Credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1

    - name: Deploy to S3
      run: aws s3 sync out/ s3://tinashe-portfolio --delete

    - name: Invalidate CloudFront
      run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
```

## Cost Optimization Tips

1. **CloudFront Price Class:** Use "Use Only North America and Europe" if your audience is primarily in those regions
2. **S3 Storage Class:** Use S3 Standard for frequently accessed content
3. **Enable CloudFront Compression:** Reduces bandwidth costs
4. **Set appropriate Cache-Control headers:** Longer caching reduces origin requests

## Monitoring

1. **CloudFront Metrics:**
   - Monitor requests, data transfer, and errors in CloudWatch

2. **S3 Metrics:**
   - Enable S3 request metrics for detailed analytics

## Security Best Practices

1. **Never allow direct S3 public access** - Always use CloudFront with OAI
2. **Enable HTTPS only** - Redirect HTTP to HTTPS in CloudFront
3. **Use least privilege IAM policies** for deployment credentials
4. **Enable CloudFront logging** for security auditing
5. **Consider AWS WAF** for additional protection against attacks

## Troubleshooting

### Issue: 404 errors on direct page access
**Solution:** Configure CloudFront error pages to return `index.html` with 200 status for SPA routing

### Issue: Old content still showing after deployment
**Solution:** Create CloudFront invalidation for affected paths

### Issue: SSL certificate validation pending
**Solution:** Verify DNS records are correctly configured for certificate validation

## Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
